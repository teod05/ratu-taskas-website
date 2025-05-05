
import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
}

const Hero = ({ title, subtitle, backgroundImage, children }: HeroProps) => {
  return (
    <div 
      className="relative bg-brand-900 text-white py-20 md:py-32"
      style={
        backgroundImage 
          ? { 
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            } 
          : {}
      }
    >
      <div className="container-custom text-center max-w-4xl">
        <h1 className="text-white mb-4 fade-in">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-gray-200 mb-8 fade-in">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
};

export default Hero;
