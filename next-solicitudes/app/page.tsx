import Link from "next/link";
import SolicitudCard from "./components/SolicitudCard";
import { solicitudes, tramites } from "./lib/datos";

export default function Home() {
  return (
    <main>
      <h1>Gestión de Solicitudes Académicas</h1>
      <p>Portal de trámites y seguimiento de solicitudes con Next.js</p>

      <h2>Solicitudes Registradas</h2>
      <div className="products-grid">
        {solicitudes.map((solicitud) => (
          <SolicitudCard
            key={solicitud.codigo}
            codigo={solicitud.codigo}
            tramite={solicitud.tramite}
            estado={solicitud.estado}
          />
        ))}
      </div>

      <h2>Trámites Disponibles</h2>
      <div className="products-grid">
        {tramites.map((tramite) => (
          <p key={tramite.id}>
            <Link href="/ssg">{tramite.nombre} ({tramite.plazo})</Link>
          </p>
        ))}
      </div>
    </main>
  );
}