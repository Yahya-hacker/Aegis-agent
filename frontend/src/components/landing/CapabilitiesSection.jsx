import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Wrench, Microscope, Skull, Radio } from 'lucide-react';

const capabilities = [
  {
    icon: Lock,
    title: 'Cryptography',
    description: 'Auto-detects hashes and encrypted data. Uses Ciphey/John for intelligent cracking with adaptive algorithms.',
    color: '#9C27B0',
    features: ['Hash Detection', 'Password Cracking', 'Encryption Analysis']
  },
  {
    icon: Wrench,
    title: 'Reverse Engineering',
    description: 'Deep binary analysis using radare2/objdump. Automatic disassembly and function identification.',
    color: '#007ACC',
    features: ['Binary Analysis', 'Disassembly', 'Symbol Resolution']
  },
  {
    icon: Microscope,
    title: 'Forensics',
    description: 'File artifact analysis and steganography extraction. Memory forensics and timeline reconstruction.',
    color: '#00BCD4',
    features: ['File Carving', 'Steganography', 'Memory Analysis']
  },
  {
    icon: Skull,
    title: 'Binary Exploitation',
    description: 'Buffer overflow detection and ROP gadget discovery. Automatic exploit generation pipeline.',
    color: '#F44336',
    features: ['Overflow Detection', 'ROP Chains', 'Exploit Generation']
  },
  {
    icon: Radio,
    title: 'Network Analysis',
    description: 'Deep PCAP analysis and protocol reconstruction. Traffic pattern recognition and anomaly detection.',
    color: '#4CAF50',
    features: ['PCAP Analysis', 'Protocol Decode', 'Traffic Patterns']
  }
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-24 bg-black relative">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#007ACC]/10 border border-[#007ACC]/30 mb-6">
            <span className="text-[#007ACC] font-mono text-sm">CAPABILITY DOMAINS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            Five Specialized Domains
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Aegis v8.0 operates across five specialized security domains, each powered by dedicated analysis engines and AI models.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover bg-[#0a0a0a] p-6 group"
            >
              {/* Icon */}
              <div 
                className="domain-icon mb-4"
                style={{ 
                  backgroundColor: `${capability.color}15`,
                  border: `1px solid ${capability.color}40`
                }}
              >
                <capability.icon 
                  className="w-6 h-6" 
                  style={{ color: capability.color }}
                />
              </div>

              {/* Title */}
              <h3 
                className="text-xl font-bold mb-3 font-mono transition-colors duration-300"
                style={{ color: capability.color }}
              >
                {capability.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                {capability.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {capability.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs font-mono border"
                    style={{ 
                      borderColor: `${capability.color}30`,
                      color: `${capability.color}`,
                      backgroundColor: `${capability.color}10`
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
