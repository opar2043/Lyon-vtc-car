"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionEyebrow from "./ui/SectionEyebrow";
import { ShieldCheck, Clock, UserCheck, Star } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 md:py-36 bg-brand-black-2 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[4%] lg:px-[5%]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Image with corner brackets */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Corner Brackets */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-brand-gold z-10 hidden md:block"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-brand-gold z-10 hidden md:block"></div>
            
            <div className="relative aspect-[4/5] w-full bg-brand-black-3 border border-brand-gold/10 p-2">
              <div className="w-full h-full relative bg-brand-black overflow-hidden flex items-center justify-center">
                {/* Fallback pattern if no image */}
                <div 
                  className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(#C9A84C 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                
                {/* Normally an image would go here. Since we don't have one, we use a beautiful placeholder text/icon for this real app logic */}
                <Image 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200"
                  alt="Chauffeur privé Lyon VTC Premium"
                  fill
                  className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-brand-black/20" />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 md:bottom-8 md:-right-12 bg-brand-black border border-brand-gold/30 p-6 shadow-2xl z-20">
              <div className="text-4xl font-serif text-brand-gold mb-1">8+</div>
              <div className="text-brand-white text-xs uppercase tracking-widest leading-tight">Années<br/>d'expérience</div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionEyebrow>L'excellence pour vous</SectionEyebrow>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-brand-white-pure mb-8">
              Bien plus qu'un simple trajet, <br/>une <em className="text-brand-gold not-italic">expérience sur-mesure</em>.
            </h2>
            
            <div className="space-y-6 text-brand-gray text-base md:text-lg font-light mb-12">
              <p>
                Depuis plus de 8 ans, Lyon VTC Premium redéfinit les standards du transport de personnes. Nous vous accompagnons dans tous vos déplacements avec une exigence absolue de qualité, de ponctualité et de discrétion.
              </p>
              <p>
                Que ce soit pour un transfert vers l'aéroport de Lyon-Saint Exupéry, une mise à disposition pour la journée ou un événement spécial, nos chauffeurs professionnels se tiennent à votre entière disposition dans des véhicules haut de gamme.
              </p>
            </div>

            {/* Feature Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-2 gap-8"
            >
              {[
                { icon: <Star className="w-5 h-5 text-brand-gold" />, title: "Confort absolu" },
                { icon: <ShieldCheck className="w-5 h-5 text-brand-gold" />, title: "Fiabilité totale" },
                { icon: <UserCheck className="w-5 h-5 text-brand-gold" />, title: "Chauffeurs pro" },
                { icon: <Clock className="w-5 h-5 text-brand-gold" />, title: "Disponible 24h/24" },
              ].map((feature, i) => (
                <motion.div key={i} variants={featureVariants} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-gold/5">
                    {feature.icon}
                  </div>
                  <span className="text-brand-white font-medium text-sm md:text-base">
                    {feature.title}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
