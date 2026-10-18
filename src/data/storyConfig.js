export const STORY_CONFIG = {
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
