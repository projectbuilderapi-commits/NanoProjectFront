export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectFormData {
  title: string;
  category: string;

  description: string;
  longDescription: string;

  image: string;

  screenshots: string[];

  technologies: string[];

  features: string[];

  challenges: string[];

  stats: ProjectStat[];

  liveLink: string;
  githubLink: string;
}

export interface Project
  extends ProjectFormData {
  _id: string;

  createdAt?: string;

  updatedAt?: string;
}