export default function Sobre() {
  return (
    <main className="page">
      <section className="container">
        <h2 className="section-title">Sobre</h2>

        <p className="about-intro">
          Sou desenvolvedora Full Stack em formação, com foco na construção
          de aplicações web organizadas, escaláveis e centradas na experiência
          do usuário. Busco evoluir constantemente através de projetos práticos
          e estudo direcionado.
        </p>

        <div className="about-grid">
          <div className="card">
            <h3>Como eu penso</h3>
            <p>
              Antes de escrever código, procuro entender profundamente o problema.
              Acredito que boas soluções começam com clareza, simplicidade e estrutura.
            </p>
          </div>

          <div className="card">
            <h3>Como eu desenvolvo</h3>
            <p>
              Trabalho com foco em componentização, reutilização e organização.
              Valorizo código limpo, legível e de fácil manutenção.
            </p>
          </div>

          <div className="card">
            <h3>O que estou construindo</h3>
            <p>
              Atualmente desenvolvo aplicações com React no frontend, 
              evoluo meus conhecimentos em backend e análise de dados com Python e SQL.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
