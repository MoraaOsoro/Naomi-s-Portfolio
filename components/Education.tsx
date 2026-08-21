import { GraduationCap } from "lucide-react";
import { education, trainingNote } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-line py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeading eyebrow="Education" title="Academic foundation" />

        <div className="mt-8 max-w-2xl space-y-4">
          {education.map((entry) => (
            <Reveal key={entry.degree}>
              <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-6">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper text-accent"
                >
                  <GraduationCap size={17} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">{entry.degree}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {entry.institution} · {entry.dates}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={80}>
            <p className="pretty text-sm leading-relaxed text-muted">{trainingNote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
