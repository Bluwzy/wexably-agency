import React, { useState, useEffect } from 'react';

// Import optimized WebP images
import food1 from '../../assets/optimized/FT02.webp';
import food2 from '../../assets/optimized/FT28.webp';
import food3 from '../../assets/optimized/GA18.webp';
import food4 from '../../assets/optimized/GA32.webp';
import food5 from '../../assets/optimized/GA40.webp';
import food6 from '../../assets/optimized/GA65.webp';
import food7 from '../../assets/optimized/H11.webp';
import food8 from '../../assets/optimized/HL35.webp';
import food9 from '../../assets/optimized/HL44.webp';
import food10 from '../../assets/optimized/L2.webp';
import food11 from '../../assets/optimized/M21.webp';
import food12 from '../../assets/optimized/MO2.webp';
import event1 from '../../assets/optimized/Event1.webp';
import event2 from '../../assets/optimized/Event2.webp';
import event3 from '../../assets/optimized/Event3.webp';
import event4 from '../../assets/optimized/Event4.webp';
import event5 from '../../assets/optimized/Event5.webp';
import fashion1 from '../../assets/optimized/Fashion1.webp';
import fashion2 from '../../assets/optimized/Fashion2.webp';
import fashion3 from '../../assets/optimized/Fashion3.webp';
import fashion4 from '../../assets/optimized/Fashion4.webp';
import fashion5 from '../../assets/optimized/Fashion5.webp';
import fashion6 from '../../assets/optimized/Fashion6.webp';
import './FeaturedMedia.css';

const FeaturedMedia = () => {
  const foodImages = [food1, food2, food3, food4, food5, food6, food7, food8, food9, food10, food11, food12];
  const eventImages = [event1, event2, event3, event4,event5];
  const fashionImages = [fashion1, fashion2, fashion3, fashion4, fashion5, fashion6];

  const [foodIndex, setFoodIndex] = useState(0);
  const [eventIndex, setEventIndex] = useState(0);
  const [fashionIndex, setFashionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFoodIndex((prev) => (prev + 1) % foodImages.length);
    }, 700);
    return () => clearInterval(interval);
  }, [foodImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEventIndex((prev) => (prev + 1) % eventImages.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [eventImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFashionIndex((prev) => (prev + 1) % fashionImages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [fashionImages.length]);

  return (
    <section className="featured-media">
      <div className="container">
        <h2 className="featured-media-title">
          Featured <span className="gradient-text">Media Work</span>
        </h2>
        <p className="featured-media-subtitle">
          Food, events, and fashion visuals that make brands beautiful to watch across web and social.
        </p>

        <div className="featured-media-grid">
          <div className="media-item">
            <img
              src={foodImages[foodIndex]}
              alt="Food & Restaurants Photography"
              className="media-image"
              loading="lazy"
            />
            <span className="media-label">Food & Restaurants</span>
          </div>
          <div className="media-item">
            <img
              src={eventImages[eventIndex]}
              alt="Events & Launches Photography"
              className="media-image"
              loading="lazy"
            />
            <span className="media-label">Events & Launches</span>
          </div>
          <div className="media-item">
            <img
              src={fashionImages[fashionIndex]}
              alt="Fashion & Products Photography"
              className="media-image"
              loading="lazy"
            />
            <span className="media-label">Fashion & Products</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMedia;
