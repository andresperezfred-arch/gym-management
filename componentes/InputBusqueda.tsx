import "./InputBusqueda.css";

interface InputBusquedaProps {
  placeholder?: string;
  valor?: string;
  onChange?: (valor: string) => void;
}

export default function InputBusqueda({
  placeholder = "Name/ Mobile",
  valor,
  onChange,
}: InputBusquedaProps) {
  return (
    <div className="atomo-busqueda-contenedor">
      <img
        src="/lupa.svg"
        alt="Buscar"
        style={{ width: "14px", height: "14px", marginRight: "8px" }}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={valor}
        onChange={(e) => onChange && onChange(e.target.value)}
        className="atomo-busqueda-input"
      />
    </div>
  );
}
