import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Blog from "./pages/Blog";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />

        {/* Rota fallback */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
        
      </Routes>
    </BrowserRouter>
  );
}
