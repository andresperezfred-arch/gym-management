import Link from "next/link";
import { SelectPlanSection } from "@/components/organisms/SelectPlanSection";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full max-w-[430px] bg-black flex flex-col justify-between">
      <Link href="/members" className="w-full flex-1" style={{ textDecoration: "none" }}>
        <SelectPlanSection />
      </Link>
    </main>
  );
}
