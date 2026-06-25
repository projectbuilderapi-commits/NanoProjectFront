export interface Request {
  _id: string;

  name: string;
  email: string;
  phone: string;

  college: string;

  projectTitle: string;
  projectType: string;
  platform: string;

  deadline: string;

  authentication: string[];
  features: string[];
  requirements: string[];

  description: string;

  estimatedPrice: number;

  status: string;

  createdAt: string;
}