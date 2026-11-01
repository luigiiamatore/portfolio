import { NAV_SECTIONS } from "@/lib/content";

export default function SectionHeading({ title, id }: { title: string; id: string }) {
  const index = NAV_SECTIONS.findIndex((s) => s.id === id);
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="flex items-baseline gap-4 border-b border-border pb-4">
      <span aria-hidden="true" className="font-mono text-sm font-semibold text-accent">
        {number}
      </span>
      <h2
        id={`${id}-heading`}
        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
}
