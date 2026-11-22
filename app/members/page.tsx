import VistaMiembros from "@/componentes/VistaMiembros";

export default async function MembersPage() {
  const data = await fetch(
    "https://6b006aee7fc363ccff0a304e.mockapi.io/api/v1/miembros",
    { cache: "no-store" }
  );
  const members = await data.json();

  return <VistaMiembros members={members} />;
}
