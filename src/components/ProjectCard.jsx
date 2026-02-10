/* eslint-disable react/prop-types */

export function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <div className={`project-card ${project.status}`}>
      <div className="project-header">
        <h3>{project.title}</h3>
      </div>

      <p>{project.description}</p>

      <div className="project-techs">
        {project.techs?.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}

        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Código
          </a>
        )}
      </div>
    </div>
  );
}
