"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Foto = {
  src: string;
  alt: string;
};

type CarrosselFotosProps = {
  fotos: Foto[];
  intervaloMs?: number;
  className?: string;
};

export function CarrosselFotos({ fotos, intervaloMs = 4000, className = "" }: CarrosselFotosProps) {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    if (fotos.length <= 1) return;

    const id = setInterval(() => {
      setIndiceAtual((atual) => (atual + 1) % fotos.length);
    }, intervaloMs);

    return () => clearInterval(id);
  }, [fotos.length, intervaloMs]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {fotos.map((foto, index) => (
        <Image
          key={foto.src}
          src={foto.src}
          alt={foto.alt}
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 448px, 100vw"
          className={`object-cover transition-opacity duration-700 ${
            index === indiceAtual ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {fotos.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/30 px-3 py-1.5 backdrop-blur-sm">
          {fotos.map((foto, index) => (
            <button
              key={foto.src}
              type="button"
              aria-label={`Ver foto ${index + 1}`}
              onClick={() => setIndiceAtual(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === indiceAtual ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
