import { skillCategories } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills organized by how they're used"
          description="Grouped by the kind of problem each set solves, not scored as arbitrary percentages."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={(i % 2) * 80}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6 shadow-card">
                <h3 className="font-display text-lg font-medium text-ink">{category.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{category.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm text-ink"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
