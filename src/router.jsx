import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Blog from "./pages/Blog";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />

        {/*rota fallback se tentar acessar o q não existe*/}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
