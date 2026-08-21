"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
};

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

export default function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const cls = `reveal ${inView ? "in-view" : ""} ${className ?? ""}`;
  const style = { animationDelay: inView ? `${delay}ms` : undefined };

  if (as === "li") {
    return (
      <li ref={ref as React.RefObject<HTMLLIElement>} className={cls} style={style}>
        {children}
      </li>
    );
  }

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={cls} style={style}>
      {children}
    </div>
  );
}
