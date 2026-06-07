"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "./ui/SectionEyebrow";
import { ArrowRight } from "lucide-react";

const servicesList = [
  {
    title: "Transfert Aéroport Lyon-Saint Exupéry",
    description: "Rejoignez ou quittez l'aéroport sereinement. Accueil personnalisé avec pancarte, suivi du vol en temps réel.",
    price: "à partir de 49€",
    icon: "✈"
  },
  {
    title: "Transfert Gare Part-Dieu et Perrache",
    description: "Vos trajets depuis ou vers les gares lyonnaises avec prise en charge immédiate au point de rendez-vous.",
    price: "à partir de 25€",
    icon: "🚉"
  },
  {
    title: "Mise à disposition avec chauffeur",
    description: "Un chauffeur dédié pour quelques heures ou toute la journée. Idéal pour vos rendez-vous d'affaires ou shopping.",
    price: "à partir de 80€/heure",
    icon: "⏱"
  },
  {
    title: "Transport événement et soirée",
    description: "Mariages, séminaires ou soirées privées. Un transport élégant pour sublimer vos moments d'exception.",
    price: "Sur devis",
    icon: "✨"
  },
  {
    title: "Trajet longue distance",
    description: "Voyagez à l'échelle nationale ou européenne dans un confort absolu et sans les contraintes des transports en commun.",
    price: "Sur devis",
    icon: "🗺"
  }
];

export default function Services() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="py-24 md:py-36 bg-brand-black">
      <div className="max-w-[1400px] mx-auto px-[4%] lg:px-[5%]">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-2xl">
          <SectionEyebrow>Nos Prestations</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-brand-white-pure">
            Des services <em className="text-brand-gold not-italic">pensés pour vous</em>.
          </h2>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6"
        >
          {servicesList.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative bg-brand-black-3 border border-brand-gold/10 p-8 pt-10 flex flex-col h-full overflow-hidden transition-all duration-300"
            >
              {/* Top border fade in trick */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="font-serif text-3xl text-brand-gold/40 mb-6 group-hover:text-brand-gold transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="font-serif text-xl md:text-2xl text-brand-white-pure mb-4 font-normal leading-snug group-hover:text-brand-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-brand-gray font-light text-sm md:text-base mb-12 flex-grow">
                {service.description}
              </p>

              <div className="flex items-end justify-between mt-auto pt-4 border-t border-brand-gold/10 group-hover:border-brand-gold/30 transition-colors duration-300">
                <span className="text-brand-gold text-sm font-semibold tracking-wide">
                  {service.price}
                </span>
                <button className="text-brand-white hover:text-brand-gold transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
