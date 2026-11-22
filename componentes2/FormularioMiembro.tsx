"use client";

import { useState } from "react";
import EncabezadoAddMember from "./EncabezadoAddMember";
import FilaFormulario from "./FilaFormulario";
import InputLinea from "./InputLinea";
import RadioOpcion from "./RadioOpcion";
import BotonUpload from "./BotonUpload";
import BotonSave from "./BotonSave";
import "./FormularioMiembro.css";

export default function FormularioMiembro() {
  const [guardando, setGuardando] = useState(false);
  const [training, setTraining] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    avatar: "https://pravatar.cc",
    mobile: "",
    gender: "",
    memberId: "8",
    planExpiry: "01/10/2023",
    plan: "General",
    batchTime: "6.00am to 7.00am",
    dueAmount: "0",
  });

  const handleGuardar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert("Por favor escribe el nombre en Name -:");
      return;
    }

    try {
      setGuardando(true);
      const respuesta = await fetch(
        "https://6b006aee7fc363ccff0a304e.mockapi.io/api/v1/miembros",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!respuesta.ok) {
        throw new Error("No se pudo guardar en MockAPI");
      }

      window.location.href = "/";
    } catch (error) {
      alert("Error al conectar con MockAPI. Revisa tu conexión.");
      setGuardando(false);
    }
  };

  return (
    <div className="container-add">
      <EncabezadoAddMember />

      <form className="organismo-formulario" onSubmit={handleGuardar}>
        <FilaFormulario etiqueta="Name -:">
          <InputLinea
            value={formData.name}
            onChange={(val) => setFormData({ ...formData, name: val })}
          />
        </FilaFormulario>

        <FilaFormulario etiqueta="Upload Photo -:">
          <BotonUpload
            onClick={() => {
              const url = prompt(
                "Pega el enlace directo de la foto (Postimages):",
                formData.avatar
              );
              if (url) setFormData({ ...formData, avatar: url });
            }}
          />
        </FilaFormulario>

        <FilaFormulario etiqueta="Mobile No. -:">
          <InputLinea
            value={formData.mobile}
            onChange={(val) => setFormData({ ...formData, mobile: val })}
          />
        </FilaFormulario>

        <FilaFormulario
          etiqueta={
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <img src="/personas2.svg" alt="Género" style={{ width: "16px" }} /> -:
            </span>
          }
        >
          <div className="grupo-radios">
            <RadioOpcion
              label="Male"
              checked={formData.gender === "Male"}
              onChange={() => setFormData({ ...formData, gender: "Male" })}
            />
            <RadioOpcion
              label="Female"
              checked={formData.gender === "Female"}
              onChange={() => setFormData({ ...formData, gender: "Female" })}
            />
          </div>
        </FilaFormulario>

        <FilaFormulario etiqueta="Member No -:">
          <InputLinea
            value={formData.memberId}
            onChange={(val) => setFormData({ ...formData, memberId: val })}
          />
        </FilaFormulario>

        <FilaFormulario etiqueta="Measurement -:">
          <div className="grid-medidas">
            <span>Height : .......</span>
            <span>Weight : .......</span>
            <span>Chest : .......</span>
            <span>Waist : .......</span>
          </div>
        </FilaFormulario>

        <FilaFormulario etiqueta="Date of Birth -:">
          <InputLinea />
        </FilaFormulario>

        <FilaFormulario etiqueta="Address -:">
          <InputLinea />
        </FilaFormulario>

        <FilaFormulario etiqueta="Training -:">
          <div className="grupo-radios">
            <RadioOpcion
              label="Trainer"
              checked={training === "Trainer"}
              onChange={() => setTraining("Trainer")}
            />
            <RadioOpcion
              label="Personal"
              checked={training === "Personal"}
              onChange={() => setTraining("Personal")}
            />
          </div>
        </FilaFormulario>

        <FilaFormulario etiqueta="Plan -:">
          <select
            className="select-linea"
            value={formData.plan}
            onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
          >
            <option>General</option>
            <option>Standard</option>
            <option>Premium</option>
            <option>Golden</option>
          </select>
        </FilaFormulario>

        <FilaFormulario etiqueta="Batch Time -:">
          <select
            className="select-linea"
            value={formData.batchTime}
            onChange={(e) => setFormData({ ...formData, batchTime: e.target.value })}
          >
            <option>6.00am to 7.00am</option>
            <option>7.00am to 8.00am</option>
            <option>5.00pm to 6.00pm</option>
          </select>
        </FilaFormulario>

        <FilaFormulario etiqueta="Joining Date -:">
          <InputLinea
            value={formData.planExpiry}
            onChange={(val) => setFormData({ ...formData, planExpiry: val })}
          />
        </FilaFormulario>

        <FilaFormulario etiqueta="Paid Amount -:">
          <InputLinea />
        </FilaFormulario>

        <FilaFormulario etiqueta="Due Amount -:">
          <InputLinea
            value={formData.dueAmount}
            onChange={(val) => setFormData({ ...formData, dueAmount: val })}
          />
        </FilaFormulario>

        <FilaFormulario etiqueta="Payment Method -:">
          <InputLinea defaultValue="Cash" />
        </FilaFormulario>

        <div className="contenedor-save">
          <BotonSave disabled={guardando} />
        </div>
      </form>
    </div>
  );
}
