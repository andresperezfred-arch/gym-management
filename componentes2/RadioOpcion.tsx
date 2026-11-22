import "./RadioOpcion.css";

interface RadioOpcionProps {
  label: string;
  checked?: boolean;
  onChange?: () => void;
}

export default function RadioOpcion({ label, checked, onChange }: RadioOpcionProps) {
  return (
    <button type="button" className="atomo-radio-svg" onClick={onChange}>
      <img
        src={checked ? "/checknegro.svg" : "/checkblanco.svg"}
        alt={label}
        style={{ width: "16px", height: "16px" }}
      />
      <span>{label}</span>
    </button>
  );
}
