"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_SECTIONS, SITE } from "@/lib/content";

export default function Sidebar() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target as HTMLElement);
            if (index !== -1) setActive(index);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="border-b border-border lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:flex lg:w-96 lg:flex-col lg:justify-between lg:border-b-0 lg:border-r lg:py-10">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-6 lg:mx-0 lg:max-w-none lg:px-10 lg:py-0">
        <div className="flex items-center justify-between lg:block">
          <Link href="/" className="text-2xl font-black leading-[1.05] tracking-tight text-foreground lg:text-4xl">
            Luigi
            <br className="hidden lg:block" /> Amatore
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center border border-border text-foreground lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted">
          {SITE.title} &mdash; Milan,{" "}
          <span className="text-accent">{SITE.availability.replace("Milan, ", "")}</span>
        </p>

        <a
          href={SITE.cvPath}
          className="inline-flex w-fit items-center border border-foreground bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
        >
          Download CV
        </a>

        <nav
          aria-label="Section navigation"
          className={`${open ? "flex" : "hidden"} flex-col gap-0 lg:flex`}
          id="mobile-nav"
        >
          {NAV_SECTIONS.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setOpen(false)}
              className={`flex items-baseline gap-4 border-t border-border py-3 text-sm transition-colors hover:text-accent ${
                active === index ? "font-bold text-foreground" : "text-muted"
              }`}
            >
              <span className={`font-mono text-xs ${active === index ? "text-accent" : "text-muted"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              {section.label}
            </a>
          ))}
        </nav>

        {open && (
          <div className="flex flex-col gap-2 border-t border-border pt-4 text-xs font-medium text-muted lg:hidden">
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent">
              <GitHubIcon /> GitHub
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-accent">
              <MailIcon /> Email
            </a>
          </div>
        )}
      </div>

      <div className="hidden px-10 text-xs font-medium text-muted lg:flex lg:flex-col lg:gap-2">
        <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent">
          <LinkedInIcon /> LinkedIn
        </a>
        <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent">
          <GitHubIcon /> GitHub
        </a>
        <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-accent">
          <MailIcon /> Email
        </a>
      </div>
    </header>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
