import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Cpu, Brain, Workflow } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'var(--color-primary)',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 90 },
        { name: 'Java', level: 80 }
      ]
    },
    {
      title: 'ML & RL Frameworks',
      icon: Brain,
      color: 'var(--color-secondary)',
      skills: [
        { name: 'PyTorch', level: 92 },
        { name: 'TensorFlow / Keras', level: 90 },
        { name: 'Scikit-learn', level: 95 },
        { name: 'Stable-Baselines3', level: 88 },
        { name: 'OpenAI Gym', level: 85 }
      ]
    },
    {
      title: 'LLMs & Generative AI',
      icon: Cpu,
      color: 'var(--color-accent-pink)',
      skills: [
        { name: 'Transformers / BERT', level: 90 },
        { name: 'RAG Pipelines', level: 88 },
        { name: 'FAISS', level: 90 },
        { name: 'Prompt Engineering', level: 92 },
        { name: 'GANs (WGAN)', level: 85 }
      ]
    },
    {
      title: 'Data Engineering & Analytics',
      icon: Database,
      color: 'var(--color-accent-green)',
      skills: [
        { name: 'Feature Engineering', level: 95 },
        { name: 'EDA & Statistical Modeling', level: 92 },
        { name: 'Time Series Analysis', level: 88 },
        { name: 'Simulation Data Analysis', level: 85 }
      ]
    },
    {
      title: 'MLOps & Deployment',
      icon: Workflow,
      color: 'var(--color-primary)',
      skills: [
        { name: 'MLflow', level: 88 },
        { name: 'DVC', level: 85 },
        { name: 'Docker', level: 90 },
        { name: 'CI/CD Pipelines', level: 85 },
        { name: 'Model Monitoring', level: 82 }
      ]
    },
    {
      title: 'Cloud & Platforms',
      icon: Cloud,
      color: 'var(--color-secondary)',
      skills: [
        { name: 'Google Cloud Platform', level: 88 },
        { name: 'Microsoft Azure', level: 85 },
        { name: 'Firebase', level: 82 },
        { name: 'Git & GitHub', level: 95 }
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[var(--color-dark)]"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, var(--color-primary) 0px, transparent 1px, transparent 50px),
              repeating-linear-gradient(90deg, var(--color-primary) 0px, transparent 1px, transparent 50px)
            `,
            backgroundSize: '50px 50px'
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
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="mt-6 text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Research-driven and production-tested expertise across modern AI systems
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glassmorphism rounded-2xl p-6 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${category.color}20` }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: `0 0 20px ${category.color}40`
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: category.color }} />
                  </motion.div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-[var(--color-text-secondary)]">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold" style={{ color: category.color }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-6">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Reinforcement Learning',
              'Continual Learning',
              'Self-Adapting Models (SEAL)',
              'Financial ML',
              'Cybersecurity AI',
              'Industrial Optimization',
              'Agentic AI',
              'Explainable AI',
              'Model Evaluation',
              'Research Prototyping'
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 glassmorphism rounded-full text-sm font-medium border border-[var(--color-primary)]/30 text-[var(--color-text-secondary)]"
                whileHover={{
                  scale: 1.05,
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-primary)',
                  boxShadow: 'var(--shadow-glow-primary)'
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
