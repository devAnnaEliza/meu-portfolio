import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="container">
      
      {/* HERO */}
      <section className="section">
        <h2 className="mb-2">Anna Eliza</h2>

        <h3 className="mb-3">Full Stack Developer</h3>

        <p className="mb-4">
          Construo aplicações web modernas com foco em experiência,
          organização e código limpo.
        </p>

        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/projetos" className="btn">
            Ver projetos
          </Link>

          {/*<Link to="/contato" className="btn">
            Contato
          </Link>*/}
        </div>
      </section>

      {/* PROJETOS EM DESTAQUE */}
      <section className="section">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <h2 className="section-title">Projetos em destaque</h2>

          <Link to="/projetos" className="btn">
            Ver todos
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}>

          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

        </div>

      </section>

      {/* STACKS */}
      <section className="section">
        <h2 className="section-title">Tecnologias</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "1.5rem",
            marginTop: "1.5rem",
          }}
        >
          <div className="card text-center">
            <p>HTML</p>
          </div>

          <div className="card text-center">
            <p>CSS</p>
          </div>

          <div className="card text-center">
            <p>JavaScript</p>
          </div>

          <div className="card text-center">
            <p>React</p>
          </div>

          <div className="card text-center">
            <p>Node.js</p>
          </div>

          <div className="card text-center">
            <p>MongoDB</p>
          </div>

          <div className="card text-center">
            <p>Java</p>
          </div>

          <div className="card text-center">
            <p>TypeScript</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <h2>Vamos conversar?</h2>

        <p>
          Se você quiser falar sobre projetos, oportunidades ou apenas trocar uma ideia,
          é só me chamar.
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=annaelizadev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn cta-btn"
        >
          Fale comigo
        </a>

      </section>

    </main>
  );
}
