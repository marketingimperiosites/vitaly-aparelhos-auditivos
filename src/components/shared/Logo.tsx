import Image from "next/image";

type LogoProps = {
  onDark?: boolean;
  priority?: boolean;
  className?: string;
};

export function Logo({ onDark = false, priority = false, className = "h-16 w-16" }: LogoProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${
        onDark ? "rounded-2xl bg-white p-2" : ""
      } ${className}`}
    >
      <Image
        src="/logo/vitaly-logo-transparente.png"
        alt="Vitaly Aparelhos Auditivos"
        width={512}
        height={512}
        priority={priority}
        className="h-full w-full object-contain"
      />
    </span>
  );
}

type LogoIconProps = {
  priority?: boolean;
  className?: string;
};

export function LogoIcon({ priority = false, className = "h-10" }: LogoIconProps) {
  return (
    <Image
      src="/logo/vitaly-icon.png"
      alt=""
      width={274}
      height={182}
      priority={priority}
      className={`w-auto object-contain ${className}`}
    />
  );
}
