import React from 'react';
import { motion } from 'framer-motion';
import { useMobileDetection } from '../../hooks/useMobileDetection';

export const MobileOptimizedMotion = ({ 
  children, 
  mobileProps = {}, 
  desktopProps = {},
  ...props 
}) => {
  const { isMobile } = useMobileDetection();
  
  // Optimized props for mobile
  const mobileOptimizedProps = isMobile ? {
    ...props,
    // Reduce animation intensity on mobile
    whileHover: mobileProps.whileHover || {},
    whileTap: mobileProps.whileTap || { scale: 0.98 },
    transition: { 
      duration: mobileProps.duration || 0.3,
      type: "tween",
      ease: "easeOut"
    },
    // Disable complex animations on mobile
    drag: false,
    dragConstraints: null,
    ...mobileProps
  } : {
    ...props,
    // Full animations on desktop
    ...desktopProps
  };

  return (
    <motion.div {...mobileOptimizedProps}>
      {children}
    </motion.div>
  );
};