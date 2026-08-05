type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClass}`}>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-ambar-taller">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-hueso sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-xl text-sm leading-relaxed text-acero sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
