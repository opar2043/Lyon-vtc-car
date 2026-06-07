export default function Footer() {
  return (
    <footer className="bg-brand-black pt-20 pb-8 border-t border-brand-gold/20">
      <div className="max-w-[1400px] mx-auto px-[4%] lg:px-[5%]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col">
            <a href="#" className="font-serif text-brand-gold text-2xl tracking-tight mb-2">
              Lyon VTC Premium
            </a>
            <span className="text-brand-white uppercase text-[0.65rem] tracking-[0.2em] mb-6 block">
              Chauffeur Privé · Lyon
            </span>
            <p className="text-brand-gray text-sm leading-relaxed font-light">
              L'excellence du transport privé à Lyon. Un service sur-mesure pour vos déplacements professionnels et personnels, alliant confort, ponctualité et discrétion.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-brand-white-pure text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-brand-gold/50"></span> Navigation
            </h4>
            <ul className="space-y-3">
              {['Accueil', 'À propos', 'Services', 'Témoignages', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item === 'Accueil' ? '' : item.toLowerCase().replace('é', 'e').replace('à ', 'about')}`} className="text-brand-gray hover:text-brand-gold transition-colors text-sm font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-brand-white-pure text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-brand-gold/50"></span> Nos Services
            </h4>
            <ul className="space-y-3">
              {[
                'Transfert Aéroport St Exupéry',
                'Transfert Gares de Lyon',
                'Mise à disposition',
                'Événementiel & Mariage',
                'Trajets longue distance'
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-brand-gray hover:text-brand-gold transition-colors text-sm font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-brand-white-pure text-lg mb-6 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-brand-gold/50"></span> Contact
            </h4>
            <ul className="space-y-4">
              <li className="text-brand-gray text-sm font-light">
                <strong className="text-brand-white block mb-1 font-medium">Adresse</strong>
                7 Place Bellecour<br/>69002 Lyon, France
              </li>
              <li className="text-brand-gray text-sm font-light">
                <strong className="text-brand-white block mb-1 font-medium">Téléphone</strong>
                04 72 33 56 78
              </li>
              <li className="text-brand-gray text-sm font-light">
                <strong className="text-brand-white block mb-1 font-medium">Email</strong>
                contact@lyonvtcpremium.fr
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-brand-gray/60">
          <p>© {new Date().getFullYear()} Lyon VTC Premium. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2">
            <span>Chauffeur Privé Lyon</span>
            <span>·</span>
            <span>VTC Aéroport Saint Exupéry</span>
            <span>·</span>
            <span>Transport de luxe Lyon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
