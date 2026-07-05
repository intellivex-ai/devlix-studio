import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'cloud' | 'motion';
  xOffset: number; // percentage
  yOffset: number; // percentage
  speed: number;
}

const technologies: TechItem[] = [
  { name: 'React', category: 'frontend', xOffset: 20, yOffset: 15, speed: 8 },
  { name: 'Next.js', category: 'frontend', xOffset: 45, yOffset: 12, speed: 6 },
  { name: 'Flutter', category: 'mobile', xOffset: 70, yOffset: 20, speed: 7 },
  { name: 'Node.js', category: 'backend', xOffset: 12, yOffset: 35, speed: 9 },
  { name: 'Express', category: 'backend', xOffset: 32, yOffset: 40, speed: 5 },
  { name: 'Supabase', category: 'backend', xOffset: 55, yOffset: 35, speed: 7 },
  { name: 'Firebase', category: 'backend', xOffset: 85, yOffset: 38, speed: 8 },
  { name: 'PostgreSQL', category: 'backend', xOffset: 25, yOffset: 60, speed: 6 },
  { name: 'Docker', category: 'cloud', xOffset: 75, yOffset: 65, speed: 7 },
  { name: 'AWS', category: 'cloud', xOffset: 42, yOffset: 58, speed: 9 },
  { name: 'Cloudflare', category: 'cloud', xOffset: 62, yOffset: 55, speed: 5 },
  { name: 'Tailwind CSS', category: 'frontend', xOffset: 8, yOffset: 65, speed: 8 },
  { name: 'GSAP', category: 'motion', xOffset: 90, yOffset: 18, speed: 6 },
  { name: 'Framer Motion', category: 'motion', xOffset: 88, yOffset: 60, speed: 7 },
  { name: 'Electron', category: 'mobile', xOffset: 22, yOffset: 82, speed: 8 },
  { name: 'Capacitor', category: 'mobile', xOffset: 52, yOffset: 80, speed: 6 },
  { name: 'Python', category: 'backend', xOffset: 78, yOffset: 85, speed: 5 },
  { name: 'AI & LLMs', category: 'motion', xOffset: 38, yOffset: 82, speed: 8 },
  { name: 'Custom APIs', category: 'backend', xOffset: 5, yOffset: 18, speed: 7 },
];

export const TechCloud: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) - 0.5;
    const y = ((e.clientY - rect.top) / rect.height) - 0.5;
    
    // Shift pixels on parent wrapper
    mouseX.set(x * 40);
    mouseY.set(y * 40);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const getCategoryStyles = (category: TechItem['category']) => {
    switch (category) {
      case 'frontend':
        return 'border-blue-500/10 text-blue-600 bg-blue-50/50';
      case 'backend':
        return 'border-emerald-500/10 text-emerald-600 bg-emerald-50/50';
      case 'mobile':
        return 'border-purple-500/10 text-purple-600 bg-purple-50/50';
      case 'cloud':
        return 'border-orange-500/10 text-orange-600 bg-orange-50/50';
      case 'motion':
        return 'border-primaryGreen/10 text-accentGreen bg-primaryGreen/5';
    }
  };

  return (
    <section 
      id="tech" 
      className="py-24 bg-secondaryBg relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-[13px] font-bold text-primaryGreen block mb-3 uppercase tracking-wider">
            Our Technology Ecosystem
          </span>
          <h2 className="text-[36px] md:text-[54px] font-extrabold text-dark leading-tight">
            Integrated engineering.
          </h2>
          <p className="text-[16px] md:text-[18px] text-dark/70 mt-4 leading-relaxed">
            We write clean, semantic code across frontends, backend APIs, serverless databases, and cross-compiled platforms.
          </p>
        </div>

        {/* Cloud Container */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full h-[400px] md:h-[500px] bg-white border border-black/5 rounded-3xl shadow-premium overflow-hidden grid-lines select-none cursor-default"
        >
          {/* Subtle instructions in center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.25]">
            <span className="text-xs uppercase font-bold tracking-widest text-dark font-mono">
              [ Hover to Drift Badges ]
            </span>
          </div>

          {/* Mouse-reactive parent layer */}
          <motion.div 
            className="w-full h-full relative"
            style={{ x: springX, y: springY }}
          >
            {technologies.map((tech) => {
              return (
                <div
                  key={tech.name}
                  className={`absolute px-4 py-2 border rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer hover:scale-105 active:scale-95 animate-badge-float ${getCategoryStyles(
                    tech.category
                  )}`}
                  style={{
                    left: `${tech.xOffset}%`,
                    top: `${tech.yOffset}%`,
                    animationDuration: `${tech.speed}s`,
                    animationDelay: `${(tech.xOffset + tech.yOffset) * -0.1}s` // staggered starting points
                  }}
                >
                  {tech.name}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes badge-float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .animate-badge-float {
          animation-name: badge-float;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </section>
  );
};
export default TechCloud;
