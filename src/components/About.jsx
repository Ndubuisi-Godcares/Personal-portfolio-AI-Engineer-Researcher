import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Cpu, Database, TrendingUp, Zap } from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'Python', icon: Code },
    { name: 'PyTorch', icon: Cpu },
    { name: 'TensorFlow', icon: Brain },
    { name: 'Reinforcement Learning', icon: TrendingUp },
    { name: 'LLMs & RAG', icon: Zap },
    { name: 'MLOps & Deployment', icon: Database }
  ];

  const stats = [
    { value: '2+ Years', label: 'AI Engineering Experience', color: 'var(--color-primary)' },
    { value: '95%+', label: 'Peak Model Accuracy', color: 'var(--color-secondary)' },
    { value: '4 Domains', label: 'FinTech · CyberSecurity · Healthcare · Manufacturing Industry', color: 'var(--color-accent-green)' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, var(--color-primary) 0px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, var(--color-primary) 0px, transparent 1px, transparent 40px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient">
              AI Engineer & Researcher
            </h3>

            <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              I’m <strong>Godcares Ndubuisi</strong>, an AI Engineer and Researcher with
              <strong> 2+ years of experience</strong> building production-grade machine learning
              systems across <strong>reinforcement learning</strong>, <strong>continual learning</strong>,
              and <strong>generative AI</strong>.
            </p>

            <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              My research and engineering work sits at the intersection of
              <strong> Artificial Intelligence with Cybersecurity, Financial Technology, and Healthcare</strong>.
              I have hands-on experience extending <strong>Self-Adapting Language Models (SEAL)</strong>,
              designing <strong>RL-based optimization systems</strong>, and deploying scalable ML pipelines
              for real-world industrial and financial use cases.
            </p>

            <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              Professionally, I currently work on <strong>industrial scheduling</strong>,
              <strong> fintech systems</strong>, and <strong>LLM optimization</strong>.
              I am presently an <strong>AI Engineer Intern at Long-Term Industrial Development (LTID)</strong>,
              contributing to production-level AI solutions with strict performance and reliability constraints.
            </p>

            {/* Stats Counters */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 glassmorphism rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="text-2xl sm:text-3xl font-bold mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="px-4 py-2 glassmorphism rounded-lg flex items-center gap-2 group cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: 'var(--shadow-glow-primary)'
                    }}
                  >
                    <Icon className="w-4 h-4 text-[var(--color-primary)] group-hover:animate-pulse" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1549925245-f20a1bac6454?w=800&q=80"
                alt="Neural Network Visualization"
                className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 via-transparent to-[var(--color-secondary)]/20 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'var(--gradient-primary)',
                  padding: '2px',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
