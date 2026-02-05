import React, { useState, useEffect } from 'react';
import food1 from '../../assets/FT02.jpg';
import food2 from '../../assets/FT28.png';
import food3 from '../../assets/GA18.png';
import food4 from '../../assets/GA32.png';
import event1 from '../../assets/GA40.png';
import event2 from '../../assets/GA65.png';
import event3 from '../../assets/H11.png';
import event4 from '../../assets/HL35.jpg';
import fashion1 from '../../assets/HL44.png';
import fashion2 from '../../assets/L2.png';
import fashion3 from '../../assets/M21.png';
import fashion4 from '../../assets/MO2.png';
import './FeaturedMedia.css';

const FeaturedMedia = () => {
  const foodImages = [food1, food2, food3, food4];
  const eventImages = [event1, event2, event3, event4];
  const fashionImages = [fashion1, fashion2, fashion3, fashion4];

  const [foodIndex, setFoodIndex] = useState(0);
  const [eventIndex, setEventIndex] = useState(0);
  const [fashionIndex, setFashionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFoodIndex((prev) => (prev + 1) % foodImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [foodImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEventIndex((prev) => (prev + 1) % eventImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [eventImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFashionIndex((prev) => (prev + 1) % fashionImages.length);
    }, 3000);
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
              alt="Food & Restaurants"
              className="media-image fade"
            />
            <span className="media-label">Food & Restaurants</span>
          </div>
          <div className="media-item">
            <img
              src={eventImages[eventIndex]}
              alt="Events & Launches"
              className="media-image fade"
            />
            <span className="media-label">Events & Launches</span>
          </div>
          <div className="media-item">
            <img
              src={fashionImages[fashionIndex]}
              alt="Fashion & Products"
              className="media-image fade"
            />
            <span className="media-label">Fashion & Products</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMedia;
