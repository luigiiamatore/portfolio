"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NAV_SECTIONS, SITE } from "@/lib/content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/SocialIcons";

export default function Sidebar() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const targetIndex = useRef<number | null>(null);
  const isNavigating = useRef(false);
  const scrollStopTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const sections = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isNavigating.current) return;

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

    const finishNavigation = () => {
      if (targetIndex.current !== null) {
        setActive(targetIndex.current);
      }
      targetIndex.current = null;
      isNavigating.current = false;
    };

    const handleScroll = () => {
      if (!isNavigating.current) return;
      if (scrollStopTimer.current) clearTimeout(scrollStopTimer.current);
      scrollStopTimer.current = setTimeout(finishNavigation, 150);
    };

    const cancelNavigation = () => {
      if (!isNavigating.current) return;
      targetIndex.current = null;
      isNavigating.current = false;
      if (scrollStopTimer.current) clearTimeout(scrollStopTimer.current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", cancelNavigation, { passive: true });
    window.addEventListener("touchstart", cancelNavigation, { passive: true });
    window.addEventListener("pointerdown", cancelNavigation, { passive: true });
    window.addEventListener("keydown", cancelNavigation);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", cancelNavigation);
      window.removeEventListener("touchstart", cancelNavigation);
      window.removeEventListener("pointerdown", cancelNavigation);
      window.removeEventListener("keydown", cancelNavigation);
      if (scrollStopTimer.current) clearTimeout(scrollStopTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const goToSection = (index: number) => {
    setActive(index);
    targetIndex.current = index;
    isNavigating.current = true;
    setOpen(false);
  };

  return (
    <header className="lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:flex lg:w-96 lg:flex-col lg:justify-between lg:border-r lg:border-border lg:py-10">
      <div className="lg:flex lg:flex-col">
      <div className="fixed inset-x-0 top-0 z-30 h-16 border-b border-border bg-background lg:static lg:h-auto lg:border-b-0 lg:bg-transparent">
        <div className="mx-auto flex h-full max-w-4xl items-center justify-between pl-6 pr-4 lg:mx-0 lg:h-auto lg:max-w-none lg:block lg:px-10 lg:py-0">
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
            className="flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-6 pt-20 lg:mx-0 lg:max-w-none lg:px-10 lg:py-0 lg:pt-0">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted">
          {SITE.title} &mdash; Milan
          <br />
          <span className="text-accent">{SITE.availability}</span>
        </p>

        <a
          href={SITE.cvPath}
          className="inline-flex w-fit items-center border border-foreground bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
        >
          <DownloadIcon />
          Download CV
        </a>

        <nav aria-label="Section navigation" className="hidden flex-col gap-0 lg:flex">
          {NAV_SECTIONS.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => goToSection(index)}
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
      </div>
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

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden"
        >
          <div className="flex h-16 items-center justify-between border-b border-border pl-6 pr-4">
            <span className="text-2xl font-black leading-none tracking-tight text-foreground">
              Luigi Amatore
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-foreground"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav aria-label="Section navigation" className="flex flex-1 flex-col overflow-y-auto px-6 py-4">
            {NAV_SECTIONS.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => goToSection(index)}
                className={`flex items-center gap-5 border-b border-border py-5 text-xl font-semibold transition-colors ${
                  active === index ? "text-foreground" : "text-muted"
                }`}
              >
                <span className={`font-mono text-sm ${active === index ? "text-accent" : "text-muted"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6 border-t border-border px-6 py-6 text-sm font-medium text-muted">
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
        </div>
      )}
    </header>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mr-2"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}
