import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projetos() {
  return (
    <section className="page-container">
      <h1>Projetos</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
