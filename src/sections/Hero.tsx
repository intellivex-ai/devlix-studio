import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Monitor, Activity } from 'lucide-react';
import DeviceMockup from '../components/DeviceMockup';

export const Hero: React.FC = () => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 120 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Editorial Copy */}
        <motion.div
          className="lg:col-span-7 text-left space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primaryGreen/10 border border-primaryGreen/20 text-accentGreen text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Digital Design & Engineering Studio
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[44px] sm:text-[60px] md:text-[76px] leading-[1.0] font-black text-dark font-display"
          >
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGreen to-accentGreen">
              Products
            </span>{' '}
            That <br />
            People Remember.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[17px] sm:text-[20px] text-dark/70 max-w-xl leading-relaxed font-normal"
          >
            We design, build, and scale custom software and websites. No templates, no AI placeholders—just pure, high-performance craftsmanship focused on growth, users, and speed.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primaryGreen hover:bg-accentGreen text-white px-8 py-4 rounded-full font-bold text-[13px] uppercase tracking-wider flex items-center justify-center gap-2 border border-primaryGreen hover:border-accentGreen transition-all shadow-md active:scale-95"
            >
              Start Your Project
              <ArrowRight className="w-4.5 h-4.5" />
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-secondaryBg hover:bg-black/5 text-dark border border-black/5 hover:border-black/10 px-8 py-4 rounded-full font-bold text-[13px] uppercase tracking-wider flex items-center justify-center transition-all active:scale-95"
            >
              See Our Work
            </a>
          </motion.div>
        </motion.div>

        {/* Right Devices Presentation */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0 select-none">
          {/* Laptop Mockup */}
          <div className="w-full max-w-[480px] lg:max-w-none relative z-10 animate-float-laptop">
            <DeviceMockup type="macbook">
              {/* Inside dashboard mockup */}
              <div className="p-4 bg-secondaryBg flex-1 flex flex-col gap-4 text-left select-none text-dark">
                <div className="flex justify-between items-center border-b border-black/5 pb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-dark/40 flex items-center gap-1">
                    <Monitor className="w-3 h-3 text-primaryGreen" /> Dashboard Overview
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-primaryGreen animate-pulse" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white p-2 rounded-lg border border-black/[0.04] shadow-sm flex flex-col">
                    <span className="text-[8px] text-dark/40 uppercase">Conversion</span>
                    <span className="text-xs font-bold text-dark mt-1">+24.8%</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-black/[0.04] shadow-sm flex flex-col">
                    <span className="text-[8px] text-dark/40 uppercase">Performance</span>
                    <span className="text-xs font-bold text-accentGreen mt-1">99%</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-black/[0.04] shadow-sm flex flex-col">
                    <span className="text-[8px] text-dark/40 uppercase">Active Users</span>
                    <span className="text-xs font-bold text-dark mt-1">12.4k</span>
                  </div>
                </div>
                {/* Simulated Chart */}
                <div className="bg-white p-3 rounded-lg border border-black/[0.04] shadow-sm flex-1 flex flex-col justify-between">
                  <span className="text-[8px] text-dark/40 uppercase flex items-center gap-1">
                    <Activity className="w-2.5 h-2.5 text-accentGreen" /> Growth Metrics
                  </span>
                  <div className="flex items-end gap-1.5 h-16 pt-2">
                    {[35, 60, 45, 80, 50, 95, 85].map((val, idx) => (
                      <motion.div
                        key={idx}
                        className="bg-primaryGreen rounded-t-sm flex-1"
                        initial={{ height: 0 }}
                        animate={{ height: `${val}%` }}
                        transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </DeviceMockup>
          </div>

          {/* Floating Phone Mockup */}
          <div className="absolute -right-2 -bottom-10 w-[140px] sm:w-[170px] z-20 animate-float-phone">
            <DeviceMockup type="phone">
              {/* Inside phone mockup */}
              <div className="p-3 flex flex-col h-full gap-3 text-left select-none text-dark bg-[#0f1012]">
                <div className="mt-8 flex justify-between items-center">
                  <span className="text-[9px] font-bold text-white uppercase tracking-wider">Devlix Studio</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primaryGreen" />
                </div>
                
                {/* Code preview block inside iPhone */}
                <div className="bg-black/50 border border-white/5 rounded-lg p-2 flex-1 font-mono text-[7px] text-white/70 overflow-hidden flex flex-col gap-1 leading-normal">
                  <div className="text-primaryGreen flex items-center gap-1 select-none font-sans font-bold text-[8px] border-b border-white/5 pb-1">
                    <Code2 className="w-2.5 h-2.5 text-primaryGreen" /> App.tsx
                  </div>
                  <div><span className="text-purple-400">const</span> studio = () =&gt; &#123;</div>
                  <div className="pl-2"><span className="text-orange-300">const</span> speed = <span className="text-cyan-300">100</span>;</div>
                  <div className="pl-2"><span className="text-orange-300">const</span> design = <span className="text-cyan-300">'world-class'</span>;</div>
                  <div className="pl-2"><span className="text-purple-400">return</span> (</div>
                  <div className="pl-4">&lt;<span className="text-yellow-300">Craftsmanship</span></div>
                  <div className="pl-6">performance=&#123;speed&#125;</div>
                  <div className="pl-6">aesthetic=&#123;design&#125;</div>
                  <div className="pl-4">/&gt;</div>
                  <div className="pl-2">);</div>
                  <div>&#125;;</div>
                </div>

                <div className="bg-[#1f2022] p-2 rounded-lg border border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[6px] text-white/40 uppercase">Conversion Rate</span>
                    <span className="text-[10px] font-bold text-white">+18%</span>
                  </div>
                  <span className="text-xs">⚡</span>
                </div>
              </div>
            </DeviceMockup>
          </div>

          {/* Floating outcome glass cards */}
          <div className="absolute -left-12 top-6 bg-white/70 backdrop-blur-md border border-black/5 p-3 rounded-xl shadow-premium z-20 flex items-center gap-3 hidden md:flex animate-float-card-1">
            <div className="w-8 h-8 rounded-lg bg-primaryGreen/10 flex items-center justify-center text-[16px]">⚡</div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-dark/40 uppercase font-bold">Lighthouse Score</span>
              <span className="text-sm font-black text-dark">100% Performance</span>
            </div>
          </div>

          <div className="absolute -right-8 top-16 bg-white/70 backdrop-blur-md border border-black/5 p-3 rounded-xl shadow-premium z-20 flex items-center gap-3 hidden lg:flex animate-float-card-2">
            <div className="w-8 h-8 rounded-lg bg-accentGreen/10 flex items-center justify-center text-[16px]">🤝</div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-dark/40 uppercase font-bold">Client Support</span>
              <span className="text-sm font-black text-dark">24/7 Dedicated</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-laptop {
          0% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-phone {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-card-1 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(6px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-card-2 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-laptop {
          animation: float-laptop 6s ease-in-out infinite;
        }
        .animate-float-phone {
          animation: float-phone 5s ease-in-out infinite;
        }
        .animate-float-card-1 {
          animation: float-card-1 4s ease-in-out infinite;
        }
        .animate-float-card-2 {
          animation: float-card-2 4.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
export default Hero;
