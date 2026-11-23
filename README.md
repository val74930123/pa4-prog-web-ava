# README — Evaluación

> **Curso:** PROGRAMACION WEB - II  
> **Código:** 30690  
> **Evaluación:** [PA4]  
> **Equipo:** [GRUPO 5]  

## 1. Integrantes

| Integrante | Rol | Aporte principal |
|---|---|---|
| [Valeria Ravina Pérez] | [Desarrollador Frontend (Act. 1A)] | Consumo de API con Axios, manejo de errores y validación de respuestas en React; API Node.js de apoyo  |
| [Alejandro Daniel Quispe Nieto] | [Desplieue del frontend en vercel] | [desplegar en Vercel el frontend Next.js y verificar sus rutas principales,] |
| Rodrigo Arturo Paredes Santa Cruz | Desarrollador Frontend - Next.js (Act. 2) | Implementación de vistas SSG, SSR y rutas dinámicas de solicitudes en Next.js |
| [Nombre 4] | [Rol] | [Aporte] |
| Alejandro Chero Izaguirre | Preparación para producción (Act. 4) | Optimización de compilación con Vite y Next.js, configuración de variables de entorno y registro de peticiones HTTP mediante logs |

## 2. Descripción y objetivo

**Problema:**  
En el caso progresivo "Plataforma de Gestión de Solicitudes Académicas", el frontend debe conectarse con servicios Node.js, controlar el acceso de usuarios autenticados, evaluar alternativas de renderizado, publicarse en un entorno desplegado y prepararse para producción.

**Objetivo:**  
Evidenciar la integración de APIs y sesiones JWT en React, la optimización con Next.js mediante SSR/SSG y rutas dinámicas, el despliegue en Vercel y la preparación del código para producción (minificación, Webpack/Babel, variables de entorno, logs y monitoreo).

**Solución desarrollada:**  
- **Actividad 1 – Consumo de APIs y sesiones en React:** frontend React integrado con una API Node.js mediante Axios, con manejo de errores, validación de respuestas y flujo de sesión con JWT.
- **Actividad 2 – Next.js:** proyecto con SSR y/o SSG en dos vistas, al menos una ruta dinámica y justificación técnica de la elección.
- **Actividad 3 – Vercel:** despliegue del frontend con URL de revisión y verificación de rutas y vistas.
- **Actividad 4 – Producción:** minificación/optimización, configuración de Webpack y Babel, variables de entorno y evidencias de logs/monitoreo.

## 3. Cómo ejecutar o revisar

```bash
# Terminal 1 - API Node.js (puerto 4000)
cd backend
npm install
npm start

# Terminal 2 - Frontend React (puerto 5173)
cd frontend-react
npm install
npm run dev

# Terminal 3 - Aplicación Next.js (puerto 3000)
cd next-solicitudes
npm install
npm run build
npm run start

# [AGREGUEN AQUI SUS COMANDOS!!!]
```

**Pasos de revisión:**
1. Encender el backend y el frontend con los comandos de arriba.
2. Abrir `http://localhost:5173` y verificar que carga la lista de solicitudes.
3. Registrar una solicitud con el formulario y verificar que aparece en la lista.
4. Abrir `http://localhost:3000` para revisar la aplicación Next.js: Entrar a la vista estática (`/ssg`), la vista dinámica en servidor (`/ssr`, comprobando que la hora cambie al recargar) y la ruta dinámica de detalle (`/solicitudes/001`, `/solicitudes/002` y `/solicitudes/100` para verificar el error 404).
5. Verificación de producción: Revisar la terminal del backend y comprobar que se registran las peticiones HTTP realizadas desde React, incluyendo el método, la ruta, el código de respuesta y el tiempo de respuesta.
6. Verificar que las compilaciones de producción de Vite y Next.js finalicen correctamente mediante npm run build.
7. [AGREGUEN SUS PASOS]

> No publicar contraseñas, tokens, credenciales ni datos sensibles.

## 4. Evidencias

Las evidencias se encuentran en la carpeta `docs/evidencias/`

## 5. Matriz de participación

| Integrante | Desarrollo | Pruebas | Documentación | Exposición | Evidencia de participación |
|---|---|---|---|---|---|
| [Valeria Ravina Pérez] | [Alta] | [Alta] | [Alta] | [Sí] | [Commits en GitHub y capturas de la Act. 1A en `docs/evidencias/`] |
| [Alejandro Daniel Quispe Nieto] | [Alta] | [Alta] | [Alta] | [Si] | [Commits, avances, etc.] |
| Rodrigo Arturo Paredes Santa Cruz | Alta | Alta | Alta | Sí | Commits en GitHub y capturas de la Act. 2 en `docs/evidencias-act2/`|
| Alejandro Chero Izaguirre | Alta | Alta | Alta | Sí | Commits en GitHub y capturas de la Act. 4 en `docs/evidencias-act4/` |
| [Nombre 5] | [Alta/Media/Baja] | [Alta/Media/Baja] | [Alta/Media/Baja] | [Sí/No] | [Commits, avances, etc.] |

## 6. Video de exposición

**Video público de YouTube:** [PEGAR AQUÍ EL ENLACE]

Todos los integrantes deben participar en la exposición con sus cámaras prendidas y explicar el procedimiento, la solución desarrollada y las decisiones tomadas.

## 7. Conclusiones

- Consumir una API desde React con Axios, manejando errores y validando las respuestas, hace la aplicación más estable y da mensajes claros al usuario.
- La autenticación con JWT y la gestión de sesiones permiten controlar el acceso a la plataforma de forma coherente.
- Next.js (SSR/SSG) y el despliegue en Vercel mejoran la entrega del contenido y permiten revisar la aplicación fuera del entorno local.
- Preparar la aplicación para producción (variables de entorno, optimización y logs) facilita su mantenimiento y operación.

---

**Última actualización:** [DD/MM/AAAA]
