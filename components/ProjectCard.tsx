"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { track } from "@/lib/analytics";
import type { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      onClick={() => track("project_view", { project: project.slug })}
      className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-muted"
            >
              {category}
            </span>
          ))}
        </div>
        <ArrowUpRight
          size={18}
          strokeWidth={1.75}
          className="shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
        />
      </div>

      <h3 className="mt-5 font-display text-xl font-medium tracking-tight text-ink">
        {project.name}
      </h3>
      <p className="mt-1 text-sm text-muted">
        {project.organization} · {project.market} · {project.dates}
      </p>
      <p className="pretty mt-4 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>

      <ul className="mt-5 space-y-1.5 border-t border-line pt-4">
        {project.impact.slice(0, 2).map((point) => (
          <li key={point} className="flex gap-2 text-sm text-ink">
            <span aria-hidden="true" className="text-accent">
              ▸
            </span>
            {point}
          </li>
        ))}
      </ul>
    </Link>
  );
}
