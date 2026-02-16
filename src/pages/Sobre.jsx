export default function Sobre() {
  return (
    <section className="container section fade-in">
      <h2 className="section-title">Sobre</h2>

      <p className="about-intro">
        Sou desenvolvedora Full Stack com foco na construção de 
        aplicações web organizadas, escaláveis e centradas na experiência do usuário. 
        Busco evoluir através de projetos práticos e estudo direcionado.
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
            Valorizo código limpo, legível e de fácil manutenção, priorizando
            boas práticas desde o início do projeto.
          </p>
        </div>

        <div className="card">
          <h3>O que estou construindo</h3>
          <p>
            Atualmente desenvolvo aplicações utilizando React no frontend e
            expandindo meus conhecimentos em backend com Python e APIs.
            Meu objetivo é atuar em projetos completos, do frontend ao banco de dados.
          </p>
        </div>
      </div>
    </section>
  );
}
