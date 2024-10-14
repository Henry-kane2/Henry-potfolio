import React from "react";
import Hero from "./components/HeroSection/Hero";
import {
  About,
  Contact,
  Services,
  Collaboration,
  Tech,
  Experience,
  Navbar,
  
} from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div className=" bg-hero-patternbg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <Tech />
      <About />
      <Experience />
      <Collaboration />
    
      <Services />

      <div className="relative z-0">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
