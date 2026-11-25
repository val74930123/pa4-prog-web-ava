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
| Ian Palmieri | Desarrollador Backend/Frontend - Autenticación JWT (Act. 1B) | Login con JWT en cookie HttpOnly, middleware de verificación, protección de endpoints, AuthContext, rutas protegidas y manejo de sesión expirada en React |
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


```

**Configuración previa del backend (autenticación JWT, Act. 1B):**

```bash
cd backend
copy .env.example .env        # en Mac/Linux: cp .env.example .env
```

Abrir `backend/.env` y completar: `JWT_SECRET` (texto largo y aleatorio), `AUTH_USER` (correo de acceso) y `AUTH_PASSWORD_HASH` (hash bcrypt de la contraseña). Para generar el hash, desde la carpeta `backend`:

```bash
node -e "import('bcryptjs').then(b => console.log(b.default.hashSync('TU_CLAVE', 10)))"
```

El archivo `.env` no se sube a GitHub. Las credenciales de revisión se entregan por el canal indicado por el equipo, no en este repositorio.

**Pasos de revisión:**
1. Encender el backend y el frontend con los comandos de arriba.
2. Abrir `http://localhost:5173`: la aplicación redirige a `/login`. Iniciar sesión con las credenciales configuradas y verificar que carga la lista de solicitudes.
3. Registrar una solicitud con el formulario y verificar que aparece en la lista.
4. Abrir `http://localhost:3000` para revisar la aplicación Next.js: Entrar a la vista estática (`/ssg`), la vista dinámica en servidor (`/ssr`, comprobando que la hora cambie al recargar) y la ruta dinámica de detalle (`/solicitudes/001`, `/solicitudes/002` y `/solicitudes/100` para verificar el error 404).
5. Verificación de producción: Revisar la terminal del backend y comprobar que se registran las peticiones HTTP realizadas desde React, incluyendo el método, la ruta, el código de respuesta y el tiempo de respuesta.
6. Verificar las compilaciones de producción ejecutando npm run build en las carpetas frontend-react y next-solicitudes, comprobando que finalicen correctamente.
7. Abre https://pa4-act3.vercel.app/ y comprueba que cargue el inicio; luego revisa las vistas /ssg y /ssr.
8. Desde el inicio, pulsa Ver detalles y confirma que una ruta como /solicitudes/001 muestre los datos de la solicitud.
9. Autenticación (Act. 1B): en `/login`, ingresar una contraseña incorrecta y verificar el mensaje de error.
10. Pulsar "Cerrar sesión" y comprobar que vuelve a `/login`; al intentar abrir `/` directamente, redirige otra vez al login.
11. Con la sesión cerrada, abrir `http://localhost:4000/api/solicitudes` en el navegador: responde 401 "No hay una sesión activa" (el backend protege los datos, no solo la pantalla).

> No publicar contraseñas, tokens, credenciales ni datos sensibles.

## 4. Evidencias

Las evidencias se encuentran en la carpeta `docs/evidencias/`

Evidencias de la Act. 1B (autenticación JWT): `docs/evidencias-act1b/`.

## 5. Matriz de participación

| Integrante | Desarrollo | Pruebas | Documentación | Exposición | Evidencia de participación |
|---|---|---|---|---|---|
| [Valeria Ravina Pérez] | [Alta] | [Alta] | [Alta] | [Sí] | [Commits en GitHub y capturas de la Act. 1A en `docs/evidencias/act1`] |
| [Alejandro Daniel Quispe Nieto] | [Alta] | [Alta] | [Alta] | [Si] | [Commits en GitHub y capturas de la Act. 3 en `docs/evidencias-act-3/`] |
| Rodrigo Arturo Paredes Santa Cruz | Alta | Alta | Alta | Sí | Commits en GitHub y capturas de la Act. 2 en `docs/evidencias-act2/`|
| Alejandro Chero Izaguirre | Alta | Alta | Alta | Sí | Commits en GitHub, documentacion y capturas de la Act. 4 en `docs/evidencias-act4/` |
| Ian Palmieri | Alta | Alta | Alta | Sí | Commits en GitHub y capturas de la Act. 1B en `docs/evidencias-act1b/` |

## 6. Video de exposición

**Video público de YouTube:** https://youtu.be/Vr03INf0s7I?feature=shared

Todos los integrantes deben participar en la exposición con sus cámaras prendidas y explicar el procedimiento, la solución desarrollada y las decisiones tomadas.

## 7. Conclusiones

- Consumir una API desde React con Axios, manejando errores y validando las respuestas, hace la aplicación más estable y da mensajes claros al usuario.
- La autenticación con JWT y la gestión de sesiones permiten controlar el acceso a la plataforma de forma coherente.
- Next.js (SSR/SSG) y el despliegue en Vercel mejoran la entrega del contenido y permiten revisar la aplicación fuera del entorno local.
- Preparar la aplicación para producción (variables de entorno, optimización y logs) facilita su mantenimiento y operación.
- Guardar el JWT en una cookie HttpOnly evita que JavaScript lo lea, lo que reduce el riesgo de robo del token; además, la protección debe aplicarse también en el backend, no solo en las rutas de React.

---

**Última actualización:** [24/11/2026]
