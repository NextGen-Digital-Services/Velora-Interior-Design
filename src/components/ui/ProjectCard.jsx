/* FILE: src/components/ui/ProjectCard.jsx */
import React from 'react';

export const ProjectCard = (props) => {
  const project = props.project || {
    heroImage: props.image,
    image: props.image,
    title: props.title,
    category: props.category,
    slug: props.slug
  };
  const className = props.className || '';

  return (
    <div className={`project-card project-card-wrapper ${className}`}>
      <img 
        src={project.heroImage || project.image} 
        alt={project.title}
        className="project-card-image"
        style={{width:'100%', height:'100%', objectFit:'cover'}}
      />
    </div>
  );
};

export default ProjectCard;
