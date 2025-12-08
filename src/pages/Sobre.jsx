import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";

export default function Sobre() {
  return (
    <>
      <Navbar />

      <main>
        <SectionTitle title="Sobre Mim" />

        <p className="intro-text">
          Olá! Meu nome é Anna — Full Stack Dev.
          Sou apaixonada por tecnologia, programação e construção de interfaces funcionais e modernas.
        </p>

        <p className="intro-text">
          Aqui você encontra um pouco mais sobre minha trajetória, habilidades e projetos.
        </p>
      </main>

      <Footer />
    </>
  );
}
