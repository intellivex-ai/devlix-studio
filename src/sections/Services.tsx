import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Cpu, Smartphone, ArrowUpRight } from 'lucide-react';

interface Service {
  id: string;
  num: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  timeline: string;
  price: string;
  tech: string[];
}

const services: Service[] = [
  {
    id: 'design',
    num: '01',
    icon: <Palette className="w-6 h-6 text-primaryGreen" />,
    title: 'Product Design & UX Strategy',
    description: 'We wireframe, design, and architect user experiences that build deep trust. We blend layout science, high-fidelity visual UI, and custom branding guidelines.',
    tags: ['User Research', 'UI/UX Design', 'Branding', 'Framer Prototypes'],
    timeline: '2-4 weeks',
    price: 'Starting at $4,500',
    tech: ['Figma', 'Framer', 'Adobe CC', 'Principle'],
  },
  {
    id: 'web',
    num: '02',
    icon: <Cpu className="w-6 h-6 text-primaryGreen" />,
    title: 'High-Performance Web Engineering',
    description: 'Bespoke web applications built for speed, SEO, and extreme conversion. We deploy code that scores 100 on Lighthouse, using modern static and dynamic frameworks.',
    tags: ['Web Apps', 'Interactive Sites', 'Headless CMS', 'SEO Systems'],
    timeline: '4-8 weeks',
    price: 'Starting at $8,000',
    tech: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind', 'GSAP', 'Supabase'],
  },
  {
    id: 'mobile',
    num: '03',
    icon: <Smartphone className="w-6 h-6 text-primaryGreen" />,
    title: 'Cross-Platform Mobile Apps',
    description: 'Native-feel mobile apps compiled for iOS and Android from a single optimized codebase. Seamless animations, offline syncing capabilities, and secure logic.',
    tags: ['iOS App', 'Android App', 'Offline First', 'Push Notifications'],
    timeline: '6-10 weeks',
    price: 'Starting at $12,000',
    tech: ['Flutter', 'React Native', 'Capacitor', 'Firebase', 'PostgreSQL', 'App Store Deploy'],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondaryBg relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute right-[-10%] top-[-10%] w-[40vw] h-[40vw] rounded-full filter blur-[120px] opacity-[0.03] bg-primaryGreen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-[13px] font-bold text-primaryGreen block mb-3 uppercase tracking-wider">
            Our Services & Expertise
          </span>
          <h2 className="text-[36px] md:text-[54px] font-extrabold text-dark leading-tight">
            We build the systems behind digital growth.
          </h2>
          <p className="text-[16px] md:text-[18px] text-dark/70 mt-4 max-w-xl leading-relaxed">
            From editorial design guidelines to robust backend integrations, we deliver pixel-perfect executions with absolute transparency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white border border-black/5 rounded-2xl p-8 md:p-10 shadow-premium flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Row */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-xl bg-primaryGreen/10 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <span className="text-sm font-bold text-dark/20 uppercase tracking-widest font-mono">
                    {service.num}
                  </span>
                </div>

                <h3 className="text-[22px] md:text-[24px] font-bold text-dark group-hover:text-primaryGreen transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-[14px] md:text-[15px] text-dark/60 leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium bg-secondaryBg text-dark/70 rounded-full border border-black/[0.03]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom row / Metrics */}
              <div className="border-t border-black/5 mt-8 pt-6 space-y-4">
                <div className="flex justify-between items-center text-xs font-semibold text-dark/50">
                  <span>Timeline: <strong className="text-dark">{service.timeline}</strong></span>
                  <span>{service.price}</span>
                </div>

                {/* Tech Badge Track */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {service.tech.map(techItem => (
                    <span
                      key={techItem}
                      className="text-[9px] font-mono uppercase bg-black/5 text-dark/60 px-2 py-0.5 rounded border border-black/[0.02]"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-dark group-hover:text-primaryGreen pt-2 transition-colors duration-300 cursor-pointer"
                >
                  Request Consultation
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
