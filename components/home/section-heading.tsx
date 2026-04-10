type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <div className="eyebrow">
        <span className="eyebrow-dot" />
        {eyebrow}
      </div>
      <div className="max-w-2xl space-y-3">
        <h2 className="balanced-title font-[family-name:var(--font-display)] text-[2rem] leading-[0.96] tracking-[-0.04em] text-[var(--foreground)] sm:text-[2.75rem]">
          {title}
        </h2>
        <p className="max-w-xl text-[0.98rem] leading-7 text-[var(--muted)] sm:text-[1.04rem]">
          {description}
        </p>
      </div>
    </div>
  );
}
