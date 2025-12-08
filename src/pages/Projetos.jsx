import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <>
      <Navbar />

      <main>
        <SectionTitle title="Meus Projetos" />

        <div className="projects-grid">
          <ProjectCard
            title="Projeto 1"
            description="Descrição breve do projeto."
            link="#"
          />

          <ProjectCard
            title="Projeto 2"
            description="Descrição breve do projeto."
            link="#"
          />

          <ProjectCard
            title="Projeto 3"
            description="Descrição breve do projeto."
            link="#"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
