import React, { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Network, Shield, Zap, Users, Search, Box } from 'lucide-react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const omegaFeatures = [
  {
    icon: Network,
    title: 'Graph-Native KTV Loop',
    description: 'Maps all reasoning to a knowledge graph (Nodes, Edges, Attack Paths) rather than just a list of bugs. Enables complex multi-step attack path discovery.',
    color: '#9C27B0',
  },
  {
    icon: Users,
    title: 'Adversarial Swarm',
    description: 'Red/Blue/Judge internal debate system. Before high-risk actions, "Red" proposes exploits, "Blue" analyzes defenses, and "Judge" decides the safest path.',
    color: '#F44336',
  },
  {
    icon: Search,
    title: 'Epistemic Priority Gating',
    description: 'If confidence is below 60%, exploitation is disabled and "Search Mode" activates to gather more intelligence, preventing reckless actions.',
    color: '#007ACC',
  },
  {
    icon: Box,
    title: 'Virtual Sandbox',
    description: 'Pre-computes expected responses. If actual response deviates by >20%, execution halts to prevent detection and maintain stealth.',
    color: '#4CAF50',
  },
];

const OmegaProtocolSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="omega" className="py-24 bg-[#030303] relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#9C27B0]/5 rounded-full blur-3xl"
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
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#007ACC]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#9C27B0]/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#9C27B0]/10 border border-[#9C27B0]/30 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Brain className="w-4 h-4 text-[#9C27B0]" />
            <span className="text-[#9C27B0] font-mono text-sm">THE BRAIN — OMEGA PROTOCOL</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            Neuro-Symbolic Swarm System
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto">
            The most significant architectural advancement in v8.1. A multi-agent debate system that integrates 
            graph-native reasoning with adversarial validation for unparalleled decision-making.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* 3D Brain Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full h-[400px] lg:h-[500px] relative"
          >
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <motion.div 
                  className="text-[#9C27B0] font-mono"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Loading Neural Visualization...
                </motion.div>
              </div>
            }>
              <Spline 
                scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </Suspense>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Feature Cards */}
          <div className="flex-1 space-y-4">
            {omegaFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-5 border cursor-pointer transition-all duration-500 ${
                  activeFeature === index 
                    ? 'bg-gradient-to-r from-[#0a0a0a] to-transparent' 
                    : 'bg-[#0a0a0a]/50 hover:bg-[#0a0a0a]'
                }`}
                style={{ 
                  borderColor: activeFeature === index ? feature.color : 'rgba(255,255,255,0.1)',
                  boxShadow: activeFeature === index ? `0 0 30px ${feature.color}20` : 'none'
                }}
                onClick={() => setActiveFeature(index)}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${feature.color}15`,
                      border: `1px solid ${feature.color}40`
                    }}
                    animate={activeFeature === index ? { 
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 font-mono">{feature.title}</h3>
                    <motion.p 
                      className="text-white/50 text-sm leading-relaxed"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: activeFeature === index ? 'auto' : 0,
                        opacity: activeFeature === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                  <motion.div
                    animate={{ rotate: activeFeature === index ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <Zap className="w-4 h-4" style={{ color: feature.color }} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmegaProtocolSection;
