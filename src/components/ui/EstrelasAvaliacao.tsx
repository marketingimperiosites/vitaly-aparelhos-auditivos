import { Star } from "lucide-react";

type EstrelasAvaliacaoProps = {
  nota: number;
  size?: number;
  className?: string;
};

export function EstrelasAvaliacao({ nota, size = 16, className = "" }: EstrelasAvaliacaoProps) {
  return (
    <div className={`flex items-center gap-0.5 text-amber-400 ${className}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={size}
          fill={i < nota ? "currentColor" : "none"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
