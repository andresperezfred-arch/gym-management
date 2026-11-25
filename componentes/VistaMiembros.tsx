"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BarraBusquedaSms from "./BarraBusquedaSms";
import BarraFiltros from "./BarraFiltros";
import TarjetaMiembro, { Member } from "./TarjetaMiembro";
import Boton from "./Boton";
import BarraInferior from "./BarraInferior";
import "./VistaMiembros.css";

export default function VistaMiembros({ members }: { members: Member[] }) {
  const router = useRouter();
  const [listaMiembros, setListaMiembros] = useState<Member[]>(
    Array.isArray(members) ? members : []
  );

  const handleEliminar = async (id: string) => {
    const confirmar = confirm("¿Seguro que deseas eliminar este miembro?");
    if (!confirmar) return;

    const respuesta = await fetch(
      `https://mockapi.io{id}`,
      { method: "DELETE" }
    );

    if (respuesta.ok) {
      setListaMiembros((prev) => prev.filter((m) => m.id !== id));
    } else {
      alert("No se pudo eliminar el registro en MockAPI.");
    }
  };

  return (
    <div className="container">
      {/* Encabezado verde superior */}
      <header className="organismo-header">
        <div className="header-top">
          <button
            type="button"
            onClick={() => router.push("/")}
            style={{
              background: "transparent",
              border: "none",
              color: "#ffffff",
              fontSize: "22px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>

          <img
            src="/Group 11.png"
            alt="Training Center Logo"
            style={{ height: "34px", objectFit: "contain" }}
          />
          <div style={{ width: "24px" }}></div>
        </div>
        <BarraBusquedaSms />
      </header>

      {/* Fila de 3 filtros */}
      <BarraFiltros />

      {/* Cuadrícula de 2 columnas con tus miembros de la API */}
      <section className="organismo-grid-miembros">
        {listaMiembros.map((member) => (
          <TarjetaMiembro
            key={member.id}
            member={member}
            onDelete={handleEliminar}
          />
        ))}
      </section>

      {/* Botón flotante rojo + que abre Add Member */}
      <Boton
        texto="+"
        variante="flotante"
        onClick={() => router.push("/add-member")}
      />

      {/* Barra inferior oscura */}
      <BarraInferior />
    </div>
  );
}
