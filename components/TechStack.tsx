import SectionHeading from "@/components/SectionHeading";
import { TECH_STACK } from "@/lib/content";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className="scroll-mt-24 border-t border-border py-14 sm:py-16"
    >
      <div className="flex flex-col gap-8">
        <SectionHeading title="Tech Stack" id="tech-stack" />
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {TECH_STACK.map((group) => (
            <div key={group.category} className="flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-border px-3 py-1 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
