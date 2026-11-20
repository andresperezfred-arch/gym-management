import { PlanHeading } from "../atoms/PlanHeading";
import { PlanPrice } from "../atoms/PlanPrice";

type PlanHeaderProps = {
  name: string;
  priceLabel: string;
  periodLabel: string;
};

export function PlanHeader({ name, priceLabel, periodLabel }: PlanHeaderProps) {
  return (
    <div>
      <PlanHeading text={name} variant="planName" />
      <PlanPrice priceLabel={priceLabel} periodLabel={periodLabel} />
    </div>
  );
}