/* eslint-disable react/prop-types */

export default function ProjectCard({ title, description, tech }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{tech}</span>
    </article>
  );
}
