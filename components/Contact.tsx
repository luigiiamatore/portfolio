import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/lib/content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/SocialIcons";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 py-14 sm:py-16"
    >
      <div className="flex flex-col gap-6">
        <SectionHeading title="Contact" id="contact" />
        <p className="max-w-xl text-base leading-relaxed text-muted">
          Let&rsquo;s talk! I&rsquo;m open to backend and full-stack
          engineering positions across Europe. The fastest way to reach me is
          email, and I usually reply within a day.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 border border-foreground px-4 py-2.5 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            <MailIcon />
            Send me an email
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-4 py-2.5 font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-4 py-2.5 font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
