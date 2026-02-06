import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export default function Projetos() {
  return (
    <main className="page">
      <section className="container">
        <h1>Projetos</h1>

        <div className="projects-legend">
          <span>
            <span className="status-dot finalizado" /> Finalizado
          </span>
          <span>
            <span className="status-dot em-andamento" /> Em andamento
          </span>
          <span>
            <span className="status-dot pausado" /> Pausado
          </span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
