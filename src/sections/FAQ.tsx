import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What technologies do you build with?',
    answer: 'We specialize in React, Next.js, Vite, and TypeScript for web frontends, coupled with Supabase, PostgreSQL, and Node.js for scalable backend services. For mobile apps, we utilize Flutter to output native-feel iOS and Android builds from a single clean repository.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'A standard marketing or landing page takes 2 to 4 weeks. Dynamic web applications and custom databases take 4 to 8 weeks, while complex enterprise platforms and cross-platform mobile suites require 8 to 12 weeks from scope alignment to launch.',
  },
  {
    question: 'Will I own the source code and designs?',
    answer: 'Yes, completely. Once project milestones are signed off, 100% of intellectual property, Figma design files, clean GitHub repositories, database configurations, and deployment hosting accounts are fully transferred to you.',
  },
  {
    question: 'Do you work with remote clients globally?',
    answer: 'Yes. Devlix Studio operates fully remote. We coordinate with product teams and startups across North America, Europe, and Asia. We set up dedicated Slack channels to maintain transparent, daily progress updates regardless of time zones.',
  },
  {
    question: 'How do we start our collaboration?',
    answer: 'Simply send us a summary of what you are building via the form below or email us. We review your submission and schedule a 30-minute discovery call within one business day to map out timelines, deliverables, and exact pricing.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative optimize-render">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <span className="text-[13px] font-bold text-primaryGreen block mb-3 uppercase tracking-wider">
            Frequently Asked Questions
          </span>
          <h2 className="text-[36px] md:text-[54px] font-extrabold text-dark leading-tight">
            Got questions? We have answers.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="border border-black/5 rounded-2xl overflow-hidden bg-secondaryBg/40 hover:bg-secondaryBg/80 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 md:px-8 flex justify-between items-center text-left focus:outline-none focus-visible:bg-black/[0.02]"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[15px] md:text-[17px] text-dark pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-black/[0.04] shadow-sm shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-primaryGreen" />
                    ) : (
                      <Plus className="w-4 h-4 text-dark" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 md:px-8 pb-6 text-[14px] md:text-[15px] text-dark/70 leading-relaxed font-normal border-t border-black/[0.03] pt-4 text-left">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
