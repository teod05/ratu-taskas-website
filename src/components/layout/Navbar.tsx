
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { name: 'Pagrindinis', path: '/' },
    { name: 'Paslaugos', path: '/paslaugos' },
    { name: 'Apie mus', path: '/apie-mus' },
    { name: 'Kontaktai', path: '/kontaktai' },
  ];
  
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-brand-900">Ratų Taškas</span>
          </Link>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 hover:text-brand-red ${
                  location.pathname === item.path ? 'text-brand-red' : 'text-brand-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="tel:+37068830112" 
              className="btn-primary flex items-center gap-2"
            >
              <PhoneCall size={18} />
              <span>Skambinti</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-brand-900 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg pb-4 px-4 z-50">
            <div className="flex flex-col space-y-4 pt-2 pb-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium p-2 rounded-md transition-colors duration-200 ${
                    location.pathname === item.path 
                      ? 'bg-brand-100 text-brand-red' 
                      : 'text-brand-900 hover:bg-brand-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="tel:+37068830112" 
                className="btn-primary flex items-center justify-center gap-2 mt-2"
              >
                <PhoneCall size={18} />
                <span>Skambinti dabar</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
