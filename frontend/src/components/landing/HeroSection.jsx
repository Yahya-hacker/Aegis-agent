import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Cpu, Network, Eye } from 'lucide-react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-black grid-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9C27B0]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#007ACC]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-80px)] gap-12 py-16">
          {/* Left Content */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#9C27B0]/10 border border-[#9C27B0]/30 mb-6"
            >
              <span className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse" />
              <span className="text-[#9C27B0] font-mono text-sm">SYSTEM ONLINE — v8.0 STABLE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-mono"
            >
              Aegis Agent v8.0
              <br />
              <span className="gradient-text">Full-Spectrum Cyber Operations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl leading-relaxed"
            >
              From vulnerability scanning to autonomous zero-day research. Powered by a 
              <span className="text-[#9C27B0] font-semibold"> Multi-LLM Neuro-Symbolic Architecture</span>.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-8 mb-10"
            >
              {[
                { icon: Cpu, label: '4 Specialized LLMs', value: 'Multi-Agent' },
                { icon: Network, label: 'Graph Memory', value: 'Cortex Engine' },
                { icon: Eye, label: 'Visual Analysis', value: 'Set-of-Mark' },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-[#9C27B0]/10 border border-[#9C27B0]/30">
                    <stat.icon className="w-5 h-5 text-[#9C27B0]" />
                  </div>
                  <div>
                    <div className="text-white font-mono text-sm">{stat.value}</div>
                    <div className="text-white/50 text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#demo" className="btn-primary font-mono">
                Deploy Agent
                <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#architecture" className="btn-secondary font-mono">
                View Architecture
              </a>
            </motion.div>
          </div>

          {/* Right Side - 3D Spline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 w-full lg:w-auto h-[500px] lg:h-[600px] relative"
          >
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-[#9C27B0] font-mono animate-pulse">Loading 3D Visualization...</div>
              </div>
            }>
              <Spline 
                scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </Suspense>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HeroSection;
