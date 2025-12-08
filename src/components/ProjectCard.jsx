export default function ProjectCard({ title, description, techs = [], link, repo }) {
  return (
    <article className="project-card">
      <header>
        <h3>{title}</h3>
      </header>

      <p className="project-description">{description}</p>

      {techs.length > 0 && (
        <ul className="tech-list" aria-label="Tecnologias">
          {techs.map((t, i) => (
            <li key={i} className="tech-item">{t}</li>
          ))}
        </ul>
      )}

      <div className="project-links">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            Demo
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer" className="project-link">
            Repositório
          </a>
        )}
      </div>
    </article>
  );
}
