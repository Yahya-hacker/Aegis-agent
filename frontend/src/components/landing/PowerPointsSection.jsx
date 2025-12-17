import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Settings, Shield, GitBranch, Database, CheckCircle, ChevronDown } from 'lucide-react';

const powerPoints = [
  {
    icon: Settings,
    title: 'Zero-Touch Setup',
    tagline: 'One Command Deployment',
    description: 'A new setup.py automates the entire environment configuration — Python, Go, Browsers, API keys — in a single command. No manual dependency hunting.',
    color: '#4CAF50',
    details: ['Automated Python environment', 'Go tool installation', 'Browser configuration', 'API key management']
  },
  {
    icon: GitBranch,
    title: 'Self-Healing Warfare',
    tagline: 'Adaptive Bypass Generation',
    description: 'If an exploit is blocked by a WAF, the agent doesn\'t just fail. The Tree of Thoughts Debugger analyzes WHY it was blocked and proposes a bypass (e.g., changing encoding).',
    color: '#F44336',
    details: ['WAF detection analysis', 'Encoding mutation', 'Payload obfuscation', 'Retry strategies']
  },
  {
    icon: Shield,
    title: 'Human-In-The-Loop Control',
    tagline: 'User Confirmation Workflow',
    description: 'A new approval workflow presents the strategic plan before execution, solving the "rogue AI" fear common in enterprise environments. Full operator control.',
    color: '#007ACC',
    details: ['Strategic plan preview', 'Action approval gates', 'Risk assessment display', 'Abort capabilities']
  },
  {
    icon: Database,
    title: 'Graph Memory',
    tagline: 'Knowledge Graph Intelligence',
    description: 'It doesn\'t just "remember" text — it builds a Knowledge Graph of the target\'s infrastructure, finding complex attack paths that require connecting dots A to B to C.',
    color: '#9C27B0',
    details: ['Infrastructure mapping', 'Attack path discovery', 'Relationship tracking', 'Pattern recognition']
  },
];

const strategicFeatures = [
  {
    title: 'Plan-First, Attack-Later',
    description: 'Unlike older versions which attacked immediately, v8.1 performs "Phase 0 Deep Reconnaissance" and generates a full strategic plan for user approval before launching exploits.',
    icon: Zap,
    color: '#FFC107'
  },
  {
    title: 'Dynamic Tool Installation',
    description: 'The LLMToolAdapter can now install its own tools (via pip, go, apt) on the fly if it encounters new technology, giving it "high liberty" to adapt to any environment.',
    icon: Settings,
    color: '#00BCD4'
  },
];

const PowerPointsSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section id="powerpoints" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(156, 39, 176, 0.08) 0%, transparent 50%)',
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at 80% 50%, rgba(0, 122, 204, 0.08) 0%, transparent 50%)',
          }}
          animate={{
            opacity: [0.8, 0.5, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#4CAF50]/10 border border-[#4CAF50]/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-[#4CAF50]" />
            <span className="text-[#4CAF50] font-mono text-sm">POWER POINTS — KEY DIFFERENTIATORS</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            What Makes v8.1 Unstoppable
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto">
            Battle-tested features designed for real-world penetration testing. 
            From zero-touch deployment to self-healing exploits.
          </p>
        </motion.div>

        {/* Power Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {powerPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                className={`bg-[#0a0a0a] border p-6 cursor-pointer transition-all duration-500 ${
                  expandedCard === index ? 'border-opacity-100' : 'border-white/10 hover:border-opacity-50'
                }`}
                style={{ borderColor: expandedCard === index ? point.color : undefined }}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                whileHover={{ scale: 1.02 }}
                layout
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <motion.div 
                    className="flex-shrink-0 w-14 h-14 flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${point.color}15`,
                      border: `1px solid ${point.color}40`
                    }}
                    animate={expandedCard === index ? { rotate: 360 } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <point.icon className="w-7 h-7" style={{ color: point.color }} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 font-mono">{point.title}</h3>
                    <div className="text-sm mb-3 font-mono" style={{ color: point.color }}>
                      {point.tagline}
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {point.description}
                    </p>

                    {/* Expandable details */}
                    <AnimatePresence>
                      {expandedCard === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-white/10"
                        >
                          <div className="grid grid-cols-2 gap-2">
                            {point.details.map((detail, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-2 text-xs text-white/60"
                              >
                                <CheckCircle className="w-3 h-3" style={{ color: point.color }} />
                                {detail}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Expand indicator */}
                  <motion.div
                    animate={{ rotate: expandedCard === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-white/30" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Strategic Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 bg-gradient-to-r from-[#0a0a0a] to-[#050505] p-8"
        >
          <h3 className="text-xl font-bold text-white mb-6 font-mono text-center">Strategic Planning & Autonomy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategicFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                  style={{ 
                    backgroundColor: `${feature.color}15`,
                    border: `1px solid ${feature.color}40`
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 font-mono">{feature.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Efficiency Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '60-80%', label: 'Scan Time Reduction', sublabel: 'Asset Deduplication' },
            { value: '<60%', label: 'Confidence Gate', sublabel: 'Search Mode Trigger' },
            { value: '>20%', label: 'Deviation Halt', sublabel: 'Virtual Sandbox' },
            { value: '~0', label: 'False Positives', sublabel: 'PoC Validation' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 border border-white/10 bg-[#0a0a0a]"
              whileHover={{ scale: 1.05, borderColor: '#9C27B0' }}
            >
              <motion.div 
                className="text-3xl font-bold text-[#9C27B0] font-mono mb-1"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-white/70 text-sm font-mono">{stat.label}</div>
              <div className="text-white/40 text-xs">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PowerPointsSection;
