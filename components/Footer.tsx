import { SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border lg:ml-96">
      <div className="mx-auto max-w-4xl px-6 py-8 text-xs text-muted">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
      </div>
    </footer>
  );
}
