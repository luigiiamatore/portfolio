import { SITE } from "@/lib/content";

export default function Intro() {
  return (
    <section aria-label="Introduction" className="border-border py-14 sm:py-16">
      <p className="max-w-xl text-xl leading-relaxed text-foreground sm:text-2xl">
        {SITE.intro}
      </p>
    </section>
  );
}
