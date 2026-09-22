export interface Experience {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  dates: string;
  location?: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
}
