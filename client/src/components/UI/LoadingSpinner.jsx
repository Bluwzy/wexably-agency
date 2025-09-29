import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="spinnerContainer">
      <div className="spinner"></div>
      <p className="loadingText">Loading content...</p>
    </div>
  );
};

export default LoadingSpinner;