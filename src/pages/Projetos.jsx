export default function Projetos() {
  return (
    <section className="container section fade-in">
      <h1 className="section-title">Projetos</h1>

      <p className="mb-4">
        Aqui estão alguns projetos que desenvolvi de forma independente,
        focando em aprendizado, boas práticas e evolução contínua.
      </p>

      <div className="projects-grid">
        {/* Projeto 1 */}
        <div className="card project-card">
          <h3>Nome do Projeto</h3>

          <p className="mb-2">
            Descrição curta e objetiva do projeto, explicando o que ele faz
            e qual foi o foco principal do desenvolvimento.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitHub
            </a>

            {/* Demo opcional (pode remover se não tiver) */}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Ver projeto
            </a>
          </div>
        </div>

        {/* Projeto 2 */}
        <div className="card project-card">
          <h3>Nome do Projeto</h3>

          <p className="mb-2">
            Descrição curta e objetiva do projeto, explicando o que ele faz
            e qual foi o foco principal do desenvolvimento.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitHub
            </a>

            {/* Demo opcional (pode remover se não tiver) */}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Ver projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
