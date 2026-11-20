import "./SelectFiltro.css";

interface SelectFiltroProps {
  opciones: string[];
  onChange?: (valor: string) => void;
}

export default function SelectFiltro({ opciones, onChange }: SelectFiltroProps) {
  return (
    <select
      className="atomo-select-filtro"
      onChange={(e) => onChange && onChange(e.target.value)}
    >
      {opciones.map((opcion) => (
        <option key={opcion} value={opcion}>
          {opcion}
        </option>
      ))}
    </select>
  );
}
