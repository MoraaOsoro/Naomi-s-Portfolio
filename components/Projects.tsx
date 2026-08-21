"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import type { ProjectCategory } from "@/lib/types";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const categories: ProjectCategory[] = [
  "Automation",
  "Data & Analytics",
  "Governance & Compliance",
  "ICT Operations",
];

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.categories.includes(active));
  }, [active]);

  const availableCategories = categories.filter((category) =>
    projects.some((project) => project.categories.includes(category))
  );

  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeading
          eyebrow="Featured Work"
          title="Case studies in automation, data & governance"
          description="Selected projects delivered across BAT's East and Southern African markets — each one replacing a manual, costly or hard-to-monitor process with a working digital solution."
        />

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by capability">
          <button
            type="button"
            onClick={() => setActive("All")}
            aria-pressed={active === "All"}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === "All"
                ? "border-ink bg-ink text-paper"
                : "border-line text-muted hover:text-ink"
            }`}
          >
            All Work
          </button>
          {availableCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === category
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-muted hover:text-ink"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
