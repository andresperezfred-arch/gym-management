import "./FilaFormulario.css";

interface FilaFormularioProps {
  etiqueta: React.ReactNode;
  children: React.ReactNode;
}

export default function FilaFormulario({ etiqueta, children }: FilaFormularioProps) {
  return (
    <div className="molecula-fila-form">
      <label className="form-etiqueta">{etiqueta}</label>
      <div className="form-control">{children}</div>
    </div>
  );
}
