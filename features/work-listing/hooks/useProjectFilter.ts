"use client";

import { useState } from "react";
import type { PortfolioProject } from "../data/projects";

export function useProjectFilter(projects: PortfolioProject[]) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return { activeCategory, setActiveCategory, filtered };
}
