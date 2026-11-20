import SelectFiltro from "./SelectFiltro";
import "./BarraFiltros.css";

export default function BarraFiltros() {
  return (
    <div className="molecula-barra-filtros">
      <SelectFiltro opciones={["All Member", "Active", "Expired"]} />
      <SelectFiltro opciones={["All Plans", "Standard", "Premium", "Golden"]} />
      <SelectFiltro opciones={["Select Batch", "Morning", "Evening"]} />
    </div>
  );
}
