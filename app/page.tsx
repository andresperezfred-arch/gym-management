import Link from "next/link";
import { SelectPlanSection } from "@/components/organisms/SelectPlanSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Link href="/members" style={{ textDecoration: "none", display: "block" }}>
        <SelectPlanSection />
      </Link>
    </main>
  );
}
