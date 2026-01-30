/* eslint-disable react/prop-types */

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <ul>
        {tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver projeto
      </a>
    </article>
  );
}
