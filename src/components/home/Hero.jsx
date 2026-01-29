import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="container">
      
      {/* HERO */}
      <section className="hero">
        <div className="container hero-content">
          
          <h1>Olá, eu sou Anna Eliza</h1>
          
          <p>Construo aplicações web modernas com foco em experiência,
          organização e código limpo.</p>
          
          <div className="hero-actions">
            <a className="btn">Ver projetos
              
              <Link to="/projetos" className="btn">
                Ver projetos
              </Link>
            
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
