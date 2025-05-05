
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Ratų Taškas</h3>
            <p className="text-gray-300 mb-4">
              Teikiame aukščiausios kokybės padangų montavimo, remonto paslaugas 
              ir produktus, kad jūsų transporto priemonės važiuotų saugiai ir sklandžiai.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Nuorodos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Pagrindinis
                </Link>
              </li>
              <li>
                <Link to="/paslaugos" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Paslaugos
                </Link>
              </li>
              <li>
                <Link to="/apie-mus" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Apie mus
                </Link>
              </li>
              <li>
                <Link to="/kontaktai" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Kontaktai
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Kontaktai</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <PhoneCall size={20} className="text-brand-red mt-1" />
                <div>
                  <p className="text-gray-300">Telefonas:</p>
                  <a href="tel:+37068830112" className="text-white hover:text-gray-300 transition-colors duration-200">
                    +370 688 30 112
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-brand-red mt-1" />
                <div>
                  <p className="text-gray-300">El. paštas:</p>
                  <a href="mailto:INFO@RATUTASKAS.LT" className="text-white hover:text-gray-300 transition-colors duration-200">
                    INFO@RATUTASKAS.LT
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-red mt-1" />
                <div>
                  <p className="text-gray-300">Adresas:</p>
                  <a 
                    href="https://maps.google.com/?q=Svajonės g. 24, Klaipėda, 94101" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    Svajonės g. 24, Klaipėda, 94101
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © {currentYear > 2016 ? '2016-' + currentYear : '2016'} UAB Ratų Taškas. Visos teisės saugomos.
          </p>
        </div>
      </div>
      
      {/* Mobile call button */}
      <div className="md:hidden fixed bottom-4 right-4 z-40">
        <a 
          href="tel:+37068830112" 
          className="bg-brand-red hover:bg-red-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Skambinti dabar"
        >
          <PhoneCall size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
