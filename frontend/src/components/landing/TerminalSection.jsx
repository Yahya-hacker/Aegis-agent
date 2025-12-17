import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Play, Pause, RotateCcw } from 'lucide-react';

const terminalLines = [
  { type: 'command', text: '> scan target.com', delay: 0 },
  { type: 'planning', text: '[PLANNING] Analyzing scope and attack surface...', delay: 1200 },
  { type: 'observation', text: '[OBSERVATION] Capturing SoM Screenshot...', delay: 2400 },
  { type: 'observation', text: '[OBSERVATION] Identified 47 interactive elements', delay: 3600 },
  { type: 'deep-thought', text: '[DEEP_THOUGHT] Analyzing input fields for injection vectors...', delay: 4800 },
  { type: 'deep-thought', text: '[DEEP_THOUGHT] SQL Injection pattern detected in /api/search', delay: 6000 },
  { type: 'action', text: "[ACTION] Executing run_sqlmap --url='target.com/api/search'", delay: 7200 },
  { type: 'action', text: '[ACTION] Testing payloads: UNION-based, Boolean-based, Time-based', delay: 8400 },
  { type: 'success', text: '[SUCCESS] Vulnerability Confirmed: SQL Injection (UNION-based)', delay: 9600 },
  { type: 'success', text: '[SUCCESS] Database: MySQL 8.0 | Tables: 23 | Risk: CRITICAL', delay: 10800 },
  { type: 'info', text: '', delay: 12000 },
  { type: 'command', text: '> exploit --generate-report', delay: 12500 },
  { type: 'action', text: '[ACTION] Generating vulnerability report...', delay: 13500 },
  { type: 'success', text: '[SUCCESS] Report saved: aegis_report_2025_08_15.pdf', delay: 14700 },
];

const getLineColor = (type) => {
  switch (type) {
    case 'command': return '#FFFFFF';
    case 'planning': return '#007ACC';
    case 'observation': return '#00BCD4';
    case 'deep-thought': return '#9C27B0';
    case 'action': return '#FFC107';
    case 'success': return '#4CAF50';
    case 'error': return '#F44336';
    case 'info': return '#666666';
    default: return '#FFFFFF';
  }
};

const TerminalSection = () => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    if (currentIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, terminalLines[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? 500 : terminalLines[currentIndex].delay - terminalLines[currentIndex - 1].delay);

      return () => clearTimeout(timer);
    } else {
      // Loop after completion
      const loopTimer = setTimeout(() => {
        setVisibleLines([]);
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(loopTimer);
    }
  }, [currentIndex, isPlaying]);

  const handleReset = () => {
    setVisibleLines([]);
    setCurrentIndex(0);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="demo" className="py-24 bg-[#050505] relative">
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F44336]/10 border border-[#F44336]/30 mb-6">
            <Terminal className="w-4 h-4 text-[#F44336]" />
            <span className="text-[#F44336] font-mono text-sm">LIVE DEMONSTRATION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            How It Works
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Watch Aegis Agent autonomously discover and exploit vulnerabilities in real-time.
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="terminal-window"
        >
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-dot" style={{ backgroundColor: '#F44336' }} />
            <div className="terminal-dot" style={{ backgroundColor: '#FFC107' }} />
            <div className="terminal-dot" style={{ backgroundColor: '#4CAF50' }} />
            <span className="ml-4 text-white/50 font-mono text-sm">aegis-agent-v8.1</span>
            <div className="ml-auto flex gap-2">
              <button 
                onClick={togglePlay}
                className="p-1 hover:bg-white/10 transition-colors"
              >
                {isPlaying ? 
                  <Pause className="w-4 h-4 text-white/50" /> : 
                  <Play className="w-4 h-4 text-white/50" />
                }
              </button>
              <button 
                onClick={handleReset}
                className="p-1 hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4 text-white/50" />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="terminal-body min-h-[400px] font-mono text-sm">
            {visibleLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="py-1"
                style={{ color: getLineColor(line.type) }}
              >
                {line.text}
              </motion.div>
            ))}
            {/* Blinking cursor */}
            <span className="inline-block w-2 h-4 bg-[#9C27B0] cursor-blink" />
          </div>
        </motion.div>

        {/* Log Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-mono"
        >
          {[
            { label: 'PLANNING', color: '#007ACC' },
            { label: 'OBSERVATION', color: '#00BCD4' },
            { label: 'DEEP_THOUGHT', color: '#9C27B0' },
            { label: 'ACTION', color: '#FFC107' },
            { label: 'SUCCESS', color: '#4CAF50' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="w-3 h-3" style={{ backgroundColor: item.color }} />
              <span className="text-white/50">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
