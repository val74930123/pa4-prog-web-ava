export const dynamic = 'force-dynamic';

export default function SSRPage() {
  const instante = new Date().toLocaleString();

  return (
    <main>
      <h1>Consulta de Solicitudes Académicas (SSR)</h1>
      <p>Esta página se genera en el servidor en cada solicitud.</p>
      <p>Hora actual del servidor: {instante}</p>
    </main>
  );
}