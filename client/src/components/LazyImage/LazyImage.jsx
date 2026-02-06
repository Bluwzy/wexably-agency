import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './LazyImage.css';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  style = {}
}) => {
  return (
    <LazyLoadImage
      alt={alt}
      src={src}
      effect="blur"
      className={className}
      width={width}
      height={height}
      style={style}
      threshold={100}
      placeholderSrc={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width || 400} ${height || 300}'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3C/svg%3E`}
    />
  );
};

export default LazyImage;
