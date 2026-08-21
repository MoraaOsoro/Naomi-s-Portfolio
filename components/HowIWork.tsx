import { howIWork } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function HowIWork() {
  return (
    <section aria-labelledby="how-i-work-heading" className="py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeading eyebrow="Operating Style" title="How I work" />

        <div className="mt-10 grid grid-cols-1 gap-0 sm:grid-cols-5 sm:gap-4">
          {howIWork.map((step, i) => (
            <Reveal key={step.stage} delay={i * 60}>
              <div className="relative border-t border-line py-6 sm:border-t-0 sm:py-0">
                <p className="font-display text-2xl font-medium text-ink">
                  <span className="text-accent">{i + 1}.</span> {step.stage}
                </p>
                <p className="pretty mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
