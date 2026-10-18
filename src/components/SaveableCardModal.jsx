import React, { useRef, useEffect } from 'react';
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
    ctx.fillText(`${config.destinataria}!`, 540, 470);

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
    link.download = `Feliz-Dia-Mama-${config.destinataria}.png`;
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
