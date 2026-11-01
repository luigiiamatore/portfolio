import SectionHeading from "@/components/SectionHeading";
import { EXPERIENCE } from "@/lib/content";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 border-t border-border py-14 sm:py-16"
    >
      <div className="flex flex-col gap-2">
        <SectionHeading title="Experience" id="experience" />
        <div className="flex flex-col">
          {EXPERIENCE.map((entry, index) => (
            <article
              key={`${entry.company}-${entry.role}`}
              className="flex flex-col gap-3 border-b border-border py-8"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="flex items-baseline gap-3 text-lg font-semibold text-foreground">
                  <span aria-hidden="true" className="font-mono text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {entry.role}{" "}
                  <span className="font-normal text-muted">&mdash; {entry.company}</span>
                </h3>
                <span className="font-mono text-xs tabular-nums text-muted">
                  {entry.period}
                </span>
              </div>
              <ul className="flex flex-col gap-2 pl-7 text-sm leading-relaxed text-muted">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span aria-hidden="true" className="text-accent">
                      &middot;
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
