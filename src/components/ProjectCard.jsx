/* eslint-disable react/prop-types */

export function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <div className={`project-card ${project.status}`}>
      <div className="project-header">
        <h2>{project.title}</h2>
        <span className={`status-dot ${project.status}`} />
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
          <a href={project.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}

        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            Código
          </a>
        )}
      </div>
    </div>
  );
}
