import { notFound } from "next/navigation";
import { solicitudes } from "../../lib/datos";

export const dynamicParams = false;

export function generateStaticParams() {
  return solicitudes.map((solicitud) => ({
    id: solicitud.codigo,
  }));
}

export default async function SolicitudPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const solicitud = solicitudes.find((s) => s.codigo === id);

  if (!solicitud) {
    notFound();
  }

  return (
    <main>
      <h1>Solicitud: {solicitud.tramite}</h1>
      <p>Código: {solicitud.codigo}</p>
      <p>Alumno: {solicitud.alumno}</p>
      <p>Fecha: {solicitud.fecha}</p>
      <p>Estado: {solicitud.estado}</p>
    </main>
  );
}