type PlanHeadingProps = {
  text: string;
  variant?: "title" | "subtitle" | "planName";
};

export function PlanHeading({ text, variant = "planName" }: PlanHeadingProps) {
  if (variant === "title") {
    return (
      <h1 className="text-center text-3xl font-bold tracking-wide text-[#84cc16]">
        {text}
      </h1>
    );
  }

  if (variant === "subtitle") {
    return (
      <p className="mt-1 text-center text-sm font-medium text-[#84cc16]">
        {text}
      </p>
    );
  }

  return (
    <h2 className="text-center text-xl font-extrabold uppercase tracking-wider text-[#84cc16]">
      {text}
    </h2>
  );
}