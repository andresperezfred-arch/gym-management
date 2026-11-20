import { FeatureItem } from "../atoms/FeatureItem";

type PlanFeaturesListProps = {
  features: string[];
};

export function PlanFeaturesList({ features }: PlanFeaturesListProps) {
  return (
    <ul className="mt-4 space-y-2">
      {features.map((item) => (
        <FeatureItem key={item} label={item} />
      ))}
    </ul>
  );
}