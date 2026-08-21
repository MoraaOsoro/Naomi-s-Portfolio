"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function parseValue(raw: string) {
  const match = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, number, suffix] = match;
  return { prefix, number: parseFloat(number), suffix, decimals: number.includes(".") ? 1 : 0 };
}

export default function AnimatedMetric({ value }: { value: string }) {
  const parsed = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const [display, setDisplay] = useState(parsed ? "0" : value);

  useEffect(() => {
    if (!parsed || !ref.current || prefersReducedMotion) return;

    const node = ref.current;
    let hasAnimated = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          const duration = 1100;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = parsed.number * eased;
            setDisplay(
              `${parsed.prefix}${current.toFixed(parsed.decimals)}${parsed.suffix}`
            );
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [parsed, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span ref={ref}>{value}</span>;
  }

  return <span ref={ref}>{display}</span>;
}
