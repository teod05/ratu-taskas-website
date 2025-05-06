
import React from 'react';
import { CircleOff } from 'lucide-react';

interface TireAnimationProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const TireAnimation: React.FC<TireAnimationProps> = ({ 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
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
