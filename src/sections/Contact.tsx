import React, { useState } from 'react';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Zod Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  organization: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormFields = {
  name: string;
  email: string;
  organization: string;
  message: string;
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormFields>({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<FormFields>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on type
    if (formErrors[name as keyof FormFields]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    
    // Parse using Zod
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const errors: Partial<FormFields> = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0]) {
          errors[err.path[0] as keyof FormFields] = err.message;
        }
      });
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="bg-secondaryBg/30 border border-black/5 rounded-[32px] p-8 md:p-16 lg:p-20 shadow-premium grid grid-cols-1 lg:grid-cols-12 gap-16 items-start overflow-hidden relative">
          
          {/* Background decoration */}
          <div className="absolute right-[-10%] top-[-10%] w-[30vw] h-[30vw] rounded-full filter blur-[100px] opacity-[0.02] bg-primaryGreen pointer-events-none" />

          {/* Left Column - Details */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primaryGreen/10 border border-primaryGreen/20 text-accentGreen text-[11px] font-bold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primaryGreen animate-pulse" /> Available for Projects
              </div>
              <h2 className="text-[36px] md:text-[54px] font-extrabold text-dark leading-tight">
                Tell us what you're building.
              </h2>
              <p className="text-[15px] md:text-[16px] text-dark/60 mt-4 leading-relaxed font-normal">
                Have a project scope, timeline, or just an idea? Drop us a line and let's craft a world-class digital solution.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-black/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-black/[0.04] shadow-sm flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primaryGreen" />
                </div>
                <div>
                  <span className="text-[10px] text-dark/40 font-bold uppercase tracking-widest block">Email inquiry</span>
                  <a href="mailto:hello@devlix.studio" className="text-sm font-bold text-dark hover:text-primaryGreen transition-colors">
                    hello@devlix.studio
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-black/[0.04] shadow-sm flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primaryGreen" />
                </div>
                <div>
                  <span className="text-[10px] text-dark/40 font-bold uppercase tracking-widest block">WhatsApp Business</span>
                  <a href="tel:+14347738388" className="text-sm font-bold text-dark hover:text-primaryGreen transition-colors">
                    +1 (434) 773-8388
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-black/[0.04] shadow-sm flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primaryGreen" />
                </div>
                <div>
                  <span className="text-[10px] text-dark/40 font-bold uppercase tracking-widest block">HQ Office</span>
                  <span className="text-sm font-bold text-dark">
                    London / San Francisco (Remote)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-10 border border-black/5 rounded-2xl shadow-sm text-left relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-bold text-dark/50 uppercase tracking-widest">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full bg-secondaryBg/40 border rounded-xl p-4 text-sm text-dark placeholder-dark/30 focus:bg-white focus:outline-none transition-all ${
                          formErrors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-black/5 focus:ring-1 focus:ring-primaryGreen/50 focus:border-primaryGreen'
                        }`}
                        placeholder="John Doe"
                      />
                      {formErrors.name && (
                        <span className="text-[10px] text-red-500 font-semibold">{formErrors.name}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-bold text-dark/50 uppercase tracking-widest">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-secondaryBg/40 border rounded-xl p-4 text-sm text-dark placeholder-dark/30 focus:bg-white focus:outline-none transition-all ${
                          formErrors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-black/5 focus:ring-1 focus:ring-primaryGreen/50 focus:border-primaryGreen'
                        }`}
                        placeholder="john@example.com"
                      />
                      {formErrors.email && (
                        <span className="text-[10px] text-red-500 font-semibold">{formErrors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Organization */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-dark/50 uppercase tracking-widest">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full bg-secondaryBg/40 border border-black/5 rounded-xl p-4 text-sm text-dark placeholder-dark/30 focus:bg-white focus:ring-1 focus:ring-primaryGreen/50 focus:border-primaryGreen focus:outline-none transition-all"
                      placeholder="NextGen Inc."
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-dark/50 uppercase tracking-widest">
                      Project Goals & Scope *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full bg-secondaryBg/40 border rounded-xl p-4 text-sm text-dark placeholder-dark/30 focus:bg-white focus:outline-none transition-all ${
                        formErrors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-black/5 focus:ring-1 focus:ring-primaryGreen/50 focus:border-primaryGreen'
                      }`}
                      placeholder="Describe what you want to build (timeline, budget, features)..."
                    />
                    {formErrors.message && (
                      <span className="text-[10px] text-red-500 font-semibold">{formErrors.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primaryGreen hover:bg-accentGreen text-white font-bold text-[12px] uppercase tracking-wider py-4 rounded-full border border-primaryGreen hover:border-accentGreen transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Send Message'}
                    {!isSubmitting && <Send className="w-4 h-4" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-primaryGreen/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-primaryGreen" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">Thank you!</h3>
                  <p className="text-sm text-dark/60 max-w-sm">
                    Your inquiry has been successfully received. We will analyze your scope and get back to you within 12 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 text-xs font-bold uppercase tracking-wider text-primaryGreen flex items-center gap-1 hover:text-accentGreen transition-colors"
                  >
                    Send another message <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
