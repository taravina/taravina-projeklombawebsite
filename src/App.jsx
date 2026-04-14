import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from "./assets/components/Navbar";
import ScrollToTop from "./assets/components/ScrollToTop";
import Home from "./assets/pages/Home";
import Kuliner from "./assets/pages/Kuliner";
import Footer from "./assets/components/Footer";
import Sejarah from "./assets/pages/Sejarah";
import Budaya from "./assets/pages/Budaya";
import Destinasi from "./assets/pages/Destinasi";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import SmartCity from "./assets/pages/SmartCity";
import MenuResep from "./assets/pages/MenuResep";

const AppContent = () => {
  const { language } = useLanguage();

  return (
    <div key={language} className="animate-page-switch">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kuliner" element={<Kuliner />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/budaya" element={<Budaya />} />
        <Route path="/destinasi" element={<Destinasi />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/smart-city" element={<SmartCity />} />
        <Route path="/menu-resep" element={<MenuResep />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Router>
  );
}

export default App;