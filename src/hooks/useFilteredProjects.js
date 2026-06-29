/* FILE: src/hooks/useFilteredProjects.js */
import { useMemo } from 'react';

export const useFilteredProjects = (projects, activeCategory) => {
  return useMemo(() => {
    if (!activeCategory || activeCategory === 'All') {
      return projects;
    }
    return projects.filter(
      (project) => project.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [projects, activeCategory]);
};
