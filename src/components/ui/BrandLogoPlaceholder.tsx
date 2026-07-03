import Image from "next/image";
import type { MarcaParceira } from "@/types/marca";

export function BrandLogoPlaceholder({ nome, logoSrc }: MarcaParceira) {
  if (logoSrc) {
    return (
      <div className="flex h-32 items-center justify-center rounded-xl border border-gray-100 bg-white p-6">
        <Image
          src={logoSrc}
          alt={`Logo ${nome}`}
          width={200}
          height={80}
          className="h-auto max-h-16 w-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white px-4 text-center text-sm font-medium text-gray-400">
      {nome}
    </div>
  );
}
