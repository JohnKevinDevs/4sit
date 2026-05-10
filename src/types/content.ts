export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface Student {
  id: string;
  name: string;
  role?: string;
  image?: string;
  quote?: string;
  links?: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
}

export interface Teacher {
  id: string;
  name: string;
  subject?: string;
  image?: string;
  tribute?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  url?: string;
  repository?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  description?: string;
  date?: string;
}

export interface MemoryItem {
  id: string;
  title: string;
  description: string;
  author?: string;
  date?: string;
}

export interface TimeCapsuleItem {
  id: string;
  author: string;
  message: string;
  unlockLabel?: string;
}
