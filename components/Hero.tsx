"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-black pt-20">
      {/* Background Texture & Decoration */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#C9A84C 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      
      {/* Right side fade and SVG graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full z-0 opacity-20 hidden lg:block pointer-events-none mix-blend-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-transparent z-10" />
        <svg viewBox="0 0 800 400" className="w-full h-full object-cover ml-24 mt-32 drop-shadow-2xl fill-brand-gold">
          {/* Abstract luxury sedan representation */}
          <path d="M150,220 C200,180 300,160 450,160 C550,160 600,180 650,220 L700,280 L100,280 Z" opacity="0.3" />
          <path d="M120,250 C180,210 320,190 480,190 C560,190 620,210 680,250 L720,300 L80,300 Z" opacity="0.6" />
          <path d="M80,280 C150,260 350,240 500,240 C600,240 680,260 750,280 L780,330 C780,330 790,360 760,370 L40,370 C10,360 20,330 20,330 Z" />
          {/* Wheels */}
          <circle cx="200" cy="350" r="40" fill="#0A0A0A" stroke="#C9A84C" strokeWidth="2" />
          <circle cx="600" cy="350" r="40" fill="#0A0A0A" stroke="#C9A84C" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-[4%] lg:px-[5%] w-full relative z-10 grid lg:grid-cols-12 gap-8">
        <motion.div 
          className="lg:col-span-8 flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 border border-brand-gold/30 rounded-full bg-brand-gold/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
            <span className="text-brand-white uppercase tracking-widest text-xs font-semibold">Chauffeur Privé VTC</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-5xl lg:text-7xl font-light text-brand-white-pure leading-[1.1] mb-6 tracking-tight">
            Votre chauffeur privé à Lyon — <br className="hidden md:block"/>
            <em className="text-brand-gold not-italic">Confort, ponctualité</em> et discrétion garantis.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-brand-gray text-base md:text-lg lg:text-xl mb-10 max-w-2xl font-light leading-relaxed">
            Service de transport haut de gamme pour vos transferts aéroport, déplacements professionnels et événements privés. L'élégance parisienne s'invite à Lyon.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#contact" className="bg-brand-gold text-brand-black px-8 py-4 rounded-sm font-semibold text-center hover:bg-brand-gold-light transition-colors group flex items-center justify-center gap-2">
              Réserver maintenant
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#services" className="border border-brand-gold/50 text-brand-white px-8 py-4 rounded-sm font-medium text-center hover:bg-brand-gold/10 transition-colors">
              Découvrir nos services
            </a>
          </motion.div>
        </motion.div>

        {/* Stats on desktop */}
        <div className="hidden lg:flex flex-col justify-end items-end col-span-4 pb-8 space-y-6">
          <div className="text-right">
            <div className="text-3xl font-serif text-brand-gold font-light mb-1">2 500+</div>
            <div className="text-brand-gray text-xs uppercase tracking-widest">Trajets réalisés</div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-serif text-brand-gold font-light mb-1">98%</div>
            <div className="text-brand-gray text-xs uppercase tracking-widest">Satisfaction client</div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-serif text-brand-gold font-light mb-1">24/7</div>
            <div className="text-brand-gray text-xs uppercase tracking-widest">Disponibilité</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-brand-gray uppercase tracking-[0.3em]">Découvrir</span>
        <div className="h-16 w-[1px] bg-brand-gold/20 overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-brand-gold"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
