import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/content";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} — ${SITE.title}`,
  description: SITE.intro,
  keywords: [
    "Luigi Amatore",
    "Software Engineer",
    "Backend Developer",
    "Full-stack Developer",
    "Java",
    "Spring Boot",
    "Salesforce Commerce Cloud",
    "Copenhagen",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} — ${SITE.title}`,
    description: SITE.intro,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.title}`,
    description: SITE.intro,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    jobTitle: SITE.title,
    url: SITE.url,
    email: `mailto:${SITE.email}`,
    sameAs: [SITE.linkedin, SITE.github],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Università degli Studi di Milano",
    },
  };

  return (
    <html
      lang="en"
      className={`${archivo.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a href="#main-content" className="skip-link bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
          Skip to content
        </a>
        <Sidebar />
        <main id="main-content" className="flex-1 lg:ml-96">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
