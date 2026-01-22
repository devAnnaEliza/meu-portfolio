import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Blog from "./pages/Blog";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout global */}
        <Route element={<Layout />}>


          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />

        </Route>
        {/* Rota fallback */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
        
      </Routes>
    </BrowserRouter>
  );
}
