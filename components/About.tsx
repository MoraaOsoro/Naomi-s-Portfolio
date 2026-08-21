import { about } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeading eyebrow="About" title="From frontline support to solution ownership" />

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {about.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 70}>
              <p className="pretty text-base leading-relaxed text-muted lg:text-[1.05rem]">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
