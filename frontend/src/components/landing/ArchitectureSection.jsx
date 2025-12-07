import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Eye, Target } from 'lucide-react';

const agents = [
  {
    name: 'Strategic Agent',
    model: 'DeepSeek R1',
    icon: Target,
    color: '#9C27B0',
    description: 'Mission planning, scope analysis, and intelligent triage. Orchestrates the overall penetration testing strategy.',
    tasks: ['Mission Planning', 'Scope Analysis', 'Resource Allocation']
  },
  {
    name: 'Reasoning Agent',
    model: 'DeepSeek R1',
    icon: Brain,
    color: '#007ACC',
    description: 'Deep vulnerability analysis with chain-of-thought reasoning. Identifies complex attack vectors.',
    tasks: ['Vulnerability Analysis', 'Attack Chains', 'Risk Assessment']
  },
  {
    name: 'Coding Agent',
    model: 'Qwen 2.5',
    icon: Code,
    color: '#4CAF50',
    description: 'Exploit script generation and payload crafting. Writes custom tools on-demand.',
    tasks: ['Exploit Generation', 'Payload Crafting', 'Tool Development']
  },
  {
    name: 'Visual Agent',
    model: 'Qwen VL',
    icon: Eye,
    color: '#F44336',
    description: 'Screenshot analysis and GUI interaction using Set-of-Mark technology for precise navigation.',
    tasks: ['Screenshot Analysis', 'GUI Navigation', 'Element Detection']
  }
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9C27B0]/5 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#9C27B0]/10 border border-[#9C27B0]/30 mb-6">
            <span className="text-[#9C27B0] font-mono text-sm">NEURAL ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            Multi-LLM Brain
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Sharded API Architecture with four specialized agents working in concert. Each agent optimized for specific cognitive tasks.
          </p>
        </motion.div>

        {/* Central Brain Visualization */}
        <div className="relative mb-16">
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-[#9C27B0]/20 to-[#007ACC]/20 border border-[#9C27B0]/50 flex items-center justify-center">
                <Brain className="w-16 h-16 text-[#9C27B0]" />
              </div>
              <div className="absolute inset-0 bg-[#9C27B0] blur-2xl opacity-20 animate-pulse" />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white font-mono text-sm whitespace-nowrap">
                CORTEX ENGINE
              </div>
            </motion.div>
          </div>

          {/* Connection lines (hidden on mobile) */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-full h-24">
            <svg className="w-full h-full" viewBox="0 0 1000 100" fill="none">
              <path d="M500 0 L150 100" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
              <path d="M500 0 L350 100" stroke="url(#gradient2)" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
              <path d="M500 0 L650 100" stroke="url(#gradient3)" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
              <path d="M500 0 L850 100" stroke="url(#gradient4)" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9C27B0" />
                  <stop offset="100%" stopColor="#9C27B0" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#007ACC" />
                  <stop offset="100%" stopColor="#007ACC" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4CAF50" />
                  <stop offset="100%" stopColor="#4CAF50" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F44336" />
                  <stop offset="100%" stopColor="#F44336" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="agent-card p-6 group hover:border-opacity-50 transition-all duration-300"
              style={{ borderColor: agent.color }}
            >
              {/* Icon */}
              <div 
                className="w-12 h-12 flex items-center justify-center mb-4"
                style={{ 
                  backgroundColor: `${agent.color}15`,
                  border: `1px solid ${agent.color}40`
                }}
              >
                <agent.icon className="w-6 h-6" style={{ color: agent.color }} />
              </div>

              {/* Name & Model */}
              <h3 className="text-lg font-bold text-white mb-1 font-mono">{agent.name}</h3>
              <div 
                className="text-xs font-mono mb-3 px-2 py-1 inline-block"
                style={{ 
                  backgroundColor: `${agent.color}15`,
                  color: agent.color
                }}
              >
                {agent.model}
              </div>

              {/* Description */}
              <p className="text-white/50 text-sm mb-4">{agent.description}</p>

              {/* Tasks */}
              <div className="space-y-2">
                {agent.tasks.map((task, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-white/40">
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: agent.color }} />
                    {task}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
