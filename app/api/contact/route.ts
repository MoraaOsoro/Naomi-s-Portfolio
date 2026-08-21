import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string; // honeypot field — should always be empty
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message, company } = body;

  // Honeypot: real users never fill this hidden field in.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || name.trim().length < 2) {
    return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  }

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!message || message.trim().length < 10) {
    return NextResponse.json(
      { ok: false, error: "Please include a short message (10+ characters)." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL;

  // No email provider configured yet — accept the submission so the UI can
  // show a clear success state, but nothing is sent. Wire up a provider
  // (see README.md → "Connecting the contact form") to deliver messages.
  if (!apiKey || !toAddress) {
    console.warn(
      "[contact] RESEND_API_KEY / CONTACT_TO_EMAIL not set — message received but not delivered.",
      { name, email }
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact Form <onboarding@resend.dev>",
        to: [toAddress],
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        text: message,
      }),
    });

    if (!res.ok) {
      throw new Error(`Email provider responded with ${res.status}`);
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[contact] Failed to deliver message", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your message. Please try email instead." },
      { status: 502 }
    );
  }
}
