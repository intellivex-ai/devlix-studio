import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticProps {
  children: React.ReactElement;
  range?: number; // trigger range in pixels
  strength?: number; // factor of mouse displacement to pull element (e.g. 0.35)
}

export const Magnetic: React.FC<MagneticProps> = ({ children, range = 70, strength = 0.4 }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for high performance motion without React renders
  const springX = useSpring(x, { stiffness: 120, damping: 12, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 120, damping: 12, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    const distance = Math.hypot(distanceX, distanceY);
    if (distance < range) {
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, willChange: 'transform' }}
      className="inline-flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
