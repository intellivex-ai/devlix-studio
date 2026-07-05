import React from 'react';
import { motion } from 'framer-motion';

interface Metric {
  value: string;
  label: string;
  subtext: string;
}

const metrics: Metric[] = [
  {
    value: '120+',
    label: 'Custom Projects',
    subtext: 'Web and mobile solutions shipped.',
  },
  {
    value: '95%',
    label: 'Client Satisfaction',
    subtext: 'Five-star feedback and referrals.',
  },
  {
    value: '99%',
    label: 'Performance Score',
    subtext: 'Average Lighthouse scores.',
  },
  {
    value: '24/7',
    label: 'Dedicated Support',
    subtext: 'Instant response channels.',
  },
  {
    value: '15+',
    label: 'Core Technologies',
    subtext: 'Modern programming ecosystems.',
  },
];

export const Numbers: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-y border-black/[0.04] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col text-left space-y-2 group p-2 rounded-xl transition-all duration-300"
            >
              <span className="text-[36px] sm:text-[44px] font-black text-transparent bg-clip-text bg-gradient-to-r from-dark to-primaryGreen font-display leading-tight select-none">
                {metric.value}
              </span>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-dark block">
                  {metric.label}
                </span>
                <span className="text-[12px] text-dark/70 leading-relaxed block font-normal">
                  {metric.subtext}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Numbers;
