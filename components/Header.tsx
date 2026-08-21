"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";
import { nav, person } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-content items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="font-display text-lg font-medium tracking-tight text-ink"
        >
          {person.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={person.cvFile}
            download
            onClick={() => track("cv_download", { source: "header" })}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download size={15} strokeWidth={2} />
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-6 pb-8 pt-2 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-base font-medium text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={person.cvFile}
            download
            onClick={() => track("cv_download", { source: "mobile_nav" })}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-medium text-paper"
          >
            <Download size={15} strokeWidth={2} />
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
