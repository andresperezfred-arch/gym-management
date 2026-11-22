import { PlanFeaturesList } from "../molecules/PlanFeaturesList";
import { PlanHeader } from "../molecules/PlanHeader";

export type PlanOption = {
  id: string;
  name: string;
  priceLabel: string;
  periodLabel: string;
  features: string[];
};

type PlanCardProps = {
  plan: PlanOption;
  selected?: boolean;
  onSelect?: (planId: string) => void;
};

export function PlanCard({ plan, selected = false, onSelect }: PlanCardProps) {
  return (
    <article
      onClick={() => onSelect?.(plan.id)}
      className={`cursor-pointer rounded-2xl border bg-black p-5 transition ${
        selected
          ? "border-[#a3e635] ring-2 ring-[#84cc16]/60"
          : "border-[#65a30d] hover:border-[#84cc16]"
      }`}
    >
      <PlanHeader
        name={plan.name}
        priceLabel={plan.priceLabel}
        periodLabel={plan.periodLabel}
      />
      <PlanFeaturesList features={plan.features} />
    </article>
  );
}