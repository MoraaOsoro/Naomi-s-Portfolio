import { person } from "@/lib/data";

/**
 * Placeholder profile avatar built from initials.
 *
 * To use a real photo instead: add an image to /public (e.g. /public/avatar.jpg)
 * and replace this component's contents with a Next.js <Image /> pointing to it.
 * See README.md → "Updating your profile photo".
 */
export default function Avatar({ size = 220 }: { size?: number }) {
  return (
    <div
      className="relative flex shrink-0 items-center justify-center rounded-2xl border border-line bg-surface font-display text-ink shadow-card"
      style={{ width: size, height: size, fontSize: size * 0.32 }}
      role="img"
      aria-label={`${person.name} — profile placeholder`}
    >
      <span aria-hidden="true">{person.initials}</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, transparent 55%, hsl(var(--accent) / 0.14))",
        }}
      />
    </div>
  );
}
