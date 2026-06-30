type LogoProps = {
  variant?: "full" | "compact";
  light?: boolean;
  className?: string;
};

export function Logo({ variant = "full", light = false, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
        <circle cx="18" cy="18" r="18" fill={light ? "#FFFFFF" : "#16498C"} />
        <path
          d="M7 19c1.5 0 1.5-6 3-6s1.5 9 3 9 1.5-12 3-12 1.5 9 3 9 1.5-3 3-3"
          stroke={light ? "#16498C" : "#FFFFFF"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`text-xl font-bold ${light ? "text-white" : "text-brand-pink"}`}>
          Vitaly
        </span>
        {variant === "full" && (
          <span
            className={`text-[10px] font-semibold uppercase tracking-wide ${
              light ? "text-white/80" : "text-brand-blue"
            }`}
          >
            Aparelhos Auditivos
          </span>
        )}
      </span>
    </span>
  );
}
