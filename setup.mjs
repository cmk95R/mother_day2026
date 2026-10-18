// setup.mjs - Generador automático del proyecto "Una sorpresa para Tatiana ❤️"
import fs from 'fs';
import path from 'path';

const files = {
  'package.json': JSON.stringify({
    name: "sorpresa-tatiana",
    private: true,
    version: "1.0.0",
    type: "module",
    scripts: {
      dev: "vite",
      build: "vite build",
      preview: "vite preview"
    },
    dependencies: {
      "@react-three/drei": "^9.105.0",
      "@react-three/fiber": "^8.16.0",
      "canvas-confetti": "^1.9.3",
      "framer-motion": "^11.2.10",
      "gsap": "^3.12.5",
      "lucide-react": "^0.395.0",
      "react": "^18.3.1",
      "react-dom": "^18.3.1",
      "three": "^0.165.0"
    },
    devDependencies: {
      "@vitejs/plugin-react": "^4.3.1",
      "autoprefixer": "^10.4.19",
      "postcss": "^8.4.38",
      "tailwindcss": "^3.4.4",
      "vite": "^5.3.1"
    }
  }, null, 2),

  'vite.config.js': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
`,

  'postcss.config.js': `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`,

  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastel: "#F8C8DC",
        intenso: "#E75480",
        bordo: "#722F37",
        crema: "#FFF7F0",
        dorado: "#D4AF37",
        noche: "#1A0910",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        glow: "0 0 25px rgba(231, 84, 128, 0.45)",
        gold: "0 0 30px rgba(212, 175, 55, 0.35)",
      }
    },
  },
  plugins: [],
};
`,

  'index.html': `<!doctype html>
<html lang="es" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Para Tatiana ❤️ | Feliz Día de la Madre</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400..700;1,400..600&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#1a0910] text-[#FFF7F0] antialiased selection:bg-[#E75480] selection:text-white overflow-x-hidden">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`,

  'src/main.jsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
`,

  'src/index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .glass-card {
    background: rgba(255, 247, 240, 0.06);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(248, 200, 220, 0.18);
  }
  .glass-modal {
    background: rgba(26, 9, 16, 0.88);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(212, 175, 55, 0.3);
  }
  .perspective-1000 {
    perspective: 1000px;
  }
  .preserve-3d {
    transform-style: preserve-3d;
  }
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #1a0910;
}
::-webkit-scrollbar-thumb {
  background: #722F37;
  border-radius: 3px;
}
`,

  'src/data/storyConfig.js': `export const STORY_CONFIG = {
  destinataria: "Tatiana",
  apodo: "Taty",
  remitentes: "Cristian y Mateo",
  fechaEvento: "Día de la Madre • Octubre 2026",
  musicaUrl: "/audio/melodia.mp3",
  
  escena1: {
    supertitulo: "Para la mujer que convirtió nuestra vida en algo maravilloso...",
    subtitulo: "Amor, tenemos algo especial para vos ❤️",
    botonSobre: "💌 Abrí tu sorpresa",
    mensajeRevelado: "¡Feliz Día de la Madre, mi amor!"
  },

  escena2_historia: [
    {
      id: "h1",
      etapa: "El Comienzo",
      fecha: "Capítulo I",
      titulo: "Cuando comenzó nuestra historia",
      descripcion: "Dos caminos que se cruzaron para no separarse más. Desde aquellas primeras charlas y miradas, supimos que estábamos construyendo algo único.",
      foto: "/photos/historia-1.jpg",
      placeholderTexto: "Colocá tu foto en /public/photos/historia-1.jpg (Nuestra primera foto juntos)",
      rotacion: -3
    },
    {
      id: "h2",
      etapa: "Cómplices",
      fecha: "Capítulo II",
      titulo: "Los recuerdos que construimos",
      descripcion: "Viajes, risas, sueños compartidos y esa capacidad tuya de hacer que cualquier plan sencillo se convierta en un recuerdo inolvidable.",
      foto: "/photos/historia-2.jpg",
      placeholderTexto: "Colocá tu foto en /public/photos/historia-2.jpg (Viaje o salida especial)",
      rotacion: 2.5
    },
    {
      id: "h3",
      etapa: "Nuestro Hogar",
      fecha: "Capítulo III",
      titulo: "Cuando nos convertimos en familia",
      descripcion: "El proyecto más lindo de nuestras vidas. Construir un refugio lleno de amor, paciencia y compañerismo y enseñanzas día tras día.",
      foto: "/photos/historia-3.jpg",
      placeholderTexto: "Colocá tu foto en /public/photos/historia-3.jpg (Formando nuestro hogar)",
      rotacion: -2
    },
    {
      id: "h4",
      etapa: "El Milagro",
      fecha: "Capítulo IV",
      titulo: "La llegada de Mateo",
      descripcion: "El día en que el mundo cobró un nuevo sentido. Verte sostener a nuestro hijo por primera vez me confirmó la mujer extraordinaria que sos.",
      foto: "/photos/historia-4.jpg",
      placeholderTexto: "Colocá tu foto en /public/photos/historia-4.jpg (La llegada de Mateo)",
      rotacion: 3
    },
    {
      id: "h5",
      etapa: "Hoy y Siempre",
      fecha: "Capítulo V",
      titulo: "Nuestros momentos más felices",
      descripcion: "Hoy somos un equipo indestructible. Gracias por ser el faro, la alegría y el abrazo cálido donde Mateo y yo siempre queremos estar.",
      foto: "/photos/historia-5.jpg",
      placeholderTexto: "Colocá tu foto en /public/photos/historia-5.jpg (Los tres juntos hoy)",
      rotacion: -1.5
    }
  ],

  escena3_razones: [
    { id: 1, texto: "Porque tu sonrisa ilumina nuestros días incluso antes del primer café." },
    { id: 2, texto: "Porque transformás cualquier lugar en nuestro hogar con solo estar ahí." },
    { id: 3, texto: "Porque Mateo tiene la suerte inmensa de tenerte como guía, ejemplo y mamá." },
    { id: 4, texto: "Porque incluso en los días difíciles o de cansancio, seguís dando el amor más puro." },
    { id: 5, texto: "Porque me encanta construir una vida, soñar proyectos y crecer a tu lado." },
    { id: 6, texto: "Por la paciencia infinita y la ternura con la que enseñás y acompañás a nuestro hijo." },
    { id: 7, texto: "Porque sos mi compañera de equipo favorita en todas las aventuras de esta vida." },
    { id: 8, texto: "Por tus abrazos que tienen el superpoder de curar cualquier mal día al instante." },
    { id: 9, texto: "Porque cuidás cada pequeño detalle para que a Mateo y a mí nunca nos falte amor." },
    { id: 10, texto: "Porque te volvería a elegir a vos, y a la familia que formamos, en esta y mil vidas más." }
  ],

  escena4_jardin: [
    { id: "f1", nombre: "Rosa de la Ternura", color: "#E75480", mensaje: "Gracias por cada noche de desvelo, cada cuento leído y cada caricia que calma." },
    { id: "f2", nombre: "Lirio de la Fortaleza", color: "#F8C8DC", mensaje: "Gracias por ser nuestro sostén y demostrar tanta valentía en cada etapa." },
    { id: "f3", nombre: "Magnolia de la Alegría", color: "#D4AF37", mensaje: "Gracias por llenar nuestra casa de risas, juegos y complicidad." },
    { id: "f4", nombre: "Peonía de la Paciencia", color: "#E75480", mensaje: "Gracias por escuchar siempre con el corazón abierto y enseñar con tanto amor." },
    { id: "f5", nombre: "Jazmín de la Compañía", color: "#F8C8DC", mensaje: "Gracias por caminar a la par mía, sosteniendo mi mano en todo momento." },
    { id: "f6", nombre: "Flor de Loto Dorada", color: "#D4AF37", mensaje: "Gracias por existir y hacer que la palabra 'Mamá' signifique amor incondicional." }
  ],

  escena5_galeria: [
    {
      id: "g1",
      foto: "/photos/recuerdo-1.jpg",
      placeholder: "Foto Familiar 1 (/public/photos/recuerdo-1.jpg)",
      epigrafe: "Tus abrazos son el lugar más seguro del mundo para Mateo."
    },
    {
      id: "g2",
      foto: "/photos/recuerdo-2.jpg",
      placeholder: "Foto Familiar 2 (/public/photos/recuerdo-2.jpg)",
      epigrafe: "Cómplices de aventuras, paseos y sonrisas interminables."
    },
    {
      id: "g3",
      foto: "/photos/recuerdo-3.jpg",
      placeholder: "Foto Familiar 3 (/public/photos/recuerdo-3.jpg)",
      epigrafe: "La dulzura en tu mirada cada vez que nos mirás."
    },
    {
      id: "g4",
      foto: "/photos/recuerdo-4.jpg",
      placeholder: "Foto Familiar 4 (/public/photos/recuerdo-4.jpg)",
      epigrafe: "Construyendo recuerdos que van a vivir para siempre en nuestro corazón."
    }
  ],

  escena6_mateo: {
    titulo: "Un dibujo y un mensajito para Mamá",
    mensaje: "Mami, gracias por abrazarme, cuidarme y quererme tanto. Sos la mejor mamá del mundo. Te amo muchísimo. ❤️",
    firma: "Con amor, Mateo.",
    dibujoUrl: "/photos/dibujo-mateo.jpg",
    placeholder: "Podés colocar un dibujo real de Mateo o una foto de ellos dos en /public/photos/dibujo-mateo.jpg"
  },

  escena7_carta: {
    saludo: "Mi amor:",
    parrafos: [
      "Hoy quiero recordarte lo maravillosa que sos. No solamente como mamá de nuestro hijo, sino también como la mujer con la que elegí compartir mi vida.",
      "Gracias por tu amor, por cada esfuerzo, por cada abrazo y por todos los pequeños detalles que hacen que nuestra familia sea tan especial.",
      "Verte como mamá de Mateo es uno de los regalos más hermosos que me dio la vida.",
      "Te amo y te volvería a elegir una y mil veces.",
      "Feliz Día de la Madre, mi amor."
    ],
    despedida: "Con todo mi amor,",
    firma: "Cristian ❤️"
  },

  easterEggs: [
    { id: "ee1", pista: "Secreto 1/3", mensaje: "✨ Secreto desbloqueado: ¿Sabías que cuando Mateo se ríe a carcajadas hace exactamente el mismo gesto que vos?" },
    { id: "ee2", pista: "Secreto 2/3", mensaje: "✨ Secreto desbloqueado: Vale por una cena romántica en nuestro lugar favorito y un día entero de mimos." },
    { id: "ee3", pista: "Secreto 3/3", mensaje: "✨ Secreto desbloqueado: Sos la reina absoluta de este equipo. Te amamos hasta el infinito y más allá." }
  ]
};
`,

  'src/components/SmartPhoto.jsx': `import React, { useState } from 'react';
import { Camera, Heart } from 'lucide-react';

export default function SmartPhoto({ src, alt, placeholderText, className = "" }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={\`relative overflow-hidden bg-gradient-to-br from-[#2d121e] via-[#4a1c2d] to-[#1a0910] flex items-center justify-center \${className}\`}>
      {!imgError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      ) : (
        <div className="p-6 text-center flex flex-col items-center justify-center h-full w-full border border-dorado/20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(231,84,128,0.15)_0%,transparent_70%)]" />
          <div className="w-12 h-12 rounded-full bg-intenso/20 border border-pastel/30 flex items-center justify-center mb-3 text-pastel shadow-glow">
            <Camera className="w-5 h-5" />
          </div>
          <p className="font-serif italic text-pastel text-sm mb-1">Espacio reservado para nuestro recuerdo</p>
          <p className="font-sans text-[11px] text-crema/60 max-w-[220px] leading-relaxed">
            {placeholderText || alt}
          </p>
          <Heart className="w-3.5 h-3.5 text-dorado/50 mt-3 animate-pulse" />
        </div>
      )}
    </div>
  );
}
`,

  'src/components/RomanticCanvas3D.jsx': `import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingHeartMesh({ position, scale, speed, color }) {
  const meshRef = useRef();

  const heartShape = useMemo(() => {
    const shape = new THREE.Shape();
    const x = 0, y = 0;
    shape.moveTo(x + 0.25, y + 0.25);
    shape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.2, y, x, y);
    shape.bezierCurveTo(x - 0.3, y, x - 0.3, y + 0.35, x - 0.3, y + 0.35);
    shape.bezierCurveTo(x - 0.3, y + 0.55, x - 0.1, y + 0.77, x + 0.25, y + 0.95);
    shape.bezierCurveTo(x + 0.6, y + 0.77, x + 0.8, y + 0.55, x + 0.8, y + 0.35);
    shape.bezierCurveTo(x + 0.8, y + 0.35, x + 0.8, y, x + 0.5, y);
    shape.bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25);
    return shape;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed) * 0.4;
    meshRef.current.rotation.z = Math.PI;
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale} rotation={[0, 0, Math.PI]}>
        <extrudeGeometry args={[heartShape, { depth: 0.12, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.04, bevelThickness: 0.04 }]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} roughness={0.2} metalness={0.6} />
      </mesh>
    </Float>
  );
}

export default function RomanticCanvas3D({ boost = false }) {
  const hearts = useMemo(() => [
    { position: [-2.8, 1.5, -3], scale: 0.45, speed: 1.2, color: "#E75480" },
    { position: [2.6, -1.2, -2.5], scale: 0.35, speed: 1.5, color: "#F8C8DC" },
    { position: [-1.8, -2.2, -4], scale: 0.5, speed: 0.9, color: "#D4AF37" },
    { position: [2.2, 2.0, -3.5], scale: 0.4, speed: 1.3, color: "#E75480" },
    { position: [0, 2.6, -4.5], scale: 0.3, speed: 1.1, color: "#F8C8DC" },
  ], []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#F8C8DC" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#D4AF37" />
        
        <Stars radius={50} depth={40} count={boost ? 1800 : 900} factor={3} saturation={0.5} fade speed={boost ? 2.5 : 1} />
        <Sparkles count={boost ? 120 : 55} scale={8} size={2.2} speed={0.4} opacity={0.7} color="#D4AF37" />
        <Sparkles count={45} scale={10} size={1.8} speed={0.3} opacity={0.5} color="#F8C8DC" />

        {hearts.map((h, i) => (
          <FloatingHeartMesh key={i} {...h} />
        ))}
      </Canvas>
    </div>
  );
}
`,

  'src/components/InteractiveEnvelope.jsx': `import React, { useState } from 'react';
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
`,

  'src/components/FloralGarden.jsx': `import React, { useState } from 'react';
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
              className={\`glass-card rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 \${
                activeFlower?.id === flower.id ? 'ring-2 ring-dorado shadow-gold' : ''
              }\`}
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
`,

  'src/components/SaveableCardModal.jsx': `import React, { useRef, useEffect } from 'react';
import { Download, X, Sparkles } from 'lucide-react';

export default function SaveableCardModal({ isOpen, onClose, config }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = 1080;
    canvas.height = 1350;

    const grad = ctx.createLinearGradient(0, 0, 1080, 1350);
    grad.addColorStop(0, '#2a0e19');
    grad.addColorStop(0.5, '#722F37');
    grad.addColorStop(1, '#1a0910');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 1350);

    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 4;
    ctx.strokeRect(60, 60, 960, 1230);
    ctx.strokeStyle = 'rgba(248, 200, 220, 0.35)';
    ctx.lineWidth = 2;
    ctx.strokeRect(80, 80, 920, 1190);

    ctx.fillStyle = '#D4AF37';
    for (let i = 0; i < 45; i++) {
      const x = 100 + Math.random() * 880;
      const y = 100 + Math.random() * 1150;
      const r = 1 + Math.random() * 2.5;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.textAlign = 'center';
    ctx.fillStyle = '#D4AF37';
    ctx.font = '500 28px Poppins, sans-serif';
    ctx.fillText(config.fechaEvento.toUpperCase(), 540, 200);

    ctx.fillStyle = '#FFF7F0';
    ctx.font = 'italic 64px "Playfair Display", serif';
    ctx.fillText('¡Feliz Día de la Madre,', 540, 340);

    ctx.fillStyle = '#F8C8DC';
    ctx.font = '115px "Great Vibes", cursive';
    ctx.fillText('Amor!', 540, 470);

    ctx.fillStyle = '#E75480';
    ctx.font = '90px serif';
    ctx.fillText('❤️', 540, 610);

    ctx.fillStyle = '#FFF7F0';
    ctx.font = '36px "Playfair Display", serif';
    const lines = [
      "“Gracias por ser el corazón de nuestra familia,",
      "por tu ternura infinita con Mateo y por",
      "convertir nuestra vida en un lugar maravilloso.",
      "Te amamos hoy y siempre.”"
    ];
    lines.forEach((line, index) => {
      ctx.fillText(line, 540, 740 + index * 62);
    });

    ctx.fillStyle = '#D4AF37';
    ctx.font = '72px "Great Vibes", cursive';
    ctx.fillText(config.remitentes, 540, 1120);
  }, [isOpen, config]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = \`Feliz-Dia-Mama-\${config.destinataria}.png\`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-modal rounded-3xl p-6 max-w-md w-full flex flex-col items-center relative border border-dorado/40">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-crema hover:bg-intenso transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-dorado text-xs uppercase tracking-widest mb-3">
          <Sparkles className="w-4 h-4" /> Recuerdo Descargable
        </div>
        <h3 className="font-serif text-xl text-crema mb-4 text-center">
          Tu tarjeta personalizada
        </h3>

        <div className="w-full aspect-[4/5] rounded-xl overflow-hidden border border-dorado/30 mb-5 shadow-2xl bg-noche">
          <canvas ref={canvasRef} className="w-full h-full object-contain" />
        </div>

        <button
          onClick={handleDownload}
          className="w-full py-3.5 rounded-full bg-gradient-to-r from-intenso to-bordo text-white font-sans font-medium text-sm shadow-glow flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
        >
          <Download className="w-4 h-4" /> Guardar tarjeta en mi celular
        </button>
      </div>
    </div>
  );
}
`,

  'src/App.jsx': `import React, { useState, useEffect, useRef } from 'react';
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
                      className={\`polaroid-card relative flex flex-col sm:flex-row items-center gap-8 \${
                        isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                      }\`}
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
                    className={\`relative p-6 rounded-3xl flex flex-col items-center justify-center transition-all duration-300 \${
                      isUnlocked
                        ? 'bg-gradient-to-br from-intenso/30 to-bordo/50 border border-dorado/60 shadow-glow'
                        : 'glass-card hover:border-pastel/40'
                    } \${isCurrent ? 'ring-2 ring-dorado scale-105' : ''}\`}
                  >
                    <motion.div
                      animate={isUnlocked ? { scale: [1, 1.18, 1] } : { scale: 1 }}
                      transition={{ repeat: isUnlocked ? Infinity : 0, duration: 1.6 }}
                    >
                      <Heart
                        className={\`w-10 h-10 sm:w-12 sm:h-12 transition-colors \${
                          isUnlocked
                            ? 'text-intenso fill-intenso drop-shadow-[0_0_12px_rgba(231,84,128,0.8)]'
                            : 'text-pastel/60'
                        }\`}
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
`,

  'public/photos/LEEME.txt': `Colocá acá las fotografías familiares con los siguientes nombres para que aparezcan automáticamente:
- historia-1.jpg
- historia-2.jpg
- historia-3.jpg
- historia-4.jpg
- historia-5.jpg
- recuerdo-1.jpg
- recuerdo-2.jpg
- recuerdo-3.jpg
- recuerdo-4.jpg
- dibujo-mateo.jpg
`,

  'public/audio/LEEME.txt': `Colocá acá tu canción romántica en formato MP3 con el nombre:
- melodia.mp3
`
};

// Crear directorios y escribir archivos
Object.entries(files).forEach(([filePath, content]) => {
  const fullPath = path.join(process.cwd(), filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`✅ Creado: ${filePath}`);
});

console.log('\n🎉 ¡Proyecto "Una sorpresa para Tatiana ❤️" generado con éxito!');
console.log('👉 Ejecutá ahora:');
console.log('   npm install');
console.log('   npm run dev');