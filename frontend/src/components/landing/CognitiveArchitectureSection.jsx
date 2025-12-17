import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, GitBranch, ShieldCheck, Layers, ArrowRight } from 'lucide-react';

const cognitiveFeatures = [
  {
    icon: Lightbulb,
    title: 'God Mode System Prompt',
    subtitle: 'Chain of Thought Processing',
    phases: ['Divergence — Brainstorming', 'Critique — Devil\'s Advocate', 'Convergence — Refining'],
    description: 'Forces a structured reasoning process with three distinct phases, ensuring thorough analysis before any action.',
    color: '#FFC107',
  },
  {
    icon: GitBranch,
    title: 'Tree of Thoughts Debugger',
    subtitle: 'Self-Healing Analysis',
    phases: ['Syntax Error Analysis', 'WAF Blocking Detection', 'False Assumption Check'],
    description: 'When an attack fails, it analyzes three parallel branches of failure possibilities to self-heal and adapt.',
    color: '#9C27B0',
  },
  {
    icon: ShieldCheck,
    title: 'Pre-Execution Auditor',
    subtitle: 'Safety Layer',
    phases: ['Dangerous Syntax Check', 'Circular Logic Detection', 'Impact Assessment'],
    description: 'Reviews every command for dangerous patterns or circular logic before execution.',
    color: '#F44336',
  },
];

const CognitiveArchitectureSection = () => {
  return (
    <section id="cognitive" className="py-24 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Animated neural network lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9C27B0" />
            <stop offset="50%" stopColor="#007ACC" />
            <stop offset="100%" stopColor="#4CAF50" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${10 + i * 12}%`}
            y1="0%"
            x2={`${20 + i * 10}%`}
            y2="100%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFC107]/10 border border-[#FFC107]/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Layers className="w-4 h-4 text-[#FFC107]" />
            <span className="text-[#FFC107] font-mono text-sm">THE REASONING — COGNITIVE ARCHITECTURE</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            God Mode Thinking
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto">
            Advanced cognitive processes that enable deep contextual reasoning, self-healing capabilities, 
            and safety-first execution — solving the "context blindness" problem.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cognitiveFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <motion.div
                className="bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-white/10 p-8 h-full transition-all duration-500 group-hover:border-opacity-50"
                style={{ borderColor: feature.color }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${feature.color}10 0%, transparent 70%)`
                  }}
                />

                {/* Icon */}
                <motion.div 
                  className="w-16 h-16 flex items-center justify-center mb-6 relative"
                  style={{ 
                    backgroundColor: `${feature.color}15`,
                    border: `1px solid ${feature.color}40`
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                  {/* Pulse animation */}
                  <motion.div
                    className="absolute inset-0"
                    style={{ border: `1px solid ${feature.color}` }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white mb-2 font-mono">{feature.title}</h3>
                <div 
                  className="text-sm mb-4 font-mono"
                  style={{ color: feature.color }}
                >
                  {feature.subtitle}
                </div>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Phases */}
                <div className="space-y-3">
                  {feature.phases.map((phase, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-center gap-3 text-xs"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + idx * 0.1 }}
                    >
                      <motion.div 
                        className="w-6 h-6 flex items-center justify-center font-mono font-bold"
                        style={{ 
                          backgroundColor: `${feature.color}20`,
                          color: feature.color,
                          border: `1px solid ${feature.color}40`
                        }}
                        whileHover={{ scale: 1.2 }}
                      >
                        {idx + 1}
                      </motion.div>
                      <span className="text-white/60">{phase}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#9C27B0]/10 border border-[#9C27B0]/30 text-[#9C27B0] font-mono text-sm cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(156, 39, 176, 0.3)' }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span>Transparent Reasoning Logs</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CognitiveArchitectureSection;
