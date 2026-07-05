import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Edit3, Code, ShieldCheck, Rocket, HeartHandshake } from 'lucide-react';

interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: ProcessStep[] = [
  {
    phase: 'Phase 01',
    title: 'Discovery & Product Mapping',
    description: 'We align on business goals, map user journeys, and define the core technical specifications needed to ensure immediate performance and future scalability.',
    icon: <Compass className="w-5 h-5 text-primaryGreen" />,
  },
  {
    phase: 'Phase 02',
    title: 'Research & Wireframing',
    description: 'Analyzing user behavior, mapping info-density, and structuring visual grids. We resolve layouts before writing a single line of production code.',
    icon: <Search className="w-5 h-5 text-primaryGreen" />,
  },
  {
    phase: 'Phase 03',
    title: 'High-Fidelity Editorial UI Design',
    description: 'Crafting responsive visuals, custom color tokens, modern typography rhythms, glass textures, and tailored animations. Every interaction is designed explicitly.',
    icon: <Edit3 className="w-5 h-5 text-primaryGreen" />,
  },
  {
    phase: 'Phase 04',
    title: 'Technical Custom Engineering',
    description: 'Developing with React, TypeScript, and Tailwind CSS. We use clean compilation pipelines, tree-shaking, and hardware-accelerated animations.',
    icon: <Code className="w-5 h-5 text-primaryGreen" />,
  },
  {
    phase: 'Phase 05',
    title: 'Accessibility & Speed Auditing',
    description: 'Testing against WCAG AA requirements, keyboard navigability, tab states, and styling contrast. We ensure a 100/100 Lighthouse benchmark.',
    icon: <ShieldCheck className="w-5 h-5 text-primaryGreen" />,
  },
  {
    phase: 'Phase 06',
    title: 'Launch & SEO Integration',
    description: 'Deploying to high-availability CDNs, indexing canonical links, setting up sitemaps, robots.txt, schema metadata, and Google Analytics.',
    icon: <Rocket className="w-5 h-5 text-primaryGreen" />,
  },
  {
    phase: 'Phase 07',
    title: 'Continuous Scaling & Support',
    description: 'Dedicated client support, serverless optimization reviews, load peak diagnostics, and continuous upgrades as browser standards evolve.',
    icon: <HeartHandshake className="w-5 h-5 text-primaryGreen" />,
  },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-secondaryBg relative overflow-hidden optimize-render">
      {/* Background soft glowing blur */}
      <div className="absolute left-[-15%] bottom-[-10%] w-[50vw] h-[50vw] rounded-full filter blur-[130px] opacity-[0.03] bg-accentGreen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-24 text-left">
          <span className="text-[13px] font-bold text-primaryGreen block mb-3 uppercase tracking-wider">
            Our Method & Strategy
          </span>
          <h2 className="text-[36px] md:text-[54px] font-extrabold text-dark leading-tight">
            Handcrafted from discovery to launch.
          </h2>
          <p className="text-[16px] md:text-[18px] text-dark/70 mt-4 leading-relaxed">
            We follow a structured lifecycle to eliminate guesswork. We verify each milestone, ensuring your product is delivered on time with zero bugs.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central tracking line (desktop only) */}
          <div className="absolute left-[39px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-black/5" />

          <div className="space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step central icon (serves as anchor) */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-[2px] md:-translate-x-1/2 w-[80px] flex justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center ring-4 ring-secondaryBg transition-transform hover:scale-110 duration-200">
                      {step.icon}
                    </div>
                  </div>

                  {/* Left Column Content */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                    isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'
                  }`}>
                    <div className="bg-white border border-black/5 rounded-2xl p-6 md:p-8 shadow-premium space-y-3 relative hover:shadow-premium-hover transition-shadow duration-300">
                      <span className="text-[10px] font-mono font-bold text-primaryGreen uppercase tracking-widest block">
                        {step.phase}
                      </span>
                      <h4 className="text-[18px] md:text-[20px] font-bold text-dark">
                        {step.title}
                      </h4>
                      <p className="text-[13px] md:text-[14px] text-dark/60 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column Spacer (desktop only) */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
