import "./IconoAccion.css";

interface IconoAccionProps {
  icono: string;
  etiqueta?: string;
  onClick?: () => void;
}

export default function IconoAccion({ icono, etiqueta, onClick }: IconoAccionProps) {
  return (
    <button className="atomo-icono-accion" onClick={onClick} type="button">
      <img src={icono} alt={etiqueta || "icono"} className="atomo-icono-img" />
      {etiqueta && <span className="atomo-icono-etiqueta">{etiqueta}</span>}
    </button>
  );
}
