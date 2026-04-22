/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { StatusLegend } from "../components/StatusIcon";
import { projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

const stackGroups = [
  {
    label: "front-end",
    type: "front",
    items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind", ],
  },
  {
    label: "back-end & dados",
    type: "back",
    items: ["Python", "FastAPI", "Node.js", "Java", "MongoDB", "Pandas"],
  },
  {
    label: "ferramentas",
    type: "tools",
    items: ["Git", "GitHub", "Vite"],
  },
  {
    label: "cloud & deploy",
    type: "cloud",
    items: ["AWS"],
  },
];

export default function Home() {
  useReveal();
  const [expanded, setExpanded] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const visibleProjects = expanded ? projects : featured;

  return (
    <main className="container">
      {/* HERO */}
      <section id="inicio" className="home-hero">
        <div className="home-hero-content">
          <span className="home-hero-role hero-anim hero-anim-1">
            full stack developer
          </span>

          <h1 className="home-hero-name hero-anim hero-anim-2">
            anna <em>eliza.</em>
            
          </h1>

          <div className="home-hero-meta hero-anim hero-anim-3">
            <div className="home-hero-left">
              <p className="home-hero-text">
                Construo aplicações web modernas com foco em experiência,
                organização e código limpo.
              </p>
              <div className="home-hero-links">
                <a 
                  href="https://mail.google.com/mail/?view=cm&to=annaelizadev@gmail.com&su=Oportunidade%20de%20trabalho&body=Ol%C3%A1%2C%20Anna%20Eliza!%20Estou%20entrando%20em%20contato%20a%20respeito%20de%20uma%20oportunidade."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <ion-icon name="mail-outline"></ion-icon>
                </a>
                <a href="https://github.com/devAnnaEliza" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href="https://linkedin.com/in/annaelizadev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </div>
            </div>
            <div className="home-hero-right">
              <span className="home-hero-scroll">scroll ↓</span>
            </div>
          </div>
        </div>
      </section>

      <div className="blur-section-wrapper">

        <div className="blur-section-content">


            {/* PROJETOS */}
            <section id="projetos" className="section">
              <span className="section-marker reveal">// projetos</span>

              <StatusLegend />

              <div className="projects-grid reveal-group">
                {visibleProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              <div className="projects-expand">
                <button
                  className="btn-expand"
                  onClick={() => setExpanded((prev) => !prev)}
                >
                  {expanded ? "ver menos" : "ver todos"}
                </button>
              </div>
            </section>

            {/* STACKS */}
            <section id="stacks" className="section">
              <span className="section-marker reveal">// stacks</span>

              <div className="stacks-wrapper reveal">
                {stackGroups.map((group) => (
                  <div key={group.type} className="stack-group">
                    <span className={`stack-group-label ${group.type}`}>
                      {group.label}
                    </span>
                    <div className="stack-badges">
                      {group.items.map((item) => (
                        <span key={item} className={`stack-badge ${group.type}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SOBRE */}
            <section id="sobre" className="section sobre">
              <div className="sobre-layout">
                <div>
                  <span className="section-marker reveal">// sobre</span>
                  <div className="sobre-texto reveal">
                    <p>
                      Sou movida por lógica e pela necessidade de entender o que está
                      por trás das coisas. Não me interessa apenas fazer funcionar —
                      quero saber <span className="destaque">por que funciona.</span>
                    </p>
                    <p>
                      Tenho mais prática com{" "}
                      <span className="inline-tag">interfaces</span>, mas meu objetivo
                      é projetar sistemas completos. Gosto de testar cada detalhe e ver
                      desde um botão simples até uma estrutura maior funcionando como
                      deveria.
                    </p>
                    <p>
                      Estou construindo minha carreira com intenção. Aprendo
                      constantemente, mesmo quando sinto que ainda sei pouco. Prefiro
                      evoluir com consistência do que buscar atalhos.
                    </p>
                    <p>
                      Fora do código, o dia tem{" "}
                      <span className="inline-tag">música</span> — que também faço, na
                      bateria — leituras, um bom true crime, games e — sem negociação —
                      o <span className="inline-tag">Vasco.</span>
                    </p>
                  </div>
                </div>

                <aside className="sobre-aside reveal">
                  <div className="hobbie-item">
                    <span className="hobbie-icon">♪</span>
                    <span className="hobbie-label">música & bateria</span>
                  </div>
                  <div className="hobbie-item">
                    <span className="hobbie-icon">◎</span>
                    <span className="hobbie-label">leitura & escrita</span>
                  </div>
                  <div className="hobbie-item">
                    <span className="hobbie-icon">▶</span>
                    <span className="hobbie-label">filmes & séries</span>
                  </div>
                  <div className="hobbie-item">
                    <span className="hobbie-icon">◈</span>
                    <span className="hobbie-label">true crime</span>
                  </div>
                  <div className="hobbie-item">
                    <span className="hobbie-icon">◉</span>
                    <span className="hobbie-label">games</span>
                  </div>
                  <div className="hobbie-item">
                    <span className="hobbie-icon">〜</span>
                    <span className="hobbie-label">praia</span>
                  </div>
                  <div className="hobbie-item destaque">
                    <span className="hobbie-icon">⬡</span>
                    <span className="hobbie-label">Vasco da Gama</span>
                  </div>
                </aside>
              </div>
            </section>
          
        </div>

        <div className="blur-section-overlay">
          <div className="blur-card">Em manutenção ⚠️</div>
        </div>

      </div>

    </main>
  );
}

