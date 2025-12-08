import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />

      <main>
        <SectionTitle title="Bem-vindo ao meu Portfólio" />

        <p className="intro-text">
          Aqui você encontrará meus projetos, informações sobre mim e formas de contato.
        </p>
      </main>

      <Footer />
    </>
  );
}
