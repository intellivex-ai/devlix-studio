import React from 'react';

export const AnimatedMesh: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 -z-20 overflow-hidden bg-background pointer-events-none"
      style={{
        backgroundImage: `
          radial-gradient(circle at 15% 15%, rgba(34, 197, 94, 0.04) 0%, transparent 50%),
          radial-gradient(circle at 85% 85%, rgba(22, 163, 74, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(248, 249, 250, 0.9) 0%, transparent 100%)
        `
      }}
    >
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-lines opacity-[0.8]" />

      {/* Noise overlay texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.5]" />
    </div>
  );
};
export default AnimatedMesh;
