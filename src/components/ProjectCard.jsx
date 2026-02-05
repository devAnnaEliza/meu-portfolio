/* eslint-disable react/prop-types */

export default function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <article className={`project-card status-${project.status}`}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <ul className="tech-list">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
  );
}
