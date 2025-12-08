import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Blog from "./pages/Blog";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./global.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
