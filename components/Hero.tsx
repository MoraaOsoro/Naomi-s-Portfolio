"use client";

import { ArrowRight, Download, Mail } from "lucide-react";
import { track } from "@/lib/analytics";
import { person } from "@/lib/data";
import Avatar from "./Avatar";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <p className="reveal in-view text-sm font-medium uppercase tracking-[0.14em] text-accent">
              {person.role}
            </p>

            <h1 className="reveal in-view balance mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              {person.positioning}
            </h1>

            <p
              className="reveal in-view pretty mt-6 max-w-2xl text-lg leading-relaxed text-muted"
              style={{ animationDelay: "80ms" }}
            >
              {person.supporting}
            </p>

            <div
              className="reveal in-view mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "160ms" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                View My Work
                <ArrowRight size={15} strokeWidth={2} />
              </a>
              <a
                href={person.cvFile}
                download
                onClick={() => track("cv_download", { source: "hero" })}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper"
              >
                <Download size={15} strokeWidth={2} />
                Download CV
              </a>
              <a
                href="#contact"
                onClick={() => track("contact_click", { source: "hero" })}
                className="inline-flex items-center gap-2 px-3 py-3 text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                Contact Me
              </a>
            </div>

            <div
              className="reveal in-view mt-8 flex items-center gap-5 text-muted"
              style={{ animationDelay: "220ms" }}
            >
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => track("linkedin_click", { source: "hero" })}
                aria-label="Naomi Moraa Osoro on LinkedIn"
                className="inline-flex items-center gap-2 text-sm transition-colors hover:text-ink"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
              <a
                href={`mailto:${person.email}`}
                onClick={() => track("email_click", { source: "hero" })}
                aria-label={`Email ${person.name}`}
                className="inline-flex items-center gap-2 text-sm transition-colors hover:text-ink"
              >
                <Mail size={16} strokeWidth={1.75} />
                Email
              </a>
            </div>
          </div>

          <div className="reveal in-view justify-self-center lg:justify-self-end" style={{ animationDelay: "120ms" }}>
            <Avatar />
          </div>
        </div>
      </div>
    </section>
  );
}
