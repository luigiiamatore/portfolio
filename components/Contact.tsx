import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/lib/content";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-border py-14 sm:py-16"
    >
      <div className="flex flex-col gap-6">
        <SectionHeading title="Contact" id="contact" />
        <p className="max-w-xl text-base leading-relaxed text-muted">
          Let&rsquo;s talk. I&rsquo;m open to backend and full-stack
          engineering roles across Europe. The fastest way to reach me is
          email, and I usually reply within a day.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center border border-foreground bg-foreground px-5 py-2.5 font-semibold text-background transition-opacity hover:opacity-85"
          >
            {SITE.email}
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            LinkedIn
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
