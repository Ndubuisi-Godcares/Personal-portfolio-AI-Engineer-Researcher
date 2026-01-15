import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '/src/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'ReinforceTrader: RL-Based Stock Trading System',
      description:
        'Designed a SARSA-based reinforcement learning trading agent enhanced with sentiment signals. Achieved 80.8% cumulative return over 3 years of backtesting against SPY, demonstrating robust decision-making under market uncertainty.',
      image:
        'https://plus.unsplash.com/premium_photo-1661963095270-32b8a4c1ec67?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      techStack: ['Python', 'Reinforcement Learning', 'SARSA', 'Time Series', 'Sentiment Analysis'],
      demoLink: '#',
      githubLink: 'https://github.com/Ndubuisi-Godcares/ReinforceTrader-RL-Based-Stock-Trading-with-Sentiment-Analysis'
    },
    {
      title: 'Self-Adapting Language Models (SEAL) – Continual Learning Extension',
      description:
        'Extended the SEAL architecture to improve continual learning under non-stationary data streams. Introduced dynamic context-awareness mechanisms to mitigate catastrophic forgetting during sequential task adaptation.',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      techStack: ['LLMs', 'Continual Learning', 'SEAL', 'PyTorch', 'NLP'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Generative AI–Driven Predictive Maintenance (Industry 4.0)',
      description:
        'Developed a predictive maintenance framework using Wasserstein Conditional GANs to detect early-stage equipment failures, reducing downtime through real-time anomaly detection with 85% accuracy.',
      image:
        'https://images.unsplash.com/photo-1696258686950-57cae30403a7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      techStack: ['Python', 'WGAN', 'Generative AI', 'Industrial AI'],
      demoLink: '#',
      githubLink: 'https://github.com/Ndubuisi-Godcares/Generative-AI-Driven-Predictive-Maintenance-Industry-4.0-'
    },
    {
      title: 'Fusion of Deep Architectures for Intrusion Detection',
      description:
        'Built a hybrid deep learning intrusion detection system combining CNN and RNN architectures, achieving over 95% anomaly detection accuracy on large-scale network traffic datasets.',
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
      techStack: ['Deep Learning', 'Cybersecurity', 'CNN', 'RNN', 'Python'],
      demoLink: '#',
      githubLink: 'https://github.com/Ndubuisi-Godcares/Fusion-of-Deep-Architectures-for-Intrusion-Detection'
    },
    {
      title: 'Ransomware Detection Engine',
      description:
        'Implemented a real-time ransomware detection system using Random Forests, SVMs, and Neural Networks. Focused on low-latency detection strategies to minimize system disruption during active monitoring.',
      image:
        'https://images.unsplash.com/photo-1655036387197-566206c80980?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      techStack: ['Machine Learning', 'Cybersecurity', 'Random Forest', 'SVM'],
      demoLink: '#',
      githubLink: 'https://github.com/Ndubuisi-Godcares/ransomware-ids'
    },
    {
      title: 'Verdant Insight: Real-Time Plant Identification System',
      description:
        'Developed a real-time plant identification system using EfficientNet and TensorFlow, supporting live camera detection and image uploads through a production-ready Streamlit interface.',
      image:
        'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80',
      techStack: ['TensorFlow', 'EfficientNet', 'Computer Vision', 'Streamlit'],
      demoLink: '#',
      githubLink: 'https://github.com/Ndubuisi-Godcares/Verdant-Insight'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--color-secondary)] rounded-full blur-[120px] opacity-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[var(--color-primary)] rounded-full blur-[120px] opacity-10" />

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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="mt-6 text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            A selection of research-driven and production-grade AI systems spanning
            reinforcement learning, generative AI, cybersecurity, and computer vision.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 rounded-xl font-semibold text-lg relative group overflow-hidden"
            style={{ background: 'var(--gradient-primary)', border: 'none' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-white">View All Projects</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
