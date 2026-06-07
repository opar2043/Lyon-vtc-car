"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "./ui/SectionEyebrow";
import { Star, Quote } from "lucide-react";

const testimonialsList = [
  {
    name: "Jean-Pierre D.",
    location: "Lyon 6ème",
    initials: "JD",
    text: "Un service irréprochable. Le chauffeur était en avance, le véhicule d'une propreté clinique et la conduite d'une grande douceur. Je recommande vivement pour tous vos transferts professionnels."
  },
  {
    name: "Sophie T.",
    location: "Aéroport St Exupéry",
    initials: "ST",
    text: "Merveilleuse expérience pour mon retour de voyage. Après un vol fatiguant, retrouver un accueil chaleureux et une bouteille d'eau fraîche dans la voiture fut un véritable soulagement."
  },
  {
    name: "Marc L.",
    location: "Lyon 2ème",
    initials: "ML",
    text: "J'utilise Lyon VTC Premium pour tous mes déplacements d'affaires. La discrétion et le professionnalisme des chauffeurs sont toujours au rendez-vous. Le meilleur service de la région."
  },
  {
    name: "Chloé M.",
    location: "Ecully",
    initials: "CM",
    text: "Nous avons fait appel à eux pour notre mariage. Prestation exceptionnelle ! Le véhicule était magnifiquement préparé et le chauffeur a su se montrer disponible et extrêmement élégant."
  }
];

export default function Testimonials() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-brand-black-2">
      <div className="max-w-[1400px] mx-auto px-[4%] lg:px-[5%]">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <SectionEyebrow>Témoignages</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-brand-white-pure">
            Ce que disent <em className="text-brand-gold not-italic">nos clients</em>.
          </h2>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonialsList.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: 'rgba(201,168,76,0.4)' }}
              className="relative bg-brand-black border border-brand-gold/10 p-8 pt-10 flex flex-col transition-all duration-300 h-full"
            >
              <Quote className="absolute top-6 right-6 text-brand-gold/10 w-12 h-12" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              <p className="font-serif italic text-brand-white/90 text-lg mb-10 flex-grow font-light leading-relaxed">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full border border-brand-gold bg-brand-gold/10 flex items-center justify-center text-brand-gold font-medium text-sm">
                  {item.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-white-pure font-medium text-sm">{item.name}</span>
                  <span className="text-brand-gray text-xs uppercase tracking-wider">{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
