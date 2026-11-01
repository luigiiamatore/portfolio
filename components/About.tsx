import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 py-14 sm:py-16"
    >
      <div className="flex flex-col gap-6">
        <SectionHeading title="About" id="about" />
        <div className="flex max-w-xl flex-col gap-4 text-base leading-relaxed text-muted">
          <p>
            I hold a Master&rsquo;s degree in Computer Science from the Università
            degli Studi di Milano, graduating with highest honors (110/110 cum
            Laude). My academic and professional path has centered on backend
            engineering: designing systems that stay reliable as they grow,
            and APIs that other teams can build on with confidence.
          </p>
          <p>
            Professionally, I&rsquo;ve worked across healthcare software and
            e-commerce platforms, building full-stack applications with Java
            and Spring Boot and, more recently, specializing in Salesforce
            B2C Commerce Cloud. I&rsquo;m drawn to the architecture side of
            engineering: how a system is structured, how it scales, and how
            it stays maintainable once more than one person depends on it.
          </p>
        </div>
      </div>
    </section>
  );
}
