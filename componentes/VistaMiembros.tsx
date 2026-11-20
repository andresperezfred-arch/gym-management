"use client";

import BarraBusquedaSms from "./BarraBusquedaSms";
import BarraFiltros from "./BarraFiltros";
import TarjetaMiembro, { Member } from "./TarjetaMiembro";
import Boton from "./Boton";
import BarraInferior from "./BarraInferior";
import "./VistaMiembros.css";

export default function VistaMiembros({ members }: { members: Member[] }) {
  return (
    <div className="container">
      {/* Encabezado verde superior */}
      <header className="organismo-header">
        <div className="header-top">
          <button
            type="button"
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
        {Array.isArray(members) &&
          members.map((member) => (
            <TarjetaMiembro key={member.id} member={member} />
          ))}
      </section>

      {/* Botón flotante rojo + */}
      <Boton texto="+" variante="flotante" />

      {/* Barra inferior oscura */}
      <BarraInferior />
    </div>
  );
}
