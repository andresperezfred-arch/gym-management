"use client";

import { useState } from "react";
import { GymLogo } from "../atoms/GymLogo";
import { PlanHeading } from "../atoms/PlanHeading";
import { PlanCard, PlanOption } from "./PlanCard";

const PLANS: PlanOption[] = [
  {
    id: "standard",
    name: "STANDARD",
    priceLabel: "40$",
    periodLabel: "Per Year",
    features: [
      "Add unlimited members",
      "Dashboard",
      "Whats'up integration",
      "Data Backup every day",
      "Gym revenue report",
      "Email support",
    ],
  },
  {
    id: "premium",
    name: "PREMIUM",
    priceLabel: "50$",
    periodLabel: "Per Year",
    features: [
      "All Features in STANDARD",
      "Workout Video page",
      "Diet Plan Page",
    ],
  },
  {
    id: "golden",
    name: "GOLDEN",
    priceLabel: "60$",
    periodLabel: "Per Year",
    features: [
      "All Features in STANDARD",
      "All Features in PREMIUM",
      "Facebook integration",
      "Instgram marketing page integration",
      "Shop Page [ you can sell supplement & Protein ]",
      "Email support",
    ],
  },
];

export function SelectPlanSection() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("standard");

  return (
    <section className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col justify-center bg-black px-4 py-7 text-white">
      <header className="mb-5 text-center">
        <GymLogo />
        <PlanHeading text="Select Your Plan" variant="title" />
        <PlanHeading text="7 Days Free Trial" variant="subtitle" />
      </header>

      <div className="space-y-4">
        {PLANS.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            selected={selectedPlanId === plan.id}
            onSelect={setSelectedPlanId}
          />
        ))}
      </div>
    </section>
  );
}