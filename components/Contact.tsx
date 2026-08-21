"use client";

import { Download, Mail, Phone } from "lucide-react";
import { track } from "@/lib/analytics";
import { person } from "@/lib/data";
import ContactForm from "./ContactForm";
import LinkedinIcon from "./icons/LinkedinIcon";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">Contact</p>
            <h2 className="balance mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Interested in a technology professional who bridges support, data and automation?
            </h2>
            <p className="pretty mt-5 max-w-lg text-base leading-relaxed text-muted">
              Naomi is open to conversations about Business IT, digital solutions, Power Platform
              or ICT operations roles. The fastest way to reach her is by email or LinkedIn.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${person.email}`}
                onClick={() => track("email_click", { source: "contact" })}
                className="flex items-center gap-3 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                <Mail size={16} strokeWidth={1.75} />
                {person.email}
              </a>
              <a
                href={`tel:${person.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                <Phone size={16} strokeWidth={1.75} />
                {person.phone}
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => track("linkedin_click", { source: "contact" })}
                className="flex items-center gap-3 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                <LinkedinIcon size={16} />
                linkedin.com/in/naomi-moraa-95b849242
              </a>
              <a
                href={person.cvFile}
                download
                onClick={() => track("cv_download", { source: "contact" })}
                className="flex items-center gap-3 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                <Download size={16} strokeWidth={1.75} />
                Download full CV (PDF)
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
