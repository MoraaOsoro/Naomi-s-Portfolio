import { differentiators } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Differentiators() {
  return (
    <section
      aria-labelledby="differentiators-heading"
      className="border-y border-line bg-surface/40 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Naomi"
          title="What makes this profile particularly useful"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {differentiators.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 80}>
              <div className="flex gap-4 rounded-2xl border border-line bg-surface p-6">
                <span
                  aria-hidden="true"
                  className="font-display text-lg text-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">{item.title}</h3>
                  <p className="pretty mt-1.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
