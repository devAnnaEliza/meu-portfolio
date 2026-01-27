import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="container">
      
      {/* HERO */}
      <section className="section">
        <h1 className="mb-2">Anna Eliza</h1>

        <h2 className="mb-3">
          Full Stack Developer
        </h2>

        <p className="mb-4">
          Construindo aplicações web modernas com foco em experiência,
          organização e código limpo.
        </p>

        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/projetos" className="btn">
            Ver projetos
          </Link>

          <Link to="/contato" className="btn">
            Contato
          </Link>
        </div>
      </section>

    </main>
  );
}
