import InputBusqueda from "./InputBusqueda";
import Boton from "./Boton";
import "./BarraBusquedaSms.css";

interface BarraBusquedaSmsProps {
  busqueda?: string;
  onBuscar?: (valor: string) => void;
}

export default function BarraBusquedaSms({
  busqueda,
  onBuscar,
}: BarraBusquedaSmsProps) {
  return (
    <div className="molecula-busqueda-sms">
      <InputBusqueda valor={busqueda} onChange={onBuscar} />
      <Boton texto="SMS" variante="sms" />
    </div>
  );
}
