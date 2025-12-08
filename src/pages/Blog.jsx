import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <>
      <Navbar />

      <main>
        <SectionTitle title="Blog" />

        <p className="intro-text">
          Em breve você poderá ler artigos, dicas e conteúdos sobre desenvolvimento.
        </p>
      </main>

      <Footer />
    </>
  );
}
