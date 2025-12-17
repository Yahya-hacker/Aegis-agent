import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Check, X, ArrowRight, Swords } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Reasoning',
    xbow: 'Standard Meta-Prompting',
    aegis: 'Divergence / Critique / Convergence',
    aegisWins: true,
  },
  {
    feature: 'Decision Making',
    xbow: 'OODA Loop',
    aegis: 'Omega Protocol (Graph-Native KTV + Swarm Debate)',
    aegisWins: true,
  },
  {
    feature: 'False Positives',
    xbow: 'Low, but "Spammy" (Low Impact)',
    aegis: 'Near Zero (Adversarial Judge + PoC Validation)',
    aegisWins: true,
  },
  {
    feature: 'Business Logic',
    xbow: 'Weak ("Context Blindness")',
    aegis: 'Strong (Strategic Planner + CoT)',
    aegisWins: true,
  },
  {
    feature: 'Tooling',
    xbow: 'Pre-defined toolset',
    aegis: 'Dynamic (Installs tools on the fly)',
    aegisWins: true,
  },
  {
    feature: 'Transparency',
    xbow: 'Black Box',
    aegis: 'Transparent "Tree of Thoughts" Logs',
    aegisWins: true,
  },
];

const advantages = [
  {
    title: 'The "Logic Gap"',
    xbowProblem: 'XBOW is criticized for being "blind to semantic errors" and business logic flaws because it lacks deep contextual reasoning.',
    aegisSolution: 'The God Mode System Prompt and Strategic Planner explicitly force the AI to reason about the business context before acting.',
    color: '#9C27B0',
  },
  {
    title: 'Spam & Triage Overload',
    xbowProblem: 'Human researchers hate XBOW because it floods triage queues with "low-hanging fruit" and "informative" findings with no real impact.',
    aegisSolution: 'Aegis implements the Adversarial Swarm (Judge Persona). The "Validation Agent" must generate a working PoC, or the finding is discarded.',
    color: '#F44336',
  },
  {
    title: 'Cost & Accessibility',
    xbowProblem: 'XBOW is an expensive, commercial "black box" platform tailored for enterprise budgets.',
    aegisSolution: 'Aegis v8.1 is transparent and deployable. "On-Demand Tooling" where you control the infrastructure — a force multiplier for individual hackers.',
    color: '#4CAF50',
  },
  {
    title: 'Black Box Problem',
    xbowProblem: 'Users cannot see WHY XBOW made a decision or how it constructed an attack chain.',
    aegisSolution: 'Aegis features a Reasoning Display and logs its "Thinking Process", turning the tool into a mentor as well as a weapon.',
    color: '#007ACC',
  },
];

const ComparisonSection = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeAdvantage, setActiveAdvantage] = useState(0);

  return (
    <section id="comparison" className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Animated glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        style={{
          background: 'radial-gradient(circle, rgba(156, 39, 176, 0.1) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#F44336]/10 border border-[#F44336]/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Swords className="w-4 h-4 text-[#F44336]" />
            <span className="text-[#F44336] font-mono text-sm">AEGIS v8.1 vs XBOW</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            Where Aegis Beats The Competition
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto">
            Based on analysis of XBOW's documented weaknesses, here's how Aegis v8.1 exploits those gaps 
            to deliver superior results.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 overflow-x-auto"
        >
          <div className="min-w-[700px] border border-white/10 bg-[#0a0a0a]">
            {/* Table Header */}
            <div className="grid grid-cols-3 border-b border-white/10">
              <div className="p-4 font-mono font-bold text-white/60 text-sm">FEATURE</div>
              <div className="p-4 font-mono font-bold text-white/40 text-sm border-l border-white/10">
                XBOW Agent
              </div>
              <div className="p-4 font-mono font-bold text-[#9C27B0] text-sm border-l border-white/10 flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Aegis v8.1
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <motion.div
                key={row.feature}
                className={`grid grid-cols-3 border-b border-white/5 transition-colors duration-300 ${
                  hoveredRow === index ? 'bg-[#9C27B0]/5' : ''
                }`}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="p-4 font-mono text-white text-sm font-medium">
                  {row.feature}
                </div>
                <div className="p-4 text-white/40 text-sm border-l border-white/10 flex items-center gap-2">
                  <X className="w-4 h-4 text-[#F44336]/50 flex-shrink-0" />
                  <span>{row.xbow}</span>
                </div>
                <div className="p-4 text-white text-sm border-l border-white/10 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4CAF50] flex-shrink-0" />
                  <span className="text-[#4CAF50]/90">{row.aegis}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advantage Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 font-mono text-center">Detailed Advantages</h3>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {advantages.map((adv, index) => (
              <motion.button
                key={adv.title}
                onClick={() => setActiveAdvantage(index)}
                className={`px-4 py-2 font-mono text-sm transition-all duration-300 ${
                  activeAdvantage === index 
                    ? 'text-black' 
                    : 'text-white/60 border border-white/20 hover:border-white/40'
                }`}
                style={{
                  backgroundColor: activeAdvantage === index ? adv.color : 'transparent',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {adv.title}
              </motion.button>
            ))}
          </div>

          {/* Active Advantage Card */}
          <motion.div
            key={activeAdvantage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* XBOW Problem */}
            <motion.div 
              className="p-6 bg-[#0a0a0a] border border-[#F44336]/30"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#F44336]/10 border border-[#F44336]/30">
                  <X className="w-5 h-5 text-[#F44336]" />
                </div>
                <div>
                  <div className="text-[#F44336] font-mono text-sm">XBOW's Flaw</div>
                  <div className="text-white/40 text-xs">Competitor Weakness</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                {advantages[activeAdvantage].xbowProblem}
              </p>
            </motion.div>

            {/* Aegis Solution */}
            <motion.div 
              className="p-6 bg-[#0a0a0a] border"
              style={{ borderColor: `${advantages[activeAdvantage].color}50` }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ 
                    backgroundColor: `${advantages[activeAdvantage].color}15`,
                    border: `1px solid ${advantages[activeAdvantage].color}40`
                  }}
                >
                  <Check className="w-5 h-5" style={{ color: advantages[activeAdvantage].color }} />
                </div>
                <div>
                  <div className="font-mono text-sm" style={{ color: advantages[activeAdvantage].color }}>
                    Aegis Advantage
                  </div>
                  <div className="text-white/40 text-xs">Our Solution</div>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                {advantages[activeAdvantage].aegisSolution}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#demo"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#9C27B0] text-black font-mono font-bold"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(156, 39, 176, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Trophy className="w-5 h-5" />
            Experience The Difference
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
