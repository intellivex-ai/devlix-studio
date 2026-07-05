import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  tagline: string;
}

const plans: PricingPlan[] = [
  {
    name: 'Starter Package',
    price: '$4,500',
    description: 'Designed for marketing pages, digital portfolios, and interactive product prototypes.',
    features: [
      'Bespoke visual UI design (Figma)',
      '1-3 premium React.js static pages',
      'Lenis smooth scroll integration',
      'Tailwind CSS semantic structure',
      '98+ Lighthouse Performance guaranteed',
      'SEO metadata & index configuration',
      '30 days post-launch support',
    ],
    cta: 'Start Project',
    popular: false,
    tagline: 'Best for visual landing sites',
  },
  {
    name: 'Growth Suite',
    price: '$8,500',
    description: 'For active startups and growing businesses requiring dynamic web applications and databases.',
    features: [
      'Complete UX wireframing & UI design',
      'Up to 10 pages React / Next.js app',
      'Supabase serverless database & Auth',
      'Stripe checkout & subscription API',
      'Hardware-accelerated GSAP motion design',
      '100% Lighthouse Performance index',
      '24/7 Dedicated Slack channel access',
      '60 days post-launch support',
    ],
    cta: 'Start Growth Tier',
    popular: true,
    tagline: 'Our most requested option',
  },
  {
    name: 'Enterprise Custom',
    price: '$15,000+',
    description: 'For corporate systems, advanced dashboard integrations, and cross-platform native apps.',
    features: [
      'Unlimited UX design consultation & sprints',
      'Full web app + Flutter mobile app (iOS/Android)',
      'High-performance Postgres database scaling',
      'Serverless Edge caching & Cloudflare CDN',
      'Advanced rate limiting & firewall mapping',
      'Complete automated testing deployment',
      'Ongoing monthly SLA support contract',
      'Lifetime system integrity support',
    ],
    cta: 'Schedule Discovery Call',
    popular: false,
    tagline: 'For complex multi-platform apps',
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-secondaryBg relative overflow-hidden optimize-render">
      {/* Background soft glow blur */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[45vw] h-[45vw] rounded-full filter blur-[120px] opacity-[0.03] bg-primaryGreen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-[13px] font-bold text-primaryGreen block mb-3 uppercase tracking-wider">
            Transparent Pricing Scale
          </span>
          <h2 className="text-[36px] md:text-[54px] font-extrabold text-dark leading-tight">
            Plans aligned to your goals.
          </h2>
          <p className="text-[16px] md:text-[18px] text-dark/70 mt-4 leading-relaxed">
            No hidden onboarding fees or vague retainer rates. You pay exactly what we quote—with detailed weekly milestone delivery updates.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: plan.popular ? -12 : -8 }}
              className={`bg-white border rounded-3xl p-8 md:p-10 shadow-premium flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? 'border-primaryGreen ring-1 ring-primaryGreen/20 shadow-premium-hover scale-[1.02] lg:scale-[1.03] z-10'
                  : 'border-black/5'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primaryGreen text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}

              {/* Top content */}
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-dark/65 uppercase tracking-widest block font-bold">
                    {plan.tagline}
                  </span>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-dark mt-1">
                    {plan.name}
                  </h3>
                </div>

                <div className="flex items-baseline">
                  <span className="text-[36px] md:text-[48px] font-black text-dark font-display leading-none">
                    {plan.price}
                  </span>
                  {plan.name !== 'Enterprise Custom' && (
                    <span className="text-xs text-dark/65 font-semibold uppercase tracking-wider ml-2">
                      / project base
                    </span>
                  )}
                </div>

                <p className="text-[13px] md:text-[14px] text-dark/60 leading-relaxed min-h-[50px] font-normal">
                  {plan.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3.5 border-t border-black/5 pt-6">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primaryGreen/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-accentGreen" />
                      </div>
                      <span className="text-[13px] text-dark/70 font-normal leading-tight text-left">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button */}
              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full ${plan.popular ? 'btn-green' : 'btn-primary'}`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
