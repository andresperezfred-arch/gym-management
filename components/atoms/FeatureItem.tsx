type FeatureItemProps = {
  label: string;
};

export function FeatureItem({ label }: FeatureItemProps) {
  return (
    <li className="flex items-start gap-2 text-[11px] leading-snug tracking-tight text-neutral-100">
      <span className="mt-0.5 shrink-0 text-[10px] text-white" aria-hidden="true">
        ★
      </span>
      <span className="whitespace-nowrap">{label}</span>
    </li>
  );
}