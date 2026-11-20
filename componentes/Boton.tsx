import "./Boton.css";

interface BotonProps {
  texto: string;
  variante?: "sms" | "flotante";
  onClick?: () => void;
}

export default function Boton({ texto, variante = "sms", onClick }: BotonProps) {
  return (
    <button
      className={variante === "flotante" ? "atomo-boton-flotante" : "atomo-boton-sms"}
      onClick={onClick}
      type="button"
    >
      {texto}
    </button>
  );
}
