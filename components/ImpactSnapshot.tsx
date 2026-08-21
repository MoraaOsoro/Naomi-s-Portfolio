import { impactMetrics } from "@/lib/data";
import AnimatedMetric from "./AnimatedMetric";
import Reveal from "./Reveal";

export default function ImpactSnapshot() {
  return (
    <section aria-label="Impact snapshot" className="border-y border-line bg-surface/60">
      <div className="mx-auto max-w-content px-6 py-12 lg:px-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {impactMetrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 60}>
              <div>
                <p className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                  <AnimatedMetric value={metric.value} />
                </p>
                <p className="mt-2 text-sm font-medium text-ink">{metric.label}</p>
                {metric.detail && (
                  <p className="mt-1 text-sm leading-snug text-muted">{metric.detail}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
