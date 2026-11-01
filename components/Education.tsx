import SectionHeading from "@/components/SectionHeading";
import { CERTIFICATIONS, EDUCATION } from "@/lib/content";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-24 py-14 sm:py-16"
    >
      <div className="flex flex-col gap-10">
        <SectionHeading title="Education & Certifications" id="education" />

        <div className="flex flex-col gap-6">
          {EDUCATION.map((entry) => (
            <div
              key={entry.degree}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {entry.degree}
                </h3>
                <p className="text-sm text-muted">
                  {entry.institution}
                  {entry.detail ? ` — ${entry.detail}` : ""}
                </p>
              </div>
              <span className="font-mono text-xs tabular-nums text-muted">{entry.period}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="border-b border-border pb-3 font-mono text-xs uppercase tracking-[0.08em] text-muted">
            Certifications
          </h3>
          <div className="flex flex-col gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-foreground">
                    {cert.name}
                  </span>
                  <span className="text-sm text-muted">— {cert.issuer}</span>
                  {cert.status === "in-progress" && (
                    <span className="border border-accent px-2 py-0.5 font-mono text-xs uppercase tracking-wide text-accent">
                      In progress
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted">
                  {cert.detail} <span className="font-mono text-xs">· {cert.date}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
