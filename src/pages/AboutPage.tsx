
import Hero from '../components/common/Hero';

const AboutPage = () => {
  return (
    <div>
      <Hero
        title="Apie mus"
        subtitle="Jūsų patikimas partneris kelyje nuo 2016 metų"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-4">Mes esame Ratų Taškas</h2>
              <p className="text-gray-600 mb-4">
                Ratų Taškas – jūsų partneris, užtikrinantis saugų ir patikimą vairavimą. 
                Mūsų patyrusi komanda ir moderni įranga garantuoja aukščiausios kokybės paslaugas.
              </p>
              <p className="text-gray-600 mb-4">
                Įkurta 2016 metais, mūsų įmonė siekia suteikti klientams aukščiausios kokybės 
                padangų montavimo, remonto ir saugojimo paslaugas. Per šiuos metus tapome vienu iš 
                labiausiai vertinamų padangų aptarnavimo centrų Klaipėdoje.
              </p>
              <p className="text-gray-600">
                Mūsų misija – užtikrinti jūsų saugumą kelyje teikiant profesionalias paslaugas 
                ir patarimus, susijusius su padangų priežiūra.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                alt="Mūsų komanda" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-brand-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Mūsų vertybės</h2>
            <p className="text-gray-600">
              Mūsų darbas grindžiamas aiškiomis vertybėmis, kurias taikome kiekvieną dieną.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-brand-100 text-brand-900 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Kokybė</h3>
              <p className="text-gray-600 text-center">
                Naudojame tik aukščiausios kokybės medžiagas ir darbui pasitelkiame naujausią įrangą.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-brand-100 text-brand-900 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Profesionalumas</h3>
              <p className="text-gray-600 text-center">
                Mūsų komanda nuolat tobulina savo žinias ir įgūdžius, kad galėtų teikti geriausias paslaugas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-brand-100 text-brand-900 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Patikimumas</h3>
              <p className="text-gray-600 text-center">
                Dirbame greitai, bet kruopščiai. Jūsų saugumas – mūsų prioritetas.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4">Moderni įranga</h2>
            <p className="text-gray-600 mb-8">
              Mūsų dirbtuvėje naudojama naujausia, profesionali įranga, kuri leidžia atlikti 
              darbus greitai, tiksliai ir kokybiškai.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1606577924006-27d39b132ae2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="Moderni įranga 1" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1572444857333-5d5b9fdb6b2c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="Moderni įranga 2" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
