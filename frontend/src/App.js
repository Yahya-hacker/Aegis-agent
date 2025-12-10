import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/landing/Header";
import HeroSection from "./components/landing/HeroSection";
import CapabilitiesSection from "./components/landing/CapabilitiesSection";
import ArchitectureSection from "./components/landing/ArchitectureSection";
import FeaturesSection from "./components/landing/FeaturesSection";
import TerminalSection from "./components/landing/TerminalSection";
import Footer from "./components/landing/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <ArchitectureSection />
        <FeaturesSection />
        <TerminalSection />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* AJOUTEZ la propriété basename ici 👇 */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
