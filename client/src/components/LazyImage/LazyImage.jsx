import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        ...style
      }}
      threshold={100}
      wrapperClassName="lazy-image-wrapper"
    />
  );
};

export default LazyImage;
