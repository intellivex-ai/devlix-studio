import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  stars: number;
  text: string;
  outcome: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Aminah K.',
    role: 'Operations Director',
    company: 'Taabu Foundation',
    stars: 5,
    text: 'Devlix Studio completely re-architected our portal, bringing stability under heavy traffic and enabling our coordinators to deploy updates in seconds.',
    outcome: '+340% Registrations',
    avatar: '👩‍💼',
  },
  {
    name: 'C. Celeste Tate',
    role: 'Fine Artist',
    company: 'Tate Art Showcase',
    stars: 5,
    text: 'The website feels like a physical art book. Our collectors frequently mention how beautiful and polished the scrolling transitions are.',
    outcome: '99% Page Speed Score',
    avatar: '🎨',
  },
  {
    name: 'Yeshaya S.',
    role: 'Campaign Lead',
    company: 'Civic Coalition NY',
    stars: 5,
    text: 'During our main press release, the systems handled the massive surge of traffic effortlessly. Devlix is our go-to engineering team.',
    outcome: '$2.4M Raised, 100% Uptime',
    avatar: '👨‍⚖️',
  },
  {
    name: 'Marcus V.',
    role: 'Managing Partner',
    company: 'NextGen Fintech',
    stars: 5,
    text: 'Our conversion rate grew immediately after launch. The design, development, and support processes were flawless.',
    outcome: '+24.8% Sales Growth',
    avatar: '💼',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white overflow-hidden relative border-b border-black/[0.04] optimize-render">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16 text-center">
        <span className="text-[13px] font-bold text-primaryGreen block mb-3 uppercase tracking-wider">
          Client Success Stories
        </span>
        <h2 className="text-[36px] md:text-[54px] font-extrabold text-dark leading-tight">
          What our partners say.
        </h2>
        <p className="text-[16px] md:text-[18px] text-dark/70 mt-4 max-w-xl mx-auto leading-relaxed">
          Read reviews from directors and product managers who collaborated with Devlix Studio to elevate their products.
        </p>
      </div>

      {/* Infinite scrolling track (Marquee) */}
      <div className="flex select-none overflow-hidden relative w-full mask-gradient">
        {/* Shadow overlays for smooth fade on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling rows (Run duplicate lists to make infinite loop) */}
        <div className="flex gap-6 animate-marquee py-4 whitespace-nowrap">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={idx}
              className="inline-block w-[320px] sm:w-[380px] bg-secondaryBg/50 border border-black/5 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-premium hover:bg-white hover:-translate-y-1 transition-all duration-300 relative whitespace-normal select-none"
            >
              {/* Stars */}
              <div className="flex gap-1 text-primaryGreen mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primaryGreen" />
                ))}
              </div>

              {/* Feedback text */}
              <p className="text-dark/70 text-[14px] leading-relaxed font-normal min-h-[80px]">
                "{t.text}"
              </p>

              {/* Outcome Tag */}
              <div className="mt-4 inline-block bg-primaryGreen/10 border border-primaryGreen/20 px-3 py-1 rounded-lg text-emerald-900 text-xs font-bold font-mono">
                {t.outcome}
              </div>

              {/* User Block */}
              <div className="flex items-center gap-3 border-t border-black/5 mt-6 pt-4">
                <div className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-lg select-none">
                  {t.avatar}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-dark">{t.name}</span>
                  <span className="text-[10px] text-dark/65 uppercase font-semibold">
                    {t.role}, {t.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styled inline animation for marquee scrolling */}
      <style>{`
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
};
export default Testimonials;
