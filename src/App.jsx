import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home";
import Kuliner from "./assets/pages/Kuliner";
import Footer from "./assets/components/Footer";
import Sejarah from "./assets/pages/Sejarah";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kuliner" element={<Kuliner />} />
        <Route path="/sejarah" element={<Sejarah />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;