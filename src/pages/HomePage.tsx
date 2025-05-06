import { Link } from 'react-router-dom';
import Hero from '../components/common/Hero';
import ServiceCard from '../components/common/ServiceCard';
import CarAnimation from '../components/animations/CarAnimation';
import { Wrench, Car, Package } from 'lucide-react';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [showRollingTire, setShowRollingTire] = useState(true);
  
  useEffect(() => {
    // Hide the rolling tire after animation completes
    const timer = setTimeout(() => {
      setShowRollingTire(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const services = [
    {
      title: 'Padangų Remontas',
      description: 'Greitas ir kokybiškas padangų taisymas. Užtikriname jūsų saugumą kelyje.',
      icon: Wrench
    },
    {
      title: 'Padangų Montavimas',
      description: 'Profesionalus padangų montavimas ir balansavimas. Maksimalus našumas ir ilgaamžiškumas.',
      icon: Car
    },
    {
      title: 'Padangų Saugojimas',
      description: 'Saugus padangų saugojimas mūsų sandėlyje. Apsauga nuo žalos ir ilgesnis padangų tarnavimo laikas.',
      icon: Package
    }
  ];

  return (
    <div>
      <CarAnimation size="md" />
      
      <Hero
        title="Ratų Taškas"
        subtitle="Greitas ir kokybiškas padangų aptarnavimas Klaipėdoje!"
        backgroundImage="/lovable-uploads/4e8a6e19-6958-4198-9b47-afa58e4e8358.png"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link to="/kontaktai" className="btn-primary inline-block">
            Susisiekite Dabar
          </Link>
        </div>
      </Hero>
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Sveiki atvykę į Ratų Tašką</h2>
            <p className="text-lg text-gray-600">
              Teikiame aukščiausios kokybės padangų montavimo, remonto paslaugas ir produktus, 
              kad jūsų transporto priemonės važiuotų saugiai ir sklandžiai.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/paslaugos" className="btn-secondary inline-block">
              Visos paslaugos
            </Link>
          </div>
        </div>
      </section>
      
      <section className="bg-brand-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Kodėl rinktis mus?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Patirtis</h3>
                <p className="text-gray-600">Ilgametė patirtis padangų aptarnavimo srityje.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Kokybė</h3>
                <p className="text-gray-600">Naudojame tik aukščiausios kokybės įrangą ir medžiagas.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Aptarnavimas</h3>
                <p className="text-gray-600">Operatyvus ir draugiškas klientų aptarnavimas.</p>
              </div>
            </div>
            <div className="mt-10">
              <Link to="/apie-mus" className="btn-primary inline-block">
                Daugiau apie mus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
