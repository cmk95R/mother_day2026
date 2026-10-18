import React, { useState } from 'react';
import { Camera, Heart } from 'lucide-react';

export default function SmartPhoto({ src, alt, placeholderText, className = "" }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#2d121e] via-[#4a1c2d] to-[#1a0910] flex items-center justify-center ${className}`}>
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
