import IconoAccion from "./IconoAccion";
import "./BarraInferior.css";

export default function BarraInferior() {
  return (
    <nav className="molecula-barra-inferior">
      <IconoAccion icono="/2personas.svg" etiqueta="Members" />
      <IconoAccion icono="/cruz.svg" etiqueta="Dashboard" />
      <IconoAccion icono="/dinero.svg" etiqueta="Collection" />
      <IconoAccion icono="/edificio.svg" etiqueta="Gym" />
      <IconoAccion icono="/papel.svg" etiqueta="Today Report" />
    </nav>
  );
}
