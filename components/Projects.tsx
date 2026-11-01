import SectionHeading from "@/components/SectionHeading";
import { PROJECTS, SITE } from "@/lib/content";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 border-t border-border py-14 sm:py-16"
    >
      <div className="flex flex-col gap-8">
        <SectionHeading title="Projects" id="projects" />

        {PROJECTS.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <article
                key={project.slug}
                className="flex flex-col gap-3 border border-border p-6 transition-colors hover:border-accent"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-border px-2.5 py-0.5 font-mono text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-1 flex gap-4 text-sm font-medium">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground transition-colors hover:text-accent"
                    >
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground transition-colors hover:text-accent"
                    >
                      Live
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-5 border border-border p-8">
            <p className="text-sm leading-relaxed text-muted">
              Most of my production work is under client NDA, so it can&rsquo;t
              be shown here. My GitHub is the best place to see how I write
              code day to day.
            </p>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 border border-foreground px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              View GitHub profile
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
