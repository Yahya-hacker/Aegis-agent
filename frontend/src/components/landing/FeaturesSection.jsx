import React from 'react';
import { motion } from 'framer-motion';
import { Dna, RefreshCw, ScanEye, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Dna,
    title: 'Genesis Fuzzer',
    subtitle: 'Evolutionary Genetic Fuzzing',
    description: 'Uses evolutionary algorithms and differential analysis to discover vulnerabilities. Not just static signatures — dynamic mutation-based testing that evolves with your target.',
    color: '#9C27B0',
    highlights: ['Genetic Algorithms', 'Differential Analysis', 'Mutation Engine']
  },
  {
    icon: RefreshCw,
    title: 'Self-Healing Infrastructure',
    subtitle: 'Autonomous Dependency Resolution',
    description: 'Automatically detects and fixes missing dependencies. Auto-installs Playwright, security tools, and required packages without manual intervention.',
    color: '#007ACC',
    highlights: ['Auto-Install', 'Error Recovery', 'Tool Management']
  },
  {
    icon: ScanEye,
    title: 'Visual-Cognitive Engine',
    subtitle: 'Set-of-Mark Technology',
    description: 'Advanced screenshot analysis that tags interactive elements for precise navigation. Sees and understands web interfaces like a human operator.',
    color: '#4CAF50',
    highlights: ['Element Tagging', 'Visual Recognition', 'Precise Navigation']
  },
  {
    icon: Sparkles,
    title: 'Cortex Graph Memory',
    subtitle: 'Persistent Knowledge Graph',
    description: 'Maintains a graph database of discovered URLs, actions, and relationships. Enables intelligent path traversal and pattern recognition across sessions.',
    color: '#F44336',
    highlights: ['Graph Database', 'Path Memory', 'Pattern Recognition']
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-black relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4CAF50]/10 border border-[#4CAF50]/30 mb-6">
            <span className="text-[#4CAF50] font-mono text-sm">KEY DIFFERENTIATORS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            What Sets Us Apart
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Advanced capabilities that push the boundaries of autonomous penetration testing.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/10 p-8 group hover:border-opacity-30 transition-all duration-300"
              style={{ borderColor: feature.color }}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div 
                  className="flex-shrink-0 w-16 h-16 flex items-center justify-center"
                  style={{ 
                    backgroundColor: `${feature.color}10`,
                    border: `1px solid ${feature.color}30`
                  }}
                >
                  <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 font-mono">{feature.title}</h3>
                  <div className="text-sm mb-3 font-mono" style={{ color: feature.color }}>
                    {feature.subtitle}
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-mono border"
                        style={{ 
                          borderColor: `${feature.color}30`,
                          color: feature.color,
                          backgroundColor: `${feature.color}05`
                        }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
