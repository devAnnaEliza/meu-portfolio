/* eslint-disable react/prop-types */

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <header className="project-card-header">
        <h3>{project.title}</h3>
        <span
          className="project-status"
          data-status={project.status}
          title={project.status}
        />
      </header>

      <p className="project-description">
        {project.description}
      </p>

      <ul className="project-techs">
        {project.techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
  );
}
