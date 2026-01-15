import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Beaker } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hasDemo =
    project.demoLink && project.demoLink !== '#';

  const projectType = project.type || 'Research';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative glassmorphism rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-[var(--color-primary)]"
      whileHover={{ y: -10 }}
    >
      {/* Gradient Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'var(--gradient-primary)',
          padding: '2px',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
        animate={
          isHovered
            ? {
                background: [
                  'linear-gradient(0deg, var(--color-primary), var(--color-secondary))',
                  'linear-gradient(360deg, var(--color-primary), var(--color-secondary))'
                ]
              }
            : {}
        }
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="relative z-10 p-6">
        {/* Image */}
        <div className="relative mb-6 rounded-xl overflow-hidden aspect-video">
          <img
            src={project.image}
            alt={`${project.title} project visualization`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-transparent to-transparent opacity-60" />

          {/* Overlay Actions */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            {hasDemo && (
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live demo"
                className="p-3 bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-secondary)] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </motion.a>
            )}

            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub"
              className="p-3 bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-secondary)] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>
          </motion.div>

          {/* Project Type Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-black/70 text-white backdrop-blur">
            <Beaker className="w-3 h-3" />
            {projectType}
          </div>
        </div>

        {/* Info */}
        <h3 className="text-2xl font-bold mb-3 text-gradient group-hover:text-white transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-[var(--color-text-secondary)] mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30"
              whileHover={{
                scale: 1.05,
                boxShadow: 'var(--shadow-glow-primary)'
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: isHovered ? 'var(--shadow-glow-primary)' : 'none'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ProjectCard;
