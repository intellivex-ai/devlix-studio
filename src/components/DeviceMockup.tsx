import React from 'react';

interface DeviceMockupProps {
  type: 'macbook' | 'phone';
  children?: React.ReactNode;
  className?: string;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({ type, children, className = '' }) => {
  if (type === 'macbook') {
    return (
      <div className={`relative select-none ${className}`}>
        {/* Laptop Screen Body */}
        <div className="relative mx-auto border-[8px] border-[#1f2022] rounded-t-2xl bg-[#0f1012] aspect-[16/10] overflow-hidden shadow-2xl">
          {/* Webpage Header inside Mockup */}
          <div className="absolute top-0 inset-x-0 h-6 bg-[#1a1b1e] border-b border-white/[0.04] flex items-center px-3 gap-1.5 z-10">
            <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
            <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
            <div className="mx-auto bg-white/[0.04] rounded px-8 py-0.5 text-[8px] text-white/30 tracking-tight flex items-center gap-1 select-none">
              <span className="opacity-40">🔒</span> devlix.studio/dashboard
            </div>
          </div>
          {/* Inside Content */}
          <div className="absolute inset-0 pt-6 bg-white overflow-hidden flex flex-col">
            {children}
          </div>
          {/* Reflection Shine overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />
        </div>
        {/* Laptop Chassis Base */}
        <div className="relative mx-auto bg-[#cdd0d5] h-3 rounded-b-xl w-[108%] -left-[4%] shadow-lg border-t border-white/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[4px] bg-[#a8acb3] rounded-b" />
        </div>
      </div>
    );
  }

  // iPhone mockup
  return (
    <div className={`relative select-none ${className}`}>
      <div className="relative mx-auto border-[10px] border-[#1d1e22] rounded-[36px] bg-[#0c0d0f] aspect-[9/19.5] w-full max-w-[280px] overflow-hidden shadow-2xl ring-1 ring-white/10">
        {/* Dynamic Island Notch */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20 flex items-center justify-between px-3">
          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-blue-900/60" />
        </div>
        
        {/* Phone Speaker Line */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-white/10 rounded-full z-20" />

        {/* Screen Content */}
        <div className="absolute inset-0 bg-white overflow-hidden">
          {children}
        </div>

        {/* Gloss glare effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] pointer-events-none" />
      </div>
    </div>
  );
};
export default DeviceMockup;
