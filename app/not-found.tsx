import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">404</p>
      <h1 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper"
      >
        <ArrowLeft size={15} strokeWidth={2} />
        Back to home
      </Link>
    </main>
  );
}
