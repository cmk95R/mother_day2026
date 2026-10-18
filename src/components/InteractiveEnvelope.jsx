import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';

export default function InteractiveEnvelope({ config, onOpenComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showFullGreeting, setShowFullGreeting] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);

    confetti({
      particleCount: 55,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F8C8DC', '#E75480', '#D4AF37', '#FFF7F0']
    });

    setTimeout(() => {
      setShowFullGreeting(true);
      onOpenComplete();
    }, 1100);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-dorado text-xs uppercase tracking-[0.25em] mb-6">
          <Sparkles className="w-3.5 h-3.5" /> Feliz Día de la Madre
        </span>
        
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl text-crema leading-tight mb-4">
          “{config.supertitulo}”
        </h1>
        
        <p className="font-sans text-pastel/90 text-base sm:text-lg font-light">
          {config.subtitulo}
        </p>
      </motion.div>

      <motion.div
        animate={{ scale: isOpen ? 1.06 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full max-w-[340px] sm:max-w-[400px] h-[240px] sm:h-[270px] perspective-1000 my-4 cursor-pointer group"
        onClick={handleOpen}
      >
        <div className="absolute -bottom-6 inset-x-6 h-8 bg-black/50 blur-xl rounded-full" />

        <div className="relative w-full h-full bg-gradient-to-b from-[#8c3843] to-[#5e222a] rounded-2xl shadow-2xl border border-dorado/30 overflow-visible flex items-center justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isOpen ? -95 : 10,
              scale: isOpen ? 1.04 : 0.94,
              opacity: isOpen ? 1 : 0
            }}
            transition={{ duration: 0.9, delay: 0.25, type: "spring", bounce: 0.3 }}
            className="w-[88%] h-[85%] bg-gradient-to-br from-[#FFF7F0] to-[#F8C8DC] rounded-xl p-5 shadow-xl flex flex-col items-center justify-center text-center border border-dorado/50 z-10"
          >
            <Heart className="w-7 h-7 text-intenso fill-intenso mb-2 animate-bounce" />
            <p className="font-script text-3xl sm:text-4xl text-bordo leading-none mb-2">
              {config.mensajeRevelado}
            </p>
            <p className="font-sans text-xs text-bordo/80">
              De Cristian y Mateo, con todo nuestro corazón.
            </p>
          </motion.div>

          <div 
            className="absolute inset-0 rounded-2xl z-20 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, #722F37 0%, #4d1c22 100%)",
              clipPath: "polygon(0 35%, 50% 65%, 100% 35%, 100% 100%, 0 100%)"
            }}
          />

          <motion.div
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isOpen ? 180 : 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{
              transformOrigin: "top",
              clipPath: "polygon(0 0, 100% 0, 50% 62%)",
              background: "linear-gradient(180deg, #8f3b45 0%, #63252d 100%)",
              zIndex: isOpen ? 5 : 30
            }}
            className="absolute inset-0 rounded-t-2xl border-t border-dorado/40"
          />

          <AnimatePresence>
            {!isOpen && (
              <motion.button
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpen}
                style={{ x: '-50%', y: '-50%' }}
                className="absolute left-1/2 top-1/2 z-40 px-6 py-3 rounded-full bg-gradient-to-r from-dorado via-[#f3d266] to-dorado text-noche font-sans font-semibold text-sm shadow-gold flex items-center gap-2 border border-white/40"
              >
                {config.botonSobre}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <AnimatePresence>
        {showFullGreeting && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 text-center flex flex-col items-center"
          >
            <p className="font-serif italic text-pastel text-lg mb-3">
              Deslizá suavemente para recorrer nuestra historia...
            </p>
            <a
              href="#escena-historia"
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-dorado hover:bg-intenso/20 transition-colors animate-bounce"
              aria-label="Ir a Nuestra Historia"
            >
              <ChevronDown className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
