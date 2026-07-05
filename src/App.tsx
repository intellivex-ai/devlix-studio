import React, { useEffect } from 'react';
import Lenis from 'lenis';

// Components
import AnimatedMesh from './components/AnimatedMesh';
import FloatingNavbar from './components/FloatingNavbar';

// Sections
import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Process from './sections/Process';
import WhyDevlix from './sections/WhyDevlix';
import TechCloud from './sections/TechCloud';
import Numbers from './sections/Numbers';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-primaryGreen selection:text-white">

      {/* Animated gradient mesh background */}
      <AnimatedMesh />

      {/* Floating glass navbar */}
      <FloatingNavbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <Numbers />
        <Services />
        <Projects />
        <Process />
        <WhyDevlix />
        <TechCloud />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
