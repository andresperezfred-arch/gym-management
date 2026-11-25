"use client";

import { useEffect, useState } from "react";
import { GymLogo } from "../atoms/GymLogo";
import { PlanHeading } from "../atoms/PlanHeading";
import { PlanCard, PlanOption } from "./PlanCard";

type MockApiPlan = {
  id: string;
  nombre?: string;
  name?: string;
  precio?: number | string;
  duracion?: number;
  beneficios?: string[];
  features?: string[];
  descripcion?: string;
  activo?: boolean;
};

function mapMockApiPlan(item: MockApiPlan): PlanOption {
  const rawName = (item.nombre ?? item.name ?? "PLAN").toUpperCase();
  const periodText =
    item.duracion === 365
      ? "Per Year"
      : item.duracion
      ? `${item.duracion} days`
      : "Per Year";

  return {
    id: String(item.id),
    name: rawName,
    priceLabel: `${item.precio ?? 0}$`,
    periodLabel: periodText,
    features: Array.isArray(item.beneficios)
      ? item.beneficios
      : Array.isArray(item.features)
      ? item.features
      : [],
  };
}

export function SelectPlanSection() {
  const [plans, setPlans] = useState<PlanOption[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState<string>("1");
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl =
      process.env.NEXT_PUBLIC_MOCKAPI_PLANS_URL ||
      "https://6b06e0fb57fa1297bb565b8d.mockapi.io/api/v1/registro";

    let isMounted = true;

    async function fetchPlans() {
      try {
        const response = await fetch(apiUrl, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const data: MockApiPlan[] = await response.json();
        const activePlans = Array.isArray(data)
          ? data.filter((plan) => plan.activo !== false)
          : [];

        if (isMounted) {
          const mapped = activePlans.map(mapMockApiPlan);
          setPlans(mapped);
          if (mapped.length > 0) {
            setSelectedPlanId((prev) =>
              mapped.some((p) => p.id === prev) ? prev : mapped[0].id
            );
          }
        }
      } catch {
        if (isMounted) {
          setErrorMsg("No se pudieron cargar los planes desde MockAPI.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchPlans();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col justify-center bg-black px-4 py-7 text-white">
      <header className="mb-5 text-center">
        <GymLogo />
        <PlanHeading text="Select Your Plan" variant="title" />
        <PlanHeading text="7 Days Free Trial" variant="subtitle" />
      </header>

      {loading && (
        <p className="py-6 text-center text-sm text-neutral-300">
          Cargando planes desde MockAPI...
        </p>
      )}

      {errorMsg && (
        <p className="py-4 text-center text-xs text-red-400">{errorMsg}</p>
      )}

      {!loading && !errorMsg && (
        <div className="space-y-4">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              selected={selectedPlanId === plan.id}
              onSelect={setSelectedPlanId}
            />
          ))}
        </div>
      )}
    </section>
  );
}