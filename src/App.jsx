import React from 'react';
import './index.css';

import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Inquiries from './components/Inquiries';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      <About />
      <Projects />
      <Contact />
      <Inquiries />
      <Footer />
    </div>
  );
}

export default App;