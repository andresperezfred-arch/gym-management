import Avatar from "./Avatar";
import IconoAccion from "./IconoAccion";
import "./TarjetaMiembro.css";

export interface Member {
  id: string;
  name: string;
  avatar: string;
  memberId: string;
  planExpiry: string;
  dueAmount: string;
}

export default function TarjetaMiembro({ member }: { member: Member }) {
  return (
    <div className="molecula-tarjeta-miembro">
      <div className="tarjeta-cabecera">
        <Avatar src={member.avatar} alt={member.name} />
        <div className="tarjeta-eliminar">
          <IconoAccion icono="/basurero.svg" />
        </div>
      </div>

      <div className="tarjeta-datos">
        <p>
          <span className="dato-label">Name :</span> {member.name}
        </p>
        <p className="fila-mid">
          <img src="/tarjeta.svg" alt="ID" className="icono-mid" />
          <span className="dato-label">M ID :</span> {member.memberId || member.id}
        </p>
        <p>
          <span className="dato-label">Plan Expiry :</span> {member.planExpiry}
        </p>
        <p>
          <span className="dato-label">Due Amount :</span> {member.dueAmount}
        </p>
      </div>

      <div className="tarjeta-acciones">
        <IconoAccion icono="/llamada.svg" etiqueta="Call" />
        <IconoAccion icono="/whatsap.svg" etiqueta="Whatsapp" />
        <IconoAccion icono="/return-svgrepo-com.svg" etiqueta="Renew Plan" />
        <IconoAccion icono="/mensaje.svg" etiqueta="Message" />
        <IconoAccion icono="/prohibido.svg" etiqueta="Block" />
      </div>
    </div>
  );
}
