import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function FloralGarden({ flowers }) {
  const [bloomedIds, setBloomedIds] = useState([]);
  const [activeFlower, setActiveFlower] = useState(null);

  const handleFlowerClick = (flower) => {
    if (!bloomedIds.includes(flower.id)) {
      setBloomedIds([...bloomedIds, flower.id]);
    }
    setActiveFlower(flower);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.25em] text-dorado block mb-2">
          Gratitud que Florece
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-crema mb-3">
          El Jardín de Mamá
        </h2>
        <p className="text-pastel/80 text-sm sm:text-base max-w-xl mx-auto">
          Tocá cada capullo para hacerlo florecer y descubrir lo que sembraste en nuestras vidas ({bloomedIds.length}/{flowers.length} abiertas).
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 mb-8">
        {flowers.map((flower) => {
          const isBloomed = bloomedIds.includes(flower.id);
          return (
            <motion.button
              key={flower.id}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleFlowerClick(flower)}
              className={`glass-card rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 ${
                activeFlower?.id === flower.id ? 'ring-2 ring-dorado shadow-gold' : ''
              }`}
            >
              {isBloomed && (
                <span className="absolute top-3 right-3 text-dorado">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
              )}

              <div className="relative w-28 h-28 flex items-center justify-center my-2">
                <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
                  <path d="M60 70 Q58 95 60 115" stroke="#4ade80" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  <path d="M60 95 Q42 88 38 96 Q48 104 60 95" fill="#4ade80" opacity="0.8" />
                  <path d="M60 88 Q78 80 82 88 Q72 96 60 88" fill="#4ade80" opacity="0.8" />

                  {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
                    <motion.g
                      key={idx}
                      initial={false}
                      animate={{
                        rotate: angle,
                        scale: isBloomed ? 1 : 0.38
                      }}
                      transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                      style={{ originX: "60px", originY: "55px" }}
                    >
                      <ellipse
                        cx="60"
                        cy="28"
                        rx={isBloomed ? "14" : "8"}
                        ry={isBloomed ? "24" : "15"}
                        fill={flower.color}
                        fillOpacity={isBloomed ? "0.9" : "0.6"}
                        stroke="#FFF7F0"
                        strokeWidth="1"
                      />
                    </motion.g>
                  ))}

                  <motion.circle
                    cx="60"
                    cy="55"
                    animate={{ r: isBloomed ? 11 : 7 }}
                    fill="#D4AF37"
                  />
                </svg>
              </div>

              <span className="font-serif text-base sm:text-lg text-crema mt-2">
                {flower.nombre}
              </span>
              <span className="text-[11px] text-pastel/70 mt-1">
                {isBloomed ? "Florecida ✨" : "Tocar para abrir 🌱"}
              </span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {activeFlower && (
          <motion.div
            key={activeFlower.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="glass-modal rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto shadow-glow"
          >
            <div className="inline-flex items-center gap-2 text-dorado text-xs uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4" /> {activeFlower.nombre}
            </div>
            <p className="font-serif italic text-xl sm:text-2xl text-crema leading-relaxed">
              “{activeFlower.mensaje}”
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
