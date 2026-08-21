import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line bg-surface/40 py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeading
          eyebrow="Experience"
          title="Career progression"
          description="From frontline IT support to designing and owning automated business solutions across multiple markets."
        />

        <ol className="mt-12 space-y-10 border-l border-line pl-8 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal key={job.role + job.company} as="li" delay={i * 60} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent sm:-left-[calc(2.5rem+5px)]"
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-medium text-ink">{job.role}</h3>
                <p className="text-sm font-medium text-muted">{job.dates}</p>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">
                {job.company} · {job.location}
              </p>
              <p className="pretty mt-3 max-w-2xl text-sm leading-relaxed text-muted">{job.scope}</p>

              <ul className="mt-4 space-y-2.5">
                {job.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                    <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-muted" />
                    <span className="pretty">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
