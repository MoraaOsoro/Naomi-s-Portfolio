import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
      <h2 className="balance mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && <p className="pretty mt-4 text-lg leading-relaxed text-muted">{description}</p>}
    </Reveal>
  );
}
