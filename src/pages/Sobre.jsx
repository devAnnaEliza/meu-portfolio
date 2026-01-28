export default function Sobre() {
  return (
    <section className="container section fade-in">
      <h1 className="section-title">Sobre</h1>

      <div className="about-grid">
        <div className="card">
          <h3>Como eu penso</h3>
          <p>
            Gosto de entender o problema antes de escrever código, buscando
            soluções simples, organizadas e fáceis de manter.
          </p>
        </div>

        <div className="card">
          <h3>Como eu desenvolvo</h3>
          <p>
            Trabalho com foco em componentização, reutilização de código e
            clareza na estrutura, priorizando boas práticas e legibilidade.
          </p>
        </div>

        <div className="card">
          <h3>O que estou construindo</h3>
          <p>
            Atualmente desenvolvo projetos pessoais para consolidar conhecimento
            e evoluir tecnicamente de forma consistente.
          </p>
        </div>
      </div>
    </section>
  );
}
