export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export interface Student {
  id: string;
  name: string;
  quote: string;
  area: string;
  image?: string;
  memory: string;
  future: string;
  links: {
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  image?: string;
  message: string;
  phrase: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  members: string[];
  image?: string;
  link?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  description?: string;
  date?: string;
}

export type MemoryType = "quote" | "moment" | "lesson" | "inside-joke" | "tribute";

export interface MemoryItem {
  id: string;
  type: MemoryType;
  title: string;
  description: string;
}

export interface TimeCapsuleItem {
  id: string;
  name: string;
  message: string;
  fiveYears: string;
  advice: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  period: string;
  description: string;
  image?: string;
  icon: string;
}

export interface SiteContent {
  students: Student[];
  teachers: Teacher[];
  projects: Project[];
  memories: MemoryItem[];
  timeCapsule: TimeCapsuleItem[];
  timeline: TimelineItem[];
}
