import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ 
  children, 
  to, 
  type = 'primary', 
  size = 'medium',
  onClick,
  external = false,
  className = '',
  ...props 
}) => {
  const classNames = `button button-${type} button-${size} ${className}`;
  
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  if (to) {
    if (external) {
      return (
        <motion.a
          href={to}
          className={classNames}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ 
            scale: type === 'text' ? 1 : 1.05,
            boxShadow: type === 'primary' ? "0 5px 15px rgba(37, 99, 235, 0.3)" : "none"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          {...props}
        >
          {children}
        </motion.a>
      );
    }
    
    return (
      <motion.div
        whileHover={{ 
          scale: type === 'text' ? 1 : 1.05,
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to={to}
          className={classNames}
          onClick={handleClick}
          {...props}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={classNames}
      onClick={handleClick}
      whileHover={{ 
        scale: type === 'text' ? 1 : 1.05,
        boxShadow: type === 'primary' ? "0 5px 15px rgba(37, 99, 235, 0.3)" : "none"
      }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;