import { existsSync } from "node:fs";
import path from "node:path";
import { memories } from "@/data/memories";
import { projects } from "@/data/projects";
import { students } from "@/data/students";
import { teachers } from "@/data/teachers";
import { timeCapsule } from "@/data/timeCapsule";
import { timeline } from "@/data/timeline";
import type {
  MemoryItem,
  Project,
  SiteContent,
  Student,
  Teacher,
  TimeCapsuleItem,
  TimelineItem,
} from "@/types/content";

const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"];

export const csvContentDirectory = path.join(process.cwd(), "content", "csv");

export function getSiteContent(): SiteContent {
  return {
    students: getStudentsContent(),
    teachers: getTeachersContent(),
    projects: getProjectsContent(),
    memories: getMemoriesContent(),
    timeCapsule: getTimeCapsuleContent(),
    timeline: getTimelineContent(),
  };
}

export function getStudentsContent(): Student[] {
  return students.map((student) => ({
    id: student.id || slugify(student.name),
    name: student.name,
    quote: student.quote,
    area: student.area,
    image: resolveSectionImage("students", student.name, student.image),
    memory: student.memory,
    future: student.future,
    links: {
      github: student.links.github,
      linkedin: student.links.linkedin,
      instagram: student.links.instagram,
    },
  }));
}

export function getTeachersContent(): Teacher[] {
  return teachers.map((teacher) => ({
    id: teacher.id || slugify(teacher.name),
    name: teacher.name,
    subject: teacher.subject,
    message: teacher.message,
    phrase: teacher.phrase,
    image: resolveSectionImage("teachers", teacher.name, teacher.image),
  }));
}

export function getProjectsContent(): Project[] {
  return projects.map((project) => ({
    id: project.id || slugify(project.name),
    name: project.name,
    description: project.description,
    technologies: project.technologies,
    members: project.members,
    image: resolveSectionImage("projects", project.name, project.image),
    link: project.link,
  }));
}

export function getMemoriesContent(): MemoryItem[] {
  return memories.map((memory) => ({
    id: memory.id || slugify(memory.title),
    type: memory.type,
    title: memory.title,
    description: memory.description,
  }));
}

export function getTimeCapsuleContent(): TimeCapsuleItem[] {
  return timeCapsule.map((item) => ({
    id: item.id || slugify(item.name),
    name: item.name,
    message: item.message,
    fiveYears: item.fiveYears,
    advice: item.advice,
  }));
}

export function getTimelineContent(): TimelineItem[] {
  return timeline.map((item) => ({
    id: item.id || slugify(item.title),
    title: item.title,
    period: item.period,
    description: item.description,
    image: resolveSectionImage("timeline", item.title, item.image),
    icon: item.icon,
  }));
}

export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolveSectionImage(
  section: "students" | "teachers" | "projects" | "timeline" | "hero",
  label: string,
  fallback?: string,
) {
  const slug = slugify(label);

  for (const extension of IMAGE_EXTENSIONS) {
    const publicPath = `/images/${section}/${slug}.${extension}`;
    const filesystemPath = path.join(process.cwd(), "public", publicPath);

    if (existsSync(filesystemPath)) {
      return publicPath;
    }
  }

  return fallback;
}
