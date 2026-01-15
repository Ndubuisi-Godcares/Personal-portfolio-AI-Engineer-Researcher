import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>AI Engineer | Machine Learning & Artificial Intelligence Specialist</title>
        <meta 
          name="description" 
          content="Portfolio of an AI Engineer specializing in machine learning, deep learning, NLP, and computer vision. Building intelligent systems for tomorrow." 
        />
        <meta name="keywords" content="AI Engineer, Machine Learning, Deep Learning, NLP, Computer Vision, TensorFlow, PyTorch" />
      </Helmet>

      <div className="min-h-screen bg-[var(--color-darker)] text-white overflow-x-hidden">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;