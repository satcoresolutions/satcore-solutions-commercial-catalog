export interface ProblemItem {
  title: string;
  description: string;
}

export interface ProblemContent {
  eyebrow: string;

  heading: string;

  summary: string;

  consequences: ProblemItem[];
}