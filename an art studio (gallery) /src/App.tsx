import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PortfolioProvider } from './context/PortfolioContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ArtworkModal from './components/ArtworkModal';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <PortfolioProvider>
      <Router>
        <div className="min-h-screen bg-black">
          <Navigation />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <Footer />
          <ArtworkModal />
        </div>
      </Router>
    </PortfolioProvider>
  );
}

export default App;