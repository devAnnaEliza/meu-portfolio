import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projetos() {
  return (
    <section className="section">
      <div className="container">
        <header className="section-header">
          <h2>Projetos</h2>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
