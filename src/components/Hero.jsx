import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '/src/components/ui/button';
import ResumePDF from '/src/components/assets/Godcares_Resume.pdf';


const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText =
    'Designing self-adapting, reinforcement-driven AI systems';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 45);

    return () => clearInterval(typingInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  const floatingShapes = [
    { size: 60, color: 'var(--color-primary)', delay: 0 },
    { size: 40, color: 'var(--color-secondary)', delay: 1 },
    { size: 50, color: 'var(--color-accent-pink)', delay: 2 },
    { size: 35, color: 'var(--color-accent-green)', delay: 1.5 }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1584472666931-ab417d14e08b?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,217,255,0.15), rgba(157,78,221,0.15), rgba(255,0,110,0.1))',
            backgroundSize: '200% 200%',
            animation: 'gradient-shift 15s ease infinite'
          }}
        />
      </div>

      {/* Floating Shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-20 blur-xl"
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            left: `${20 + index * 20}%`,
            top: `${30 + index * 15}%`
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 rounded-full text-[var(--color-primary)] text-sm font-[var(--font-code)]">
            <Sparkles className="w-4 h-4" />
            AI Engineer & Researcher
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          {'Godcares Ndubuisi'.split('').map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className="inline-block"
              style={{
                background:
                  i < 8
                    ? 'var(--gradient-primary)'
                    : 'var(--gradient-secondary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-[var(--color-text-secondary)] mb-12 min-h-[2.5rem]"
        >
          {typedText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-0.5 h-6 bg-[var(--color-primary)] ml-1"
          />
        </motion.p>

        {/* CTA */}
        <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 justify-center"
        >
        {/* View Work */}
        <Button
            onClick={() =>
            document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-6 text-lg font-semibold rounded-xl"
            style={{ background: 'var(--gradient-primary)' }}
        >
            View My Work
        </Button>

        {/* Resume Download */}
        <a
            href={ResumePDF}
            download="Godcares_Resume.pdf"
        >
            <Button
            variant="outline"
            className="px-8 py-6 text-lg font-semibold rounded-xl border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 transition-all"
            >
            Download Resume
            </Button>
        </a>

        {/* Contact */}
        <Button
            variant="outline"
            onClick={() =>
            document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-6 text-lg font-semibold rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all"
        >
            Get In Touch
        </Button>
        </motion.div>


        {/* Credible Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Experience', value: '2+ Years' },
            { label: 'AI Systems Built', value: '10+' },
            { label: 'Research Domains', value: '4' },
            { label: 'Publications', value: '3' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glassmorphism rounded-xl p-4"
              whileHover={{
                scale: 1.05,
                boxShadow: 'var(--shadow-glow-primary)'
              }}
            >
              <div className="text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-[var(--color-primary)]" />
      </motion.div>
    </section>
  );
};

export default Hero;
