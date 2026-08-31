import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { technologies } from "@/data/technologies";
import type { Technology } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTechnologiesByIds(ids: string[]): Technology[] {
  return ids
    .map((id) => technologies.find((t) => t.id === id))
    .filter((t): t is Technology => Boolean(t));
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}
