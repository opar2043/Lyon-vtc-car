"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import SectionEyebrow from "./ui/SectionEyebrow";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

type ContactFormData = {
  nom: string;
  telephone: string;
  date: string;
  message: string;
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // In a real app, send data to backend here
    setTimeout(() => setIsSubmitted(true), 800);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const infoItems = [
    { icon: <MapPin className="w-5 h-5" />, title: "Adresse", detail: "7 Place Bellecour, 69002 Lyon, France" },
    { icon: <Phone className="w-5 h-5" />, title: "Téléphone", detail: "04 72 33 56 78" },
    { icon: <Mail className="w-5 h-5" />, title: "Email", detail: "contact@lyonvtcpremium.fr" },
    { icon: <Clock className="w-5 h-5" />, title: "Horaires", detail: "Disponible 24h/24 et 7j/7" },
  ];

  return (
    <section id="contact" className="py-24 md:py-36 bg-brand-black">
      <div className="max-w-[1400px] mx-auto px-[4%] lg:px-[5%]">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-center">
            <SectionEyebrow>Contact & Réservation</SectionEyebrow>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-brand-white-pure mb-12">
              Planifiez votre <em className="text-brand-gold not-italic">prochain trajet</em>.
            </h2>

            <div className="space-y-8">
              {infoItems.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-4 sm:items-center">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-brand-black-3 border border-brand-gold/30 text-brand-gold">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-brand-white-pure font-serif text-xl mb-1">{item.title}</h3>
                    <p className="text-brand-gray font-light">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-brand-black-3 border border-brand-gold/20 p-8 md:p-12">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-16"
              >
                <CheckCircle className="w-16 h-16 text-brand-gold mb-6" />
                <h3 className="font-serif text-3xl text-brand-white-pure mb-4">Demande Envoyée</h3>
                <p className="text-brand-gray">
                  Merci pour votre confiance. Notre équipe vous recontactera dans les plus brefs délais pour confirmer votre réservation.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-brand-gold hover:text-brand-gold-light transition-colors text-sm uppercase tracking-widest border-b border-brand-gold pb-1"
                >
                  Nouvelle demande
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-brand-white text-sm mb-2 font-medium">Nom complet</label>
                  <input 
                    {...register("nom", { required: true })}
                    type="text" 
                    id="nom"
                    className="w-full bg-brand-black border border-brand-gold/20 p-4 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="Jean Dupont"
                  />
                  {errors.nom && <span className="text-red-500 text-xs mt-1 block">Ce champ est requis</span>}
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-brand-white text-sm mb-2 font-medium">Téléphone</label>
                  <input 
                    {...register("telephone", { required: true })}
                    type="tel" 
                    id="telephone"
                    className="w-full bg-brand-black border border-brand-gold/20 p-4 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="06 XX XX XX XX"
                  />
                  {errors.telephone && <span className="text-red-500 text-xs mt-1 block">Ce champ est requis</span>}
                </div>

                <div>
                  <label htmlFor="date" className="block text-brand-white text-sm mb-2 font-medium">Date du trajet prévu</label>
                  <input 
                    {...register("date", { required: true })}
                    type="date" 
                    id="date"
                    className="w-full bg-brand-black border border-brand-gold/20 p-4 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                  />
                  {errors.date && <span className="text-red-500 text-xs mt-1 block">Ce champ est requis</span>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-brand-white text-sm mb-2 font-medium">Message ou précisions</label>
                  <textarea 
                    {...register("message")}
                    id="message"
                    rows={4}
                    className="w-full bg-brand-black border border-brand-gold/20 p-4 text-brand-white focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    placeholder="Adresse de départ, destination, nombre de passagers..."
                  />
                </div>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-brand-gold text-brand-black py-4 font-semibold hover:bg-brand-gold-light transition-colors flex items-center justify-center gap-2 group"
                >
                  Envoyer la demande
                  <motion.span className="group-hover:translate-x-1 transition-transform">
                    →
                  </motion.span>
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
