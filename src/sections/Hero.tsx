import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Image as ImageIcon, Wallet, Globe } from 'lucide-react';
import DeviceMockup from '../components/DeviceMockup';
import Magnetic from '../components/Magnetic';

type PreviewProject = 'taabu' | 'celeste' | 'taxrich';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [activePreview, setActivePreview] = useState<PreviewProject>('taabu');

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / (width / 2); // ranges from -1 to 1
    const y = (clientY - (top + height / 2)) / (height / 2); // ranges from -1 to 1
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 120 },
    },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Editorial Copy */}
        <motion.div
          className="lg:col-span-6 text-left space-y-8"
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
            className="text-[44px] sm:text-[60px] md:text-[72px] leading-[1.05] font-black text-dark font-display"
          >
            Design That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGreen to-accentGreen">Converts</span>.<br />
            Engineering That Scales.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[17px] sm:text-[20px] text-dark/75 max-w-xl leading-relaxed font-normal"
          >
            We help fast-growing startups and civic organizations launch premium web systems. No templates, no AI placeholders—built for under 1-second load speeds and conversion.
          </motion.p>

          {/* Interactive Project Showcase Selectors */}
          <motion.div 
            variants={itemVariants} 
            className="space-y-3 pt-2"
          >
            <span className="text-[10px] font-bold text-dark/40 uppercase tracking-widest block font-mono">
              [ Click to Preview Our Work ]
            </span>
            <div className="flex flex-wrap gap-2 p-1 bg-secondaryBg/80 rounded-2xl border border-black/[0.04] w-fit">
              <button
                onClick={() => setActivePreview('taabu')}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activePreview === 'taabu'
                    ? 'bg-white text-dark shadow-sm border border-black/5'
                    : 'text-dark/50 hover:text-dark'
                }`}
              >
                Taabu Portal
              </button>
              <button
                onClick={() => setActivePreview('celeste')}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activePreview === 'celeste'
                    ? 'bg-white text-dark shadow-sm border border-black/5'
                    : 'text-dark/50 hover:text-dark'
                }`}
              >
                Gallery App
              </button>
              <button
                onClick={() => setActivePreview('taxrich')}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activePreview === 'taxrich'
                    ? 'bg-white text-dark shadow-sm border border-black/5'
                    : 'text-dark/50 hover:text-dark'
                }`}
              >
                Civic Donation
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
            <Magnetic>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-green shadow-md"
              >
                Start Your Project
                <ArrowRight className="w-4.5 h-4.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary"
              >
                See Case Studies
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right Interactive Mockups & Mouse Parallax */}
        <div className="lg:col-span-6 relative flex justify-center items-center mt-12 lg:mt-0 select-none min-h-[480px]">
          
          {/* Laptop Mockup with Parallax */}
          <div 
            className="w-full max-w-[480px] lg:max-w-none relative z-10 transition-transform duration-300 ease-out"
            style={{ 
              transform: `translate3d(${mouseOffset.x * 20}px, ${mouseOffset.y * 20}px, 0)`,
              willChange: 'transform'
            }}
          >
            <DeviceMockup type="macbook">
              {activePreview === 'taabu' && (
                <div className="p-4 bg-secondaryBg flex-1 flex flex-col justify-between text-dark text-left">
                  <div className="flex justify-between items-center border-b border-black/5 pb-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-dark/60 flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5 text-primaryGreen" /> Taabu Humanitarian Portal
                    </span>
                    <span className="text-[8px] bg-primaryGreen/10 text-accentGreen px-2 py-0.5 rounded-full font-bold">
                      Edge Active
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="bg-white p-2 rounded-lg border border-black/[0.04] shadow-sm flex flex-col">
                      <span className="text-[7px] text-dark/50 uppercase font-semibold">Local Latency</span>
                      <span className="text-xs font-black text-dark mt-0.5">24ms</span>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-black/[0.04] shadow-sm flex flex-col">
                      <span className="text-[7px] text-dark/50 uppercase font-semibold">Global Load</span>
                      <span className="text-xs font-black text-accentGreen mt-0.5">240ms</span>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-black/[0.04] shadow-sm flex flex-col">
                      <span className="text-[7px] text-dark/50 uppercase font-semibold">Active Aid</span>
                      <span className="text-xs font-black text-dark mt-0.5">82% Rec.</span>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-black/[0.04] shadow-sm flex-1 flex flex-col justify-between mt-2">
                    <span className="text-[7px] text-dark/50 uppercase font-bold">Volunteer Signup Acceleration</span>
                    <div className="flex items-end gap-1.5 h-16 pt-2">
                      {[40, 50, 45, 75, 60, 85, 95].map((val, idx) => (
                        <div
                          key={idx}
                          style={{ height: `${val}%` }}
                          className="bg-primaryGreen rounded-t-sm flex-1"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activePreview === 'celeste' && (
                <div className="bg-[#FAF9F6] flex-1 flex flex-col justify-between text-left p-4 font-serif text-dark border border-[#f0eee4]">
                  <div className="flex justify-between items-center border-b border-black/5 pb-2 font-sans">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-dark/60 flex items-center gap-1">
                      <ImageIcon className="w-3.5 h-3.5 text-primaryGreen" /> Celeste Contemporary Gallery
                    </span>
                    <span className="text-[8px] border border-dark/20 text-dark px-2 py-0.5 rounded-full font-bold">
                      Tactile UX
                    </span>
                  </div>
                  <div className="flex-grow flex flex-col justify-center items-center py-4 text-center">
                    <span className="text-[8px] uppercase tracking-widest text-dark/40 font-sans block mb-1">Contemporary Fine Art</span>
                    <h4 className="text-lg italic font-normal text-dark tracking-tight leading-tight">"Shape of Light & Shadow"</h4>
                    <span className="text-[8px] font-sans text-dark/50 mt-2 px-3 py-1 bg-black/5 rounded-full">Exhibition Room 03</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-black/5 pt-2 text-[7px] font-sans text-dark/50 font-semibold">
                    <span>Scroll depth: 100%</span>
                    <span className="text-accentGreen">FPS Index: 60Hz Smooth</span>
                  </div>
                </div>
              )}

              {activePreview === 'taxrich' && (
                <div className="p-4 bg-secondaryBg flex-1 flex flex-col justify-between text-dark text-left">
                  <div className="flex justify-between items-center border-b border-black/5 pb-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-dark/60 flex items-center gap-1">
                      <Wallet className="w-3.5 h-3.5 text-primaryGreen" /> Tax the Rich Campaign Infrastructure
                    </span>
                    <span className="text-[8px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">
                      15k Req/Min
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-black/[0.04] shadow-sm mt-3 flex-1 flex flex-col justify-center">
                    <span className="text-[8px] text-dark/50 uppercase font-bold">Live Contributions Progress</span>
                    <div className="text-xl font-black text-dark mt-1">$2,410,250 <span className="text-xs text-dark/40 font-normal">raised</span></div>
                    <div className="w-full bg-black/5 h-2 rounded-full mt-2.5 overflow-hidden">
                      <div className="h-full bg-primaryGreen rounded-full" style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div className="flex justify-between text-[7px] text-dark/50 mt-2 font-mono">
                    <span>Uptime Peak: 100%</span>
                    <span>Stripe Node: Connected</span>
                  </div>
                </div>
              )}
            </DeviceMockup>
          </div>

          {/* Floating Phone Mockup with Parallax (opposite translate direction) */}
          <div 
            className="absolute -right-2 -bottom-10 w-[140px] sm:w-[170px] z-20 transition-transform duration-300 ease-out"
            style={{ 
              transform: `translate3d(${mouseOffset.x * -30}px, ${mouseOffset.y * -30}px, 0)`,
              willChange: 'transform'
            }}
          >
            <DeviceMockup type="phone">
              {activePreview === 'taabu' && (
                <div className="p-3 flex flex-col h-full gap-3 text-left bg-[#0f1012] text-white">
                  <div className="mt-8 flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-[8px] font-bold text-white/50 uppercase tracking-wider">Taabu Edge Mobile</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primaryGreen" />
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-lg p-2.5 flex-1 font-mono text-[7px] text-white/70 overflow-hidden flex flex-col gap-1.5 leading-normal">
                    <div className="text-primaryGreen font-sans font-bold text-[8px]">
                      🚀 Local DB Status
                    </div>
                    <div>&gt; Syncing remote edge...</div>
                    <div>&gt; 2.4k aid logs cached.</div>
                    <div>&gt; Mode: Offline-First</div>
                    <div className="text-accentGreen">&gt; Local Latency: 0ms</div>
                  </div>
                </div>
              )}

              {activePreview === 'celeste' && (
                <div className="p-3 flex flex-col h-full gap-3 text-left bg-[#FAF9F6] text-dark">
                  <div className="mt-8 flex justify-between items-center border-b border-black/5 pb-2">
                    <span className="text-[8px] font-bold text-dark/60 uppercase tracking-widest font-sans">Artwork Feed</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-dark" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-2 border-b border-black/[0.04]">
                    <div className="bg-black/5 aspect-[4/3] rounded-lg flex items-center justify-center text-lg">🖼️</div>
                    <div className="mt-2">
                      <strong className="text-[9px] block leading-tight font-serif italic text-dark">Abstract Frame A</strong>
                      <span className="text-[7px] text-dark/50 uppercase font-sans font-semibold">2026 Collection</span>
                    </div>
                  </div>
                </div>
              )}

              {activePreview === 'taxrich' && (
                <div className="p-3 flex flex-col h-full justify-between bg-[#0b0c0e] text-white text-left">
                  <div className="mt-8 flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-[8px] font-bold text-white/40 uppercase">Donation Flow</span>
                    <span className="text-xs">⚡</span>
                  </div>
                  <div className="flex-grow flex flex-col justify-center gap-2 py-4">
                    <div className="bg-white/5 p-2 rounded-lg border border-white/5 text-center">
                      <span className="text-[6px] text-white/40 uppercase font-bold block">Support Campaign</span>
                      <span className="text-sm font-black text-white mt-0.5">$50.00</span>
                    </div>
                    <button className="bg-primaryGreen text-dark text-[9px] font-black uppercase tracking-wider py-2 rounded-lg text-center select-none cursor-pointer">
                      Donate Instantly
                    </button>
                  </div>
                </div>
              )}
            </DeviceMockup>
          </div>

          {/* Floating outcome glass cards with Parallax */}
          <div 
            className="absolute -left-12 top-6 bg-white/80 backdrop-blur-md border border-black/5 p-3 rounded-xl shadow-premium z-20 flex items-center gap-3 hidden md:flex transition-transform duration-300 ease-out"
            style={{ 
              transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 12}px, 0)`,
              willChange: 'transform'
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-primaryGreen/10 flex items-center justify-center text-[16px]">⚡</div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-dark/50 uppercase font-bold">Load Speed</span>
              <span className="text-sm font-black text-dark">Under 1.0s Standard</span>
            </div>
          </div>

          <div 
            className="absolute -right-8 top-16 bg-white/80 backdrop-blur-md border border-black/5 p-3 rounded-xl shadow-premium z-20 flex items-center gap-3 hidden lg:flex transition-transform duration-300 ease-out"
            style={{ 
              transform: `translate3d(${mouseOffset.x * -20}px, ${mouseOffset.y * -20}px, 0)`,
              willChange: 'transform'
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-accentGreen/10 flex items-center justify-center text-[16px]">🎯</div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-dark/50 uppercase font-bold">Outcomes</span>
              <span className="text-sm font-black text-dark">Conversion-Focused UI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Client Logos scrolling horizontal track */}
      <div className="border-t border-black/[0.04] pt-12 mt-20 z-10 relative">
        <span className="text-[11px] font-bold text-dark/50 uppercase tracking-widest text-center block mb-8">
          Trusted by growing brands and civic coalitions
        </span>
        <div className="w-full select-none overflow-hidden relative mask-gradient">
          <div className="flex gap-16 animate-marquee-logos py-2 whitespace-nowrap">
            {[1, 2].map((loop) => (
              <div key={loop} className="flex gap-16 items-center shrink-0 min-w-full justify-around">
                {/* Logo 1: Taabu */}
                <div className="flex items-center gap-2 text-dark/30 hover:text-primaryGreen transition-colors duration-300">
                  <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span className="font-display font-black text-sm uppercase tracking-wider">Taabu Club</span>
                </div>
                {/* Logo 2: Celeste Tate */}
                <div className="flex items-center gap-2 text-dark/30 hover:text-primaryGreen transition-colors duration-300">
                  <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8l4 4-4 4-4-4z" />
                  </svg>
                  <span className="font-display font-bold text-sm tracking-widest uppercase">Celeste Tate</span>
                </div>
                {/* Logo 3: Civic Coalition */}
                <div className="flex items-center gap-2 text-dark/30 hover:text-primaryGreen transition-colors duration-300">
                  <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span className="font-display font-bold text-sm tracking-wide uppercase">Civic NY</span>
                </div>
                {/* Logo 4: NextGen Fintech */}
                <div className="flex items-center gap-2 text-dark/30 hover:text-primaryGreen transition-colors duration-300">
                  <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                  </svg>
                  <span className="font-display font-black text-sm uppercase tracking-tight">NextGen</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .animate-marquee-logos {
          display: flex;
          animation: marquee-logos 28s linear infinite;
        }
        .animate-marquee-logos:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-logos {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
export default Hero;
