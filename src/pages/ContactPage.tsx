
import Hero from '../components/common/Hero';
import ContactForm from '../components/common/ContactForm';
import MapSection from '../components/pages/MapSection';
import { PhoneCall, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      <Hero
        title="Kontaktai"
        subtitle="Susisiekite su mumis dėl paslaugų ar turint klausimų"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Susisiekite su mumis</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-brand-50 p-3 rounded-full text-brand-red mr-4">
                    <PhoneCall size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Telefonas</h3>
                    <a 
                      href="tel:+37068830112" 
                      className="text-brand-700 hover:text-brand-red transition-colors duration-200"
                    >
                      +370 688 30 112
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-50 p-3 rounded-full text-brand-red mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">El. paštas</h3>
                    <a 
                      href="mailto:INFO@RATUTASKAS.LT" 
                      className="text-brand-700 hover:text-brand-red transition-colors duration-200"
                    >
                      INFO@RATUTASKAS.LT
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-50 p-3 rounded-full text-brand-red mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Adresas</h3>
                    <p>Svajonės g. 24, Klaipėda, 94101 Klaipėdos m. sav.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-50 p-3 rounded-full text-brand-red mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Darbo laikas</h3>
                    <p>Pirmadienis - Penktadienis: 8:00 - 18:00</p>
                    <p>Šeštadienis: 9:00 - 15:00</p>
                    <p>Sekmadienis: Uždaryta</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Mūsų vieta</h3>
                <MapSection />
              </div>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Parašykite mums</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
