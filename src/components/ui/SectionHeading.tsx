type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClasses}`}>
      {eyebrow && (
        <span
          className={`text-sm font-semibold uppercase tracking-wide ${
            light ? "text-brand-pink-light" : "text-brand-pink"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-brand-blue"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base sm:text-lg ${light ? "text-white/85" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
