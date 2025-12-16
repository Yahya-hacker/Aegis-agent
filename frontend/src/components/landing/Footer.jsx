import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Github, FileText, AlertTriangle, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const docLinks = [
    { name: 'MULTI_LLM_GUIDE.md', href: '#' },
    { name: 'V7_5_FEATURES.md', href: '#' },
    { name: 'API Documentation', href: '#' },
    { name: 'Installation Guide', href: '#' },
  ];

  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="relative">
                <Shield className="w-10 h-10 text-[#9C27B0]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white font-mono">AEGIS AGENT</span>
                <span className="text-xs text-[#9C27B0] font-mono">v8.0 — Full-Spectrum Cyber Operations</span>
              </div>
            </motion.div>
            <p className="text-white/50 text-sm max-w-md mb-6">
              An AI-powered autonomous penetration testing platform featuring Multi-LLM 
              Neuro-Symbolic Architecture for comprehensive security assessment.
            </p>
            <a
              href="https://github.com/Yahya-hacker/Aegis-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 hover:border-[#9C27B0] hover:bg-[#9C27B0]/10 transition-all duration-300 font-mono text-sm text-white"
            >
              <Github className="w-4 h-4" />
              View on GitHub
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Documentation Links */}
          <div>
            <h4 className="text-white font-mono font-bold mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#007ACC]" />
              Documentation
            </h4>
            <ul className="space-y-3">
              {docLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-[#007ACC] transition-colors duration-300 text-sm font-mono flex items-center gap-2"
                  >
                    <span className="text-[#007ACC]">&gt;</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-mono font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Capabilities', href: '#capabilities' },
                { name: 'Architecture', href: '#architecture' },
                { name: 'Features', href: '#features' },
                { name: 'Demo', href: '#demo' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border border-[#F44336]/30 bg-[#F44336]/5 p-4 mb-8"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#F44336] flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="text-[#F44336] font-mono font-bold text-sm mb-1">AUTHORIZED USE ONLY</h5>
              <p className="text-white/60 text-xs">
                This tool is designed for professional security researchers and authorized penetration testing only. 
                Unauthorized access to computer systems is illegal. Always obtain proper authorization before testing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-mono">
            &copy; {currentYear} Aegis Agent. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse" />
              System Operational
            </span>
            <span>v8.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
