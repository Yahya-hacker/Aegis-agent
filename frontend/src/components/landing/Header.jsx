import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Github, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#demo' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <Shield className="w-10 h-10 text-[#9C27B0]" />
              <div className="absolute inset-0 bg-[#9C27B0] blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white font-mono">AEGIS</span>
              <span className="text-xs text-[#9C27B0] font-mono">AGENT v8.0</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-white/60 hover:text-white transition-colors duration-300 font-mono text-sm"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="https://github.com/Yahya-hacker/Aegis-agent"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white border border-white/20 hover:border-white/40 transition-all duration-300 font-mono text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
            <motion.a
              href="#demo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="btn-primary font-mono text-sm"
            >
              Deploy Agent
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/60 hover:text-white transition-colors duration-300 font-mono text-sm py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://github.com/Yahya-hacker/Aegis-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white font-mono text-sm py-2"
              >
                <Github className="w-4 h-4" />
                GitHub Profile
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
