import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 relative overflow-hidden select-none">
      {/* Dynamic line overlay */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-white/[0.04]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-4 text-left space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primaryGreen border border-white/10 flex items-center justify-center">
                <span className="font-display font-extrabold text-white text-[16px]">D</span>
              </div>
              <span className="font-display font-bold text-[19px] tracking-tight text-white">
                Devlix<span className="text-primaryGreen">.</span>
              </span>
            </div>
            
            <p className="text-[14px] text-white/50 leading-relaxed font-normal max-w-sm">
              We design and construct digital products that work flawlessly under heavy loads. Elevate your startup experience.
            </p>

            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-white/70">
              <span className="w-2 h-2 rounded-full bg-primaryGreen animate-pulse" /> All Systems Operational
            </div>
          </div>

          {/* Quick Columns */}
          <div className="md:col-span-2 text-left space-y-4">
            <h5 className="text-[11px] font-bold uppercase tracking-widest text-primaryGreen font-mono">
              Services
            </h5>
            <ul className="space-y-2.5 text-[13px] text-white/50">
              <li><a href="#services" className="hover:text-primaryGreen transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-primaryGreen transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-primaryGreen transition-colors">Mobile Platforms</a></li>
              <li><a href="#services" className="hover:text-primaryGreen transition-colors">System Auditing</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 text-left space-y-4">
            <h5 className="text-[11px] font-bold uppercase tracking-widest text-primaryGreen font-mono">
              Resources
            </h5>
            <ul className="space-y-2.5 text-[13px] text-white/50">
              <li><a href="#projects" className="hover:text-primaryGreen transition-colors">Case Studies</a></li>
              <li><a href="#why-us" className="hover:text-primaryGreen transition-colors">Why Devlix</a></li>
              <li><a href="#pricing" className="hover:text-primaryGreen transition-colors">Pricing Scale</a></li>
              <li><a href="#faq" className="hover:text-primaryGreen transition-colors">FAQ Index</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 text-left space-y-4">
            <h5 className="text-[11px] font-bold uppercase tracking-widest text-primaryGreen font-mono">
              Join Our Newsletter
            </h5>
            <p className="text-[12px] text-white/40 leading-relaxed font-normal">
              Get weekly insights regarding UI design trends and React/Next.js speed optimization.
            </p>
            <form 
              onSubmit={(e) => { e.preventDefault(); alert("Subscribed successfully!"); }}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                placeholder="email@example.com"
                className="bg-white/[0.04] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/20 focus:bg-white/[0.08] focus:outline-none focus:border-primaryGreen flex-1"
              />
              <button
                type="submit"
                className="bg-primaryGreen hover:bg-accentGreen text-white px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-white/30 uppercase tracking-[0.2em] font-mono">
            © {new Date().getFullYear()} DEVLIX STUDIO. ALL RIGHTS RESERVED.
          </p>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 bg-white/[0.02] border border-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-all text-white/60 hover:text-white" aria-label="Twitter">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white/[0.02] border border-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-all text-white/60 hover:text-white" aria-label="GitHub">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white/[0.02] border border-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-all text-white/60 hover:text-white" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center hover:bg-primaryGreen hover:border-primaryGreen text-white/60 hover:text-white hover:-translate-y-0.5 transition-all shadow-sm"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
