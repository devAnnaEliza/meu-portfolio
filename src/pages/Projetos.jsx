import ProjectCard from "../components/ProjectCard";

export default function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: "Projeto Exemplo",
      descricao: "Descrição rápida do projeto para demonstração.",
      link: "#"
    },
    {
      id: 2,
      titulo: "Meu Portfólio",
      descricao: "Este próprio portfólio, criado com React + Vite.",
      link: "#"
    }
  ];

  return (
    <section className="projects-container">
      <h1>Projetos</h1>

      <div className="projects-grid">
        {projetos.map((p) => (
          <ProjectCard
            key={p.id}
            titulo={p.titulo}
            descricao={p.descricao}
            link={p.link}
          />
        ))}
      </div>
    </section>
  );
}
