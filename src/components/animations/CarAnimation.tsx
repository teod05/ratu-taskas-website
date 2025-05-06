
import React, { useEffect, useState } from 'react';
import { Car } from 'lucide-react';

interface CarAnimationProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CarAnimation: React.FC<CarAnimationProps> = ({ 
  size = 'md',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState(0);
  
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-24 h-24'
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show car when scrolling starts
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Update car position based on scroll progress
      // This makes the car move from left to right as user scrolls down
      const scrollProgress = Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1);
      const windowWidth = window.innerWidth;
      const newPosition = scrollProgress * (windowWidth - 100); // Minus car width to keep it in view
      setPosition(newPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-5 z-50 transform transition-transform ${sizeClasses[size]} ${className}`}
      style={{ left: `${position}px` }}
    >
      <div className="relative animate-bounce">
        <Car className="text-brand-red" size={sizeClasses[size].split(' ')[0]} />
      </div>
    </div>
  );
};

export default CarAnimation;
