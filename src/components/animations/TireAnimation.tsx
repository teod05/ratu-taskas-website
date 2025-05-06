
import React, { useEffect, useState } from 'react';

interface TireAnimationProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animate?: boolean;
}

const TireAnimation: React.FC<TireAnimationProps> = ({ 
  size = 'md',
  className = '',
  animate = false
}) => {
  const [position, setPosition] = useState(animate ? -100 : 0);
  const [isAnimating, setIsAnimating] = useState(animate);
  
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  useEffect(() => {
    if (isAnimating) {
      const animationDuration = 2500; // ms
      const startTime = Date.now();
      const endPosition = window.innerWidth + 100;
      
      const animate = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1);
        
        // Calculate new position based on screen width
        const newPosition = -100 + progress * (endPosition);
        setPosition(newPosition);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isAnimating]);

  return (
    <div 
      className={`relative ${sizeClasses[size]} ${className}`}
      style={isAnimating ? { transform: `translateX(${position}px)` } : {}}
    >
      {/* Tire outer circle */}
      <div className="absolute inset-0 rounded-full bg-gray-800 animate-spin-slow"></div>
      
      {/* Tire inner circle (rim) */}
      <div className="absolute inset-[15%] rounded-full bg-gray-300 shadow-inner"></div>
      
      {/* Tire center (hub) */}
      <div className="absolute inset-[40%] rounded-full bg-gray-500 shadow-md"></div>
      
      {/* Tire treads (spokes) */}
      {[...Array(8)].map((_, index) => (
        <div 
          key={index}
          className="absolute top-[48%] left-0 right-0 h-[4%] bg-gray-900 origin-center"
          style={{ transform: `rotate(${index * 22.5}deg)` }}
        ></div>
      ))}
    </div>
  );
};

export default TireAnimation;
