import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' }
    ],
    'Resources': [
      { name: 'Blog', href: '#' },
      { name: 'Portfolio', href: '#' },
      { name: 'Resume', href: '#' }
    ]
  };

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="relative bg-[var(--color-dark)] border-t border-white/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 35px, var(--color-primary) 35px, var(--color-primary) 36px),
              repeating-linear-gradient(-45deg, transparent, transparent 35px, var(--color-secondary) 35px, var(--color-secondary) 36px)
            `
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-[var(--color-primary)]" />
              <span className="text-2xl font-bold font-[var(--font-code)]">
                <span className="text-gradient">&lt;AI</span>
                <span className="text-white">Engineer</span>
                <span className="text-gradient">/&gt;</span>
              </span>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Building intelligent systems and pushing the boundaries of artificial intelligence.
            </p>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--color-text-secondary)] text-sm text-center md:text-left">
              <span className="font-[var(--font-code)]">&copy; {currentYear}</span> AI Engineer. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a 
                href="#" 
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gradient Glow Effects */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-primary)] rounded-full blur-[120px] opacity-10" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-secondary)] rounded-full blur-[120px] opacity-10" />
    </footer>
  );
};

export default Footer;