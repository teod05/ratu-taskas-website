
import Hero from '../components/common/Hero';
import { Wrench, Car, Package } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div>
      <Hero
        title="Mūsų paslaugos"
        subtitle="Profesionalios padangų priežiūros ir aptarnavimo paslaugos"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {/* Padangų Remontas */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="p-4 inline-block bg-brand-50 rounded-full mb-4 text-brand-red">
                  <Wrench size={48} />
                </div>
                <h2 className="mb-4">Padangų Remontas</h2>
                <p className="text-gray-600 mb-6">
                  Greitas ir kokybiškas padangų taisymas. Užtikriname jūsų saugumą kelyje.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Hermetiko įpurškimas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Pradūrimų taisymas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Ventilių keitimas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Padangų patikra</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
                <img 
                  src="https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="Padangų remontas" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Padangų Montavimas */}
            <div className="grid md:grid-cols-2 gap-8 items-center md:order-1">
              <div className="md:order-2">
                <div className="p-4 inline-block bg-brand-50 rounded-full mb-4 text-brand-red">
                  <Car size={48} />
                </div>
                <h2 className="mb-4">Padangų Montavimas</h2>
                <p className="text-gray-600 mb-6">
                  Profesionalus padangų montavimas ir balansavimas. Maksimalus našumas ir ilgaamžiškumas.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Padangų nuėmimas ir uždėjimas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Ratų balansavimas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Ratų geometrijos reguliavimas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Sezoninių padangų keitimas</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-80 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1521235042493-e5526c2809ec?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="Padangų montavimas" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Padangų Saugojimas */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="p-4 inline-block bg-brand-50 rounded-full mb-4 text-brand-red">
                  <Package size={48} />
                </div>
                <h2 className="mb-4">Padangų Saugojimas</h2>
                <p className="text-gray-600 mb-6">
                  Saugus padangų saugojimas mūsų sandėlyje. Apsauga nuo žalos ir ilgesnis padangų tarnavimo laikas.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Sezoninių padangų saugojimas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Kontroliuojamos saugojimo sąlygos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Padangų žymėjimas ir registravimas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Patogus padangų priėmimas ir išdavimas</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
                <img 
                  src="https://images.unsplash.com/photo-1506626481876-4cd4eb5c84fb?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="Padangų saugojimas" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-brand-50 section-padding">
        <div className="container-custom text-center">
          <h2 className="mb-6">Reikia mūsų paslaugų?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Susisiekite su mumis ir mūsų profesionalai padės išspręsti jūsų padangų problemas greitai ir efektyviai.
          </p>
          <a href="tel:+37068830112" className="btn-primary mr-4">
            Skambinti dabar
          </a>
          <a href="/kontaktai" className="btn-secondary">
            Susisiekti
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
