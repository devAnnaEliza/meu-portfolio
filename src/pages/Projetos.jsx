import projects from "../data/projects";

export default function Projetos() {
  return (
    <main className="page">
      <section className="container">
        <h1>Projetos</h1>

        {/* Legenda */}
        <div className="projects-legend">
          <span>
            <i className="status-dot finalizado"></i> Finalizado
          </span>
          <span>
            <i className="status-dot em-andamento"></i> Em andamento
          </span>
          <span>
            <i className="status-dot pausado"></i> Pausado
          </span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.status}`}
            >
              <div className="project-header">
                <h2>{project.title}</h2>
              </div>

              <p>{project.description}</p>

              <div className="project-techs">
                {project.technologies.map((tech) => (
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
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    Código
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
