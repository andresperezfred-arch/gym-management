import "./InputLinea.css";

interface InputLineaProps {
  value?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
}

export default function InputLinea({ value, defaultValue, onChange }: InputLineaProps) {
  return (
    <input
      type="text"
      className="atomo-input-linea"
      value={value}
      defaultValue={defaultValue}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
}
