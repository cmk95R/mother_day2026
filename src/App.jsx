import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import confetti from 'canvas-confetti';
import {
  Heart, Volume2, VolumeX, Sparkles, Gift, RotateCcw,
  Download, ZoomIn, X, ChevronLeft, ChevronRight, Stars
} from 'lucide-react';

import { STORY_CONFIG } from './data/storyConfig';
import RomanticCanvas3D from './components/RomanticCanvas3D';
import InteractiveEnvelope from './components/InteractiveEnvelope';
import SmartPhoto from './components/SmartPhoto';
import FloralGarden from './components/FloralGarden';
import SaveableCardModal from './components/SaveableCardModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [experienceStarted, setExperienceStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [unlockedReasons, setUnlockedReasons] = useState([]);
  const [activeReason, setActiveReason] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [letterOpen, setLetterOpen] = useState(false);
  const [grandFinaleTriggered, setGrandFinaleTriggered] = useState(false);
  const [foundEggs, setFoundEggs] = useState([]);
  const [eggToast, setEggToast] = useState(null);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const audioRef = useRef(null);
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (!experienceStarted) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.polaroid-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 70, rotateZ: i % 2 === 0 ? -6 : 6 },
          {
            opacity: 1,
            y: 0,
            rotateZ: i % 2 === 0 ? -2 : 2,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, [experienceStarted]);

  const handleStartExperience = () => {
    setExperienceStarted(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handleReasonClick = (reason) => {
    if (!unlockedReasons.includes(reason.id)) {
      setUnlockedReasons([...unlockedReasons, reason.id]);
    }
    setActiveReason(reason);
    confetti({
      particleCount: 18,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#F8C8DC', '#E75480', '#D4AF37']
    });
  };

  const triggerEasterEgg = (egg) => {
    if (!foundEggs.includes(egg.id)) {
      setFoundEggs([...foundEggs, egg.id]);
    }
    setEggToast(egg);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.3 },
      colors: ['#D4AF37', '#FFF7F0']
    });
    setTimeout(() => setEggToast(null), 5500);
  };

  const triggerGrandFinale = () => {
    setGrandFinaleTriggered(true);
    const duration = 4.5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.65 },
        colors: ['#E75480', '#F8C8DC', '#D4AF37', '#FFF7F0']
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.65 },
        colors: ['#E75480', '#F8C8DC', '#D4AF37', '#FFF7F0']
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleRestart = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setGrandFinaleTriggered(false);
      setLetterOpen(false);
    }, 800);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1a0910] via-[#2d0f1c] to-[#1a0910] text-crema font-sans select-none">
      <audio ref={audioRef} src={STORY_CONFIG.musicaUrl} loop preload="auto" />

      <RomanticCanvas3D boost={grandFinaleTriggered} />

      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pastel via-intenso to-dorado origin-left z-50"
      />

      {experienceStarted && (
        <div className="fixed top-4 right-4 z-40 flex items-center gap-2.5">
          <div className="glass-card px-3.5 py-2 rounded-full text-xs text-dorado flex items-center gap-1.5 shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Secretos: {foundEggs.length}/3</span>
          </div>

          <button
            onClick={toggleAudio}
            aria-label="Silenciar o activar música"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-pastel hover:text-dorado transition-colors shadow-lg"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
          </button>
        </div>
      )}

      <AnimatePresence>
        {eggToast && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-16 inset-x-4 max-w-md mx-auto z-50 glass-modal p-4 rounded-2xl border border-dorado shadow-gold text-center"
          >
            <p className="text-xs uppercase tracking-widest text-dorado mb-1">{eggToast.pista}</p>
            <p className="font-serif italic text-sm sm:text-base text-crema">{eggToast.mensaje}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <InteractiveEnvelope
        config={STORY_CONFIG.escena1}
        onOpenComplete={handleStartExperience}
      />

      {experienceStarted && (
        <main ref={timelineRef} className="relative z-10 space-y-32 pb-28">
          <section id="escena-historia" className="px-4 pt-12 max-w-5xl mx-auto relative">
            <button
              onClick={() => triggerEasterEgg(STORY_CONFIG.easterEggs[0])}
              title="Corazón Secreto"
              className="absolute top-4 left-6 text-dorado/30 hover:text-dorado transition-transform hover:scale-125"
            >
              <Heart className="w-4 h-4 fill-current" />
            </button>

            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.25em] text-dorado block mb-2">
                Nuestro Camino
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-crema mb-3">
                Nuestra Historia Juntos
              </h2>
              <p className="text-pastel/80 text-sm sm:text-base max-w-xl mx-auto">
                Cada paso que dimos nos trajo hasta este presente maravilloso con Mateo.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-intenso via-dorado to-pastel -translate-x-1/2 opacity-40" />

              <div className="space-y-16">
                {STORY_CONFIG.escena2_historia.map((item, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div
                      key={item.id}
                      className={`polaroid-card relative flex flex-col sm:flex-row items-center gap-8 ${
                        isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                      }`}
                    >
                      <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-noche border-2 border-dorado items-center justify-center shadow-gold z-10">
                        <Heart className="w-3.5 h-3.5 text-intenso fill-intenso" />
                      </div>

                      <div className="w-full sm:w-1/2 pl-10 sm:pl-0 sm:px-6">
                        <div className="bg-[#FFF7F0] p-3.5 pb-6 rounded-2xl shadow-2xl text-noche transform transition-transform duration-500 hover:rotate-0">
                          <SmartPhoto
                            src={item.foto}
                            alt={item.titulo}
                            placeholderText={item.placeholderTexto}
                            className="w-full aspect-[4/3] rounded-lg mb-4"
                          />
                          <p className="font-script text-2xl sm:text-3xl text-bordo text-center">
                            {item.titulo}
                          </p>
                        </div>
                      </div>

                      <div className="w-full sm:w-1/2 pl-10 sm:pl-0 sm:px-6">
                        <div className="glass-card p-6 sm:p-8 rounded-3xl">
                          <span className="text-xs uppercase tracking-widest text-dorado block mb-1">
                            {item.fecha} • {item.etapa}
                          </span>
                          <h3 className="font-serif text-2xl text-crema mb-3">
                            {item.titulo}
                          </h3>
                          <p className="text-pastel/90 text-sm sm:text-base leading-relaxed font-light">
                            {item.descripcion}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="px-4 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-dorado block mb-2">
                Lo que significa tenerte
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-crema mb-3">
                10 Razones por las que te Amamos
              </h2>
              <p className="text-pastel/80 text-sm sm:text-base max-w-xl mx-auto">
                Tocá cada corazón para iluminarlo y descubrir nuestros motivos ({unlockedReasons.length}/10 descubiertos).
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 mb-8">
              {STORY_CONFIG.escena3_razones.map((reason) => {
                const isUnlocked = unlockedReasons.includes(reason.id);
                const isCurrent = activeReason?.id === reason.id;

                return (
                  <motion.button
                    key={reason.id}
                    whileHover={{ scale: 1.06, y: -4 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => handleReasonClick(reason)}
                    className={`relative p-6 rounded-3xl flex flex-col items-center justify-center transition-all duration-300 ${
                      isUnlocked
                        ? 'bg-gradient-to-br from-intenso/30 to-bordo/50 border border-dorado/60 shadow-glow'
                        : 'glass-card hover:border-pastel/40'
                    } ${isCurrent ? 'ring-2 ring-dorado scale-105' : ''}`}
                  >
                    <motion.div
                      animate={isUnlocked ? { scale: [1, 1.18, 1] } : { scale: 1 }}
                      transition={{ repeat: isUnlocked ? Infinity : 0, duration: 1.6 }}
                    >
                      <Heart
                        className={`w-10 h-10 sm:w-12 sm:h-12 transition-colors ${
                          isUnlocked
                            ? 'text-intenso fill-intenso drop-shadow-[0_0_12px_rgba(231,84,128,0.8)]'
                            : 'text-pastel/60'
                        }`}
                      />
                    </motion.div>
                    <span className="mt-3 font-serif text-sm text-crema">
                      Razón #{reason.id}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              {activeReason ? (
                <motion.div
                  key={activeReason.id}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  className="glass-modal p-7 sm:p-9 rounded-3xl text-center max-w-2xl mx-auto shadow-glow"
                >
                  <span className="text-xs uppercase tracking-widest text-dorado block mb-2">
                    Razón #{activeReason.id}
                  </span>
                  <p className="font-serif italic text-xl sm:text-2xl text-crema leading-relaxed">
                    “{activeReason.texto}”
                  </p>
                </motion.div>
              ) : (
                <div className="text-center text-pastel/60 text-sm italic">
                  Seleccioná cualquier corazón de arriba para leer su mensaje ❤️
                </div>
              )}
            </AnimatePresence>
          </section>

          <section className="px-4">
            <FloralGarden flowers={STORY_CONFIG.escena4_jardin} />
          </section>

          <section className="px-4 max-w-5xl mx-auto relative">
            <button
              onClick={() => triggerEasterEgg(STORY_CONFIG.easterEggs[1])}
              title="Secreto 2"
              className="absolute right-6 top-2 text-dorado/30 hover:text-dorado transition-transform hover:scale-125"
            >
              <Stars className="w-5 h-5" />
            </button>

            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-dorado block mb-2">
                Instantes Eternos
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-crema mb-3">
                Nuestros Recuerdos
              </h2>
              <p className="text-pastel/80 text-sm sm:text-base max-w-xl mx-auto">
                Momentos que guardamos en el alma. Tocá cualquier foto para ampliarla.
              </p>
            </div>

            <div className="relative glass-card rounded-3xl p-4 sm:p-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.45 }}
                  className="flex flex-col items-center"
                >
                  <div
                    onClick={() => setLightboxPhoto(STORY_CONFIG.escena5_galeria[currentSlide])}
                    className="relative w-full max-w-2xl aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer group border border-dorado/30 shadow-2xl"
                  >
                    <SmartPhoto
                      src={STORY_CONFIG.escena5_galeria[currentSlide].foto}
                      alt={STORY_CONFIG.escena5_galeria[currentSlide].epigrafe}
                      placeholderText={STORY_CONFIG.escena5_galeria[currentSlide].placeholder}
                      className="w-full h-full"
                    />
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md p-2.5 rounded-full text-crema opacity-80 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="font-serif italic text-lg sm:text-xl text-crema mt-6 text-center max-w-xl">
                    “{STORY_CONFIG.escena5_galeria[currentSlide].epigrafe}”
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={() =>
                    setCurrentSlide((prev) =>
                      prev === 0 ? STORY_CONFIG.escena5_galeria.length - 1 : prev - 1
                    )
                  }
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-crema hover:bg-intenso/30 transition-colors"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs tracking-widest text-dorado">
                  {currentSlide + 1} / {STORY_CONFIG.escena5_galeria.length}
                </span>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) =>
                      prev === STORY_CONFIG.escena5_galeria.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-crema hover:bg-intenso/30 transition-colors"
                  aria-label="Siguiente foto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>

          <section className="px-4 max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[0.25em] text-dorado block mb-2">
                El Amor más Puro
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-crema">
                Un Mensaje de Mateo
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFF7F0] text-noche rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-dashed border-intenso/40 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-pastel/50 text-bordo text-xs font-semibold">
                  🎨 Para la mejor mamá
                </span>
                <div className="flex gap-1 text-dorado">
                  <span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
              </div>

              <div className="mb-6 rounded-2xl overflow-hidden border-2 border-pastel shadow-inner">
                <SmartPhoto
                  src={STORY_CONFIG.escena6_mateo.dibujoUrl}
                  alt="Dibujo de Mateo para Mamá"
                  placeholderText={STORY_CONFIG.escena6_mateo.placeholder}
                  className="w-full aspect-[16/9]"
                />
              </div>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.06 } }
                }}
                className="font-serif text-xl sm:text-2xl text-bordo leading-relaxed mb-6"
              >
                {STORY_CONFIG.escena6_mateo.mensaje.split(" ").map((word, idx) => (
                  <motion.span
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 5 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="inline-block mr-1.5"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>

              <p className="font-script text-3xl sm:text-4xl text-intenso text-right">
                {STORY_CONFIG.escena6_mateo.firma}
              </p>
            </motion.div>
          </section>

          <section className="px-4 max-w-3xl mx-auto relative">
            <button
              onClick={() => triggerEasterEgg(STORY_CONFIG.easterEggs[2])}
              title="Secreto 3"
              className="absolute left-8 -top-4 text-dorado/30 hover:text-dorado transition-transform hover:scale-125"
            >
              <Gift className="w-4 h-4" />
            </button>

            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[0.25em] text-dorado block mb-2">
                De mi Corazón al Tuyo
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-crema mb-3">
                Mi Carta para Vos
              </h2>
            </div>

            {!letterOpen ? (
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setLetterOpen(true)}
                className="glass-modal p-10 rounded-3xl text-center cursor-pointer border border-dorado/40 shadow-gold max-w-lg mx-auto"
              >
                <Heart className="w-12 h-12 text-intenso fill-intenso mx-auto mb-4 animate-pulse" />
                <p className="font-serif text-xl text-crema mb-2">
                  Hay una carta escrita especialmente para vos
                </p>
                <span className="inline-block mt-3 px-6 py-2.5 rounded-full bg-dorado text-noche font-semibold text-xs uppercase tracking-wider">
                  Desplegar carta 📜
                </span>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scaleY: 0.2, originY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-gradient-to-b from-[#FFF7F0] to-[#f5e6d8] text-noche p-8 sm:p-12 rounded-3xl shadow-2xl border border-dorado relative"
              >
                <p className="font-script text-4xl sm:text-5xl text-bordo mb-6">
                  {STORY_CONFIG.escena7_carta.saludo}
                </p>

                <div className="space-y-4 font-serif text-base sm:text-lg text-[#3a1820] leading-relaxed">
                  {STORY_CONFIG.escena7_carta.parrafos.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-bordo/15 text-right">
                  <p className="font-serif italic text-sm text-bordo/80">
                    {STORY_CONFIG.escena7_carta.despedida}
                  </p>
                  <p className="font-script text-4xl text-intenso mt-1">
                    {STORY_CONFIG.escena7_carta.firma}
                  </p>
                </div>
              </motion.div>
            )}
          </section>

          <section className="px-4 py-16 max-w-4xl mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-dorado block mb-4">
              Nuestro Infinito
            </span>

            {!grandFinaleTriggered ? (
              <div className="flex flex-col items-center justify-center py-8">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
                  className="mb-8"
                >
                  <Heart className="w-28 h-28 sm:w-36 sm:h-36 text-intenso fill-intenso drop-shadow-[0_0_35px_rgba(231,84,128,0.85)]" />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={triggerGrandFinale}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-intenso via-[#ff6b96] to-dorado text-white font-sans font-semibold text-base sm:text-lg shadow-glow border border-white/30"
                >
                  ❤️ Tocá para descubrir cuánto te amamos
                </motion.button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, type: "spring" }}
                className="glass-modal p-8 sm:p-14 rounded-3xl border border-dorado shadow-gold"
              >
                <Sparkles className="w-10 h-10 text-dorado mx-auto mb-4 animate-spin" />
                <h2 className="font-serif text-4xl sm:text-6xl text-crema leading-tight mb-4">
                  ¡Feliz Día de la Madre, Amor!
                </h2>
                <p className="font-serif italic text-xl sm:text-3xl text-pastel mb-3">
                  “Gracias por ser el corazón de nuestra familia.”
                </p>
                <p className="font-sans text-base sm:text-lg text-crema/90 tracking-wide uppercase mb-8">
                  Te amamos infinitamente.
                </p>

                <div className="font-script text-5xl sm:text-6xl text-dorado mb-10">
                  {STORY_CONFIG.remitentes} ❤️
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setIsCardModalOpen(true)}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-dorado to-[#e6c453] text-noche font-semibold text-sm flex items-center justify-center gap-2 shadow-gold"
                  >
                    <Download className="w-4 h-4" /> Guardar recuerdo como imagen
                  </button>

                  <button
                    onClick={handleRestart}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full glass-card text-crema font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" /> Volver a vivir la experiencia
                  </button>
                </div>
              </motion.div>
            )}
          </section>
        </main>
      )}

      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center p-4"
          >
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-w-3xl w-full rounded-2xl overflow-hidden border border-dorado/40">
              <SmartPhoto
                src={lightboxPhoto.foto}
                alt={lightboxPhoto.epigrafe}
                placeholderText={lightboxPhoto.placeholder}
                className="w-full max-h-[75vh]"
              />
            </div>
            <p className="font-serif italic text-xl text-pastel mt-4 text-center">
              “{lightboxPhoto.epigrafe}”
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <SaveableCardModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
        config={STORY_CONFIG}
      />
    </div>
  );
}
