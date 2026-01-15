import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '/src/components/ui/button';
import { useToast } from '/src/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please fix the errors in the form.',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Message Sent 🚀',
      description: 'Thanks for reaching out. I’ll respond as soon as possible.'
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Ndubuisi-Godcares',
      color: 'var(--color-primary)'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com',
      color: 'var(--color-secondary)'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'ndubuisigodcares1011@gmail.com',
      href: 'mailto:ndubuisigodcares1011@gmail.com'
    },
    {
      icon: Phone,
      text: '+91 87670 18831',
      href: 'tel:+918767018831'
    },
    {
      icon: MapPin,
      text: 'Pune, Maharashtra, India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="mt-6 text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Interested in AI research, applied ML, or collaboration? Let’s connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email'].map((field) => (
                <div key={field}>
                  <label className="block text-sm mb-2 text-[var(--color-text-secondary)] capitalize">
                    {field}
                  </label>
                  <input
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] text-white"
                  />
                  {errors[field] && (
                    <p className="text-sm text-red-500 mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}

              <div>
                <label className="block text-sm mb-2 text-[var(--color-text-secondary)]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] text-white resize-none"
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full py-6 text-lg font-semibold rounded-xl"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <span className="flex items-center justify-center gap-2">
                  Send Message <Send className="w-5 h-5" />
                </span>
              </Button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <a
                    key={i}
                    href={info.href}
                    className="flex items-center gap-4 p-4 glassmorphism rounded-xl"
                  >
                    <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                    <span className="text-[var(--color-text-secondary)]">
                      {info.text}
                    </span>
                  </a>
                );
              })}
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 glassmorphism rounded-xl"
                    >
                      <Icon className="w-6 h-6 text-[var(--color-text-secondary)]" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2">Availability</h3>
              <p className="text-[var(--color-text-secondary)]">
                Currently open to research collaborations, applied AI projects,
                and selective engineering opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
