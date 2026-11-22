"use client";

import { useRouter } from "next/navigation";
import "./EncabezadoAddMember.css";

export default function EncabezadoAddMember() {
  const router = useRouter();
  return (
    <header className="molecula-header-add">
      <img src="/Group 11.png" alt="Logo" style={{ height: "32px", marginBottom: "4px" }} />
      <div className="header-add-titulo-fila">
        <button type="button" className="btn-volver" onClick={() => router.push("/members")}>
          ‹
        </button>
        <h1 className="titulo-add-member">Add Member</h1>
        <div style={{ width: "24px" }}></div>
      </div>
    </header>
  );
}
