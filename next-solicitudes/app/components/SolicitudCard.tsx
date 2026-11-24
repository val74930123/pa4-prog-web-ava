import Link from "next/link";

export default function SolicitudCard({
  codigo,
  tramite,
  estado,
}: {
  codigo: string;
  tramite: string;
  estado: string;
}) {
  return (
    <div className="card">
      <h2>{tramite}</h2>
      <p>Estado: {estado}</p>
      <Link href={`/solicitudes/${codigo}`}>Ver detalles</Link>
    </div>
  );
}