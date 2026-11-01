export const SITE = {
  name: "Luigi Amatore",
  title: "Software Engineer",
  domain: "gigiamatore.me",
  url: "https://gigiamatore.me",
  email: "luigi.amatore7@gmail.com",
  github: "https://github.com/luigiiamatore",
  linkedin: "https://www.linkedin.com/in/luigiamatore/",
  cvPath: "/cv.pdf",
  location: "Milan, Italy",
  availability: "open to Europe",
  tagline:
    "Software Engineer specializing in backend and full-stack development.",
  intro:
    "Software engineer focused on backend development, scalable applications and reliable system integrations. Experienced in Java and Spring Boot, currently working on enterprise e-commerce platforms with Salesforce Commerce Cloud.",
};

export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  category: "engineering" | "leadership";
  highlights: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Software Engineer, Salesforce Commerce Cloud",
    company: "Retail Reply",
    location: "Milan",
    period: "Jul 2025 – Present",
    category: "engineering",
    highlights: [
      "Managing the development and delivery of two concurrent e-commerce projects on Salesforce B2C Commerce Cloud (SFRA), ensuring high-performance standards and platform stability.",
      "Led a critical PSP migration, refactoring integration logic to ensure 100% functional parity and zero downtime for transaction processing.",
      "Engineered automated localization workflows by integrating external translation services, significantly reducing manual content management effort for global storefronts.",
      "Facilitated technical training and workshops for clients on CRM integrations and new system features.",
    ],
  },
  {
    role: "Full-stack Software Developer",
    company: "Astir s.r.l.",
    location: "Milan",
    period: "Mar 2023 – Jun 2025",
    category: "engineering",
    highlights: [
      "Developed and maintained 3+ core healthcare web applications using a modern stack (Spring Boot, Java, Hibernate, Angular, SQL).",
      "Designed and managed RESTful APIs that improved data interoperability by 30% across different clinical systems through standardized data exchange patterns.",
      "Implemented a containerized deployment strategy using Docker, streamlining the development-to-production pipeline and enhancing environment consistency.",
    ],
  },
  {
    role: "IT Manager",
    company: "ESN Milano Statale",
    location: "Milan",
    period: "Dec 2025 – Present",
    category: "leadership",
    highlights: [
      "Administering Google Workspace for 40+ active members, managing user identities, access controls, and collaborative environments.",
      "Spearheaded the migration of internal workflows to Notion, centralizing documentation and bureaucratic processes to improve team transparency and efficiency.",
      "Maintaining and customizing the official section website, using HTML and CSS to enhance the user interface and ensure a responsive experience for international students.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  period?: string;
};

// No public, shareable engineering projects yet — add entries here as they
// become available. The Projects section renders a placeholder when empty.
export const PROJECTS: Project[] = [];

export type TechCategory = {
  category: string;
  items: string[];
};

export const TECH_STACK: TechCategory[] = [
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Hibernate", "Node.js", "REST APIs"],
  },
  {
    category: "Frontend",
    items: ["TypeScript", "JavaScript", "Angular", "React"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
  },
  {
    category: "Tools & Infrastructure",
    items: ["Docker", "Git", "AWS", "GCP"],
  },
];

export const OTHER_LANGUAGES = ["Go", "Python", "C/C++", "Rust"];

export type EducationEntry = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  detail?: string;
};

export const EDUCATION: EducationEntry[] = [
  {
    degree: "Master's Degree in Computer Science",
    institution: "Università degli Studi di Milano",
    location: "Milan, Italy",
    period: "Sep 2023 – Jul 2025",
    detail: "110/110 cum Laude",
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Università degli Studi di Milano",
    location: "Milan, Italy",
    period: "Sep 2020 – Jul 2023",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  status: "completed" | "in-progress";
  date: string;
  detail?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Software Engineer (Professional)",
    issuer: "HackerRank",
    status: "completed",
    date: "May 2024",
    detail: "Verified advanced proficiency in complex problem solving, SQL, and RESTful API design.",
  },
  {
    name: "Salesforce Certified B2C Commerce Developer",
    issuer: "Salesforce",
    status: "in-progress",
    date: "Expected Nov 2026",
    detail: "SFRA, OCAPI, B2C Script API, and scalable e-commerce architecture design.",
  },
  {
    name: "Agentforce & AI Specialist",
    issuer: "Salesforce",
    status: "in-progress",
    date: "Expected Nov 2026",
    detail: "Autonomous AI agents for commerce, prompt engineering, and automated customer journeys.",
  },
];

export const NAV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "education", label: "Education & Certifications" },
  { id: "contact", label: "Contact" },
] as const;
