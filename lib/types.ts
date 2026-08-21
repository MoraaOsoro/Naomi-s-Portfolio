export type ImpactMetric = {
  value: string;
  label: string;
  detail?: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  context?: string;
  dates: string;
  location: string;
  scope: string;
  achievements: string[];
};

export type ProjectCategory =
  | "Automation"
  | "Data & Analytics"
  | "ICT Operations"
  | "Governance & Compliance";

export type Project = {
  slug: string;
  name: string;
  organization: string;
  market: string;
  dates: string;
  categories: ProjectCategory[];
  summary: string;
  context: string;
  problem: string;
  role: string;
  approach: string[];
  solution: string;
  impact: string[];
  skills: string[];
  featured: boolean;
};

export type Differentiator = {
  title: string;
  description: string;
};

export type WorkStage = {
  stage: string;
  description: string;
};

export type EducationEntry = {
  degree: string;
  institution: string;
  dates: string;
};
