type PlanPriceProps = {
  priceLabel: string;
  periodLabel: string;
};

export function PlanPrice({ priceLabel, periodLabel }: PlanPriceProps) {
  return (
    <p className="mt-1 text-center text-base font-semibold text-[#84cc16]">
      <span>{priceLabel}</span>{" "}
      <span className="font-normal text-[#a3e635]">{periodLabel}</span>
    </p>
  );
}