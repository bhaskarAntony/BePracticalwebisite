import React, { useState, useEffect } from 'react';
import '../styles/scrollSlide.css'; // Import your animation styles

function ScollSlide() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.scroll-slide-element');
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(elementPosition < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-slide-element ${isVisible ? 'visible' : ''}`}>
      <h1>Scroll-Slide Animation</h1>
      <p>This content will slide in when it becomes visible on scroll.</p>
    </div>
  );
}

export default ScollSlide;