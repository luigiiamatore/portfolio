import Link from "next/link";
import { SITE } from "@/lib/content";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 px-6 py-24 sm:py-32">
      <span className="font-mono text-6xl font-bold text-accent">404</span>
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        That page or file doesn&rsquo;t exist
      </h1>
      <p className="max-w-md text-base leading-relaxed text-muted">
        If you followed a &ldquo;Download CV&rdquo; link, the file may not be
        in place yet. Try emailing me directly instead.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-5 text-sm">
        <Link
          href="/"
          className="inline-flex items-center border border-foreground bg-foreground px-5 py-2.5 font-semibold text-background transition-opacity hover:opacity-85"
        >
          Back to the homepage
        </Link>
        <a
          href={`mailto:${SITE.email}`}
          className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          Email {SITE.name.split(" ")[0]}
        </a>
      </div>
    </div>
  );
}
