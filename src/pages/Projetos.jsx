import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

export default function Projetos() {
  return (
    <div className="container">
      <SectionTitle title="Projetos" />

      <div className="project-list">
        {/* Exemplo de cards — depois vamos substituir pelos reais */}
        <ProjectCard
          title="Projeto Exemplo 1"
          description="Descrição breve do projeto."
          link="https://github.com"
        />

        <ProjectCard
          title="Projeto Exemplo 2"
          description="Descrição breve do projeto."
          link="https://github.com"
        />
      </div>
    </div>
  );
}
