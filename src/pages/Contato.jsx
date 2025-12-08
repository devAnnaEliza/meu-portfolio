import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";

export default function Contato() {
  return (
    <>
      <Navbar />

      <main>
        <SectionTitle title="Contato" />

        <p className="intro-text">
          Quer falar comigo? Entre em contato pelos canais abaixo:
        </p>

        <ul className="contact-list">
          <li>Email: seuemail@example.com</li>
          <li>LinkedIn: https://linkedin.com/in/seuperfil</li>
          <li>GitHub: https://github.com/devAnnaEliza</li>
        </ul>
      </main>

      <Footer />
    </>
  );
}
