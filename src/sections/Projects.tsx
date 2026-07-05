import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, LayoutGrid, Smartphone } from 'lucide-react';
import DeviceMockup from '../components/DeviceMockup';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  timeline: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  results: string;
  tags: string[];
  tech: string[];
  review: { text: string; author: string; role: string };
  links: { demo?: string; github?: string };
  mockup: {
    type: 'macbook' | 'phone';
    title: string;
    description: string;
    chartData: number[];
  };
}

const projects: CaseStudy[] = [
  {
    id: 'taabu',
    title: 'Taabu Club',
    category: 'Global Humanitarian Portal',
    client: 'Taabu Foundation',
    timeline: '6 weeks',
    metrics: [
      { label: 'Supporter Signups', value: '+340%' },
      { label: 'Global Load Time', value: '240ms' },
      { label: 'Conversion rate', value: '4.8%' },
    ],
    challenge: 'A global aid organization with poor mobile latency in remote regions, resulting in high bounce rates and low volunteer signups.',
    solution: 'Designed and engineered a headless React platform utilizing Supabase Edge functions and automated localized caching strategies to provide offline support and lightning-fast loading.',
    results: 'Registered thousands of global volunteers in the first week. Decreased load time in remote regions by 82%, driving registrations up by 340%.',
    tags: ['Web Design', 'Headless CMS', 'Edge Caching'],
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Cloudflare Edge'],
    review: {
      text: "Devlix Studio completely re-architected our portal, bringing stability under heavy traffic and enabling our coordinators to deploy updates in seconds.",
      author: "Aminah K.",
      role: "Operations Director"
    },
    links: { demo: '#' },
    mockup: {
      type: 'macbook',
      title: 'Taabu Portal',
      description: 'Active Aid Delivery',
      chartData: [40, 55, 60, 85, 75, 95]
    }
  },
  {
    id: 'celeste',
    title: 'Christian Celeste Tate',
    category: 'Art & Gallery Showcase',
    client: 'Celeste Tate Studio',
    timeline: '4 weeks',
    metrics: [
      { label: 'Bounce Rate', value: '-65%' },
      { label: 'Visual FPS', value: '60 FPS' },
      { label: 'Inquiries', value: '+40%' },
    ],
    challenge: 'Translating a high-end physical contemporary art portfolio into a tactile, immersive web experience without slowing down media-heavy pages.',
    solution: 'Created an aesthetic, minimal portfolio featuring Lenis smooth scrolling, GSAP-driven image mask reveals, web shaders, and Next.js image loading pipelines.',
    results: 'Created a cinematic, award-worthy portfolio that loads instantly. Secured 40% growth in online inquiry submissions within 30 days of launch.',
    tags: ['Motion Design', 'Immersive UX', 'Asset Optimization'],
    tech: ['React', 'GSAP', 'Lenis Scroll', 'Tailwind CSS', 'Vercel CDN'],
    review: {
      text: "The website feels like a physical art book. Our collectors frequently mention how beautiful and polished the scrolling transitions are.",
      author: "C. Tate",
      role: "Fine Artist"
    },
    links: { demo: '#' },
    mockup: {
      type: 'phone',
      title: 'Gallery App',
      description: 'Curated Art Feed',
      chartData: [30, 45, 35, 70, 60, 80]
    }
  },
  {
    id: 'tax-rich',
    title: 'Tax the Rich NY',
    category: 'Campaign Infrastructure',
    client: 'Civic Coalition NY',
    timeline: '5 weeks',
    metrics: [
      { label: 'Uptime Peak Load', value: '100%' },
      { label: 'Small Donations', value: '$2.4M+' },
      { label: 'Page Speed Index', value: '98/100' },
    ],
    challenge: 'A high-impact advocacy campaign needing a landing platform capable of handling huge concurrent peaks of traffic during television runs.',
    solution: 'Deployed a lightweight, serverless backend infrastructure utilizing Stripe integrations, secure rate limiters, and highly responsive grid designs.',
    results: 'Maintained 100% server uptime through peaks of 15,000 requests per minute while successfully collecting over $2.4M in grassroot contributions.',
    tags: ['Serverless Architecture', 'Stripe Processing', 'Civic Tech'],
    tech: ['React', 'Supabase', 'Node.js', 'Stripe API', 'Docker', 'AWS'],
    review: {
      text: "During our main press release, the systems handled the massive surge of traffic effortlessly. Devlix is our go-to engineering team.",
      author: "Yeshaya S.",
      role: "Campaign Director"
    },
    links: { demo: '#', github: '#' },
    mockup: {
      type: 'macbook',
      title: 'Donation Stats',
      description: 'Grassroot Tracking',
      chartData: [50, 40, 70, 60, 90, 100]
    }
  }
];

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('taabu');
  const [activeSubTab, setActiveSubTab] = useState<'challenge' | 'solution' | 'results'>('challenge');

  const activeProject = projects.find(p => p.id === activeTab) || projects[0];

  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <span className="text-[13px] font-bold text-primaryGreen block mb-3 uppercase tracking-wider">
              Featured Case Studies
            </span>
            <h2 className="text-[36px] md:text-[54px] font-extrabold text-dark leading-tight">
              Craftsmanship in action.
            </h2>
            <p className="text-[16px] md:text-[18px] text-dark/70 mt-4 leading-relaxed">
              We design and construct digital products that work flawlessly under heavy loads. See our detailed case studies below.
            </p>
          </div>
          
          {/* Selectors for Case Studies */}
          <div className="flex gap-2 bg-secondaryBg p-1.5 rounded-full border border-black/[0.04]">
            {projects.map(p => (
              <button
                key={p.id}
                onClick={() => {
                  setActiveTab(p.id);
                  setActiveSubTab('challenge');
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === p.id
                    ? 'bg-white text-dark shadow-sm border border-black/5'
                    : 'text-dark/55 hover:text-dark'
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Detail Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div>
                <span className="text-xs font-bold text-primaryGreen uppercase tracking-widest block mb-2">
                  {activeProject.category}
                </span>
                <h3 className="text-[32px] md:text-[44px] font-extrabold text-dark leading-tight">
                  {activeProject.title}
                </h3>
              </div>

              {/* Grid Metrics */}
              <div className="grid grid-cols-3 gap-4 bg-secondaryBg p-5 rounded-2xl border border-black/[0.04] shadow-sm">
                {activeProject.metrics.map(m => (
                  <div key={m.label} className="flex flex-col">
                    <span className="text-[10px] text-dark/40 uppercase font-semibold">{m.label}</span>
                    <span className="text-[20px] md:text-[24px] font-extrabold text-primaryGreen mt-1">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Challenge / Solution / Results Accordion Tab */}
              <div className="space-y-4">
                <div className="flex gap-4 border-b border-black/[0.06] pb-2">
                  {(['challenge', 'solution', 'results'] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveSubTab(tab)}
                      className={`text-xs font-bold uppercase tracking-wider pb-2 relative transition-all ${
                        activeSubTab === tab ? 'text-dark font-extrabold' : 'text-dark/40 hover:text-dark'
                      }`}
                    >
                      {tab}
                      {activeSubTab === tab && (
                        <motion.div
                          layoutId="subTabIndicator"
                          className="absolute bottom-[-9px] inset-x-0 h-[2px] bg-primaryGreen"
                        />
                      )}
                    </button>
                  ))}
                </div>

                <div className="pt-2 min-h-[100px]">
                  <p className="text-[15px] text-dark/70 leading-relaxed font-normal">
                    {activeSubTab === 'challenge' && activeProject.challenge}
                    {activeSubTab === 'solution' && activeProject.solution}
                    {activeSubTab === 'results' && activeProject.results}
                  </p>
                </div>
              </div>

              {/* Technologies Badge Group */}
              <div className="space-y-2">
                <span className="text-[11px] text-dark/40 uppercase font-bold tracking-wider">Tech Stack Deployment</span>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-secondaryBg text-dark border border-black/5 text-xs font-semibold rounded-lg font-mono uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Review Box */}
              <div className="border-l-2 border-primaryGreen pl-6 py-2 bg-secondaryBg/40 pr-4 rounded-r-xl">
                <p className="italic text-dark/70 text-[14px] leading-relaxed">
                  "{activeProject.review.text}"
                </p>
                <div className="mt-3">
                  <strong className="text-xs text-dark block">{activeProject.review.author}</strong>
                  <span className="text-[10px] uppercase text-dark/40 tracking-wider font-semibold">{activeProject.review.role}</span>
                </div>
              </div>

              {/* Project Action Links */}
              <div className="flex gap-4 pt-4">
                {activeProject.links.demo && (
                  <button className="bg-dark text-white hover:bg-primaryGreen px-6 py-3 rounded-full font-bold text-[12px] uppercase tracking-wider flex items-center gap-2 border border-dark hover:border-primaryGreen transition-all active:scale-95 shadow-sm">
                    View Live Work
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                )}
                {activeProject.links.github && (
                  <button className="bg-white text-dark hover:bg-secondaryBg px-6 py-3 rounded-full font-bold text-[12px] uppercase tracking-wider flex items-center gap-2 border border-black/10 hover:border-black/20 transition-all active:scale-95 shadow-sm">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    Source Code
                  </button>
                )}
              </div>
            </div>

            {/* Right Mockup Display Column */}
            <div className="lg:col-span-6 flex justify-center items-center h-full relative lg:mt-8 select-none">
              <div className="w-full max-w-[450px]">
                {activeProject.mockup.type === 'macbook' ? (
                  <DeviceMockup type="macbook">
                    <div className="p-4 bg-secondaryBg flex-1 flex flex-col justify-between text-dark">
                      <div className="flex justify-between items-center border-b border-black/5 pb-2">
                        <span className="text-[8px] font-bold uppercase tracking-wider text-dark/50 flex items-center gap-1">
                          <LayoutGrid className="w-2.5 h-2.5 text-primaryGreen" /> {activeProject.mockup.title}
                        </span>
                        <span className="text-[8px] bg-primaryGreen/10 text-accentGreen px-2 py-0.5 rounded-full font-bold">
                          {activeProject.mockup.description}
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col justify-end mt-4">
                        <div className="flex items-end gap-2 h-20 pt-2">
                          {activeProject.mockup.chartData.map((val, idx) => (
                            <motion.div
                              key={idx}
                              className="bg-accentGreen rounded-t-sm flex-1"
                              initial={{ height: 0 }}
                              animate={{ height: `${val}%` }}
                              transition={{ delay: 0.1 * idx, duration: 0.5 }}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between text-[6px] text-dark/30 uppercase mt-2 pt-2 border-t border-black/5 font-semibold">
                          <span>Jan</span>
                          <span>Feb</span>
                          <span>Mar</span>
                          <span>Apr</span>
                          <span>May</span>
                          <span>Jun</span>
                        </div>
                      </div>
                    </div>
                  </DeviceMockup>
                ) : (
                  <DeviceMockup type="phone">
                    <div className="p-4 bg-[#0a0b0d] h-full flex flex-col justify-between text-white">
                      <div className="mt-8 flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-[8px] font-bold text-white/50 uppercase tracking-widest flex items-center gap-1">
                          <Smartphone className="w-2.5 h-2.5 text-primaryGreen" /> {activeProject.mockup.title}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                      </div>
                      <div className="flex-grow flex flex-col justify-center items-center py-6">
                        <div className="w-16 h-16 rounded-full bg-primaryGreen/10 border border-primaryGreen/20 flex items-center justify-center text-2xl mb-4 shadow-sm animate-pulse">🎨</div>
                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{activeProject.mockup.description}</span>
                        <span className="text-xl font-bold mt-2">60 FPS Native</span>
                      </div>
                      <div className="bg-[#151619] p-3 rounded-xl border border-white/5 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[7px] text-white/40 uppercase font-semibold">Render Pipeline</span>
                          <span className="text-[8px] text-primaryGreen font-mono font-bold">100% OK</span>
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primaryGreen w-[95%]" />
                        </div>
                      </div>
                    </div>
                  </DeviceMockup>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
export default Projects;
