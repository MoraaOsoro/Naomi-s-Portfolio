"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { track } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok || !result.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      track("contact_form_submit");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again, or email directly.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-surface p-6 text-sm text-ink">
        <p className="font-medium">Message sent — thank you.</p>
        <p className="mt-1 text-muted">Naomi will get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-describedby={status === "error" ? "contact-error" : undefined}>
      {/* Honeypot field — hidden from real users, visible to bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          autoComplete="name"
          className="mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          className="mt-1.5 w-full resize-none rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
        />
      </div>

      {status === "error" && (
        <p id="contact-error" role="alert" className="text-sm text-red-600 dark:text-red-400">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        {status !== "submitting" && <Send size={15} strokeWidth={2} />}
      </button>
    </form>
  );
}
