import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { person, projects } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} — ${person.name}`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <Header />
      <main id="main" className="pb-24 pt-40 sm:pt-48">
        <article className="mx-auto max-w-3xl px-6 lg:px-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={15} strokeWidth={2} />
            Back to all work
          </Link>

          <Reveal className="mt-6" as="div">
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

            <h1 className="balance mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              {project.name}
            </h1>
            <p className="mt-3 text-sm font-medium text-muted">
              {project.organization} · {project.market} · {project.dates}
            </p>
            <p className="pretty mt-5 text-lg leading-relaxed text-muted">{project.summary}</p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-lg font-medium text-ink">Context</h2>
              <p className="pretty mt-2 text-sm leading-relaxed text-muted">{project.context}</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="font-display text-lg font-medium text-ink">Problem</h2>
              <p className="pretty mt-2 text-sm leading-relaxed text-muted">{project.problem}</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display text-lg font-medium text-ink">My Role</h2>
              <p className="pretty mt-2 text-sm leading-relaxed text-muted">{project.role}</p>
            </Reveal>
            <Reveal delay={180}>
              <h2 className="font-display text-lg font-medium text-ink">Solution</h2>
              <p className="pretty mt-2 text-sm leading-relaxed text-muted">{project.solution}</p>
            </Reveal>
          </div>

          <Reveal className="mt-10 border-t border-line pt-10" as="div">
            <h2 className="font-display text-lg font-medium text-ink">Approach</h2>
            <ul className="mt-3 space-y-2.5">
              {project.approach.map((step) => (
                <li key={step} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {step}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-10 rounded-2xl border border-line bg-surface p-6" as="div">
            <h2 className="font-display text-lg font-medium text-ink">Impact</h2>
            <ul className="mt-3 space-y-2.5">
              {project.impact.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm font-medium leading-relaxed text-ink">
                  <span aria-hidden="true" className="text-accent">
                    ▸
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-10 border-t border-line pt-10" as="div">
            <h2 className="font-display text-lg font-medium text-ink">Skills Demonstrated</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm text-ink"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>

          {otherProjects.length > 0 && (
            <div className="mt-16 border-t border-line pt-10">
              <h2 className="font-display text-lg font-medium text-ink">More case studies</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {otherProjects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-line bg-surface p-5 transition-colors hover:bg-paper"
                  >
                    <span className="text-sm font-medium text-ink">{p.name}</span>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.75}
                      className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
