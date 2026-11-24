import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Solicitudes Academicas",
  description: "Gestion de solicitudes academicas con Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header>
          <strong>Sistema de Solicitudes Academicas . Next.js</strong>
          <nav>
            <Link href="/">Inicio</Link>
            <Link href="/ssg">SSG</Link>
            <Link href="/ssr">SSR</Link>
            <Link href="/solicitudes/001">Solicitudes</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}