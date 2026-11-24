Actividad 4: Preparación para producción

1. Optimización y minificación
   Se ejecutó el comando npm run build en los proyectos React con Vite y Next.js para generar las compilaciones de producción. Estas herramientas realizan procesos de optimización y minificación para preparar las aplicaciones para su despliegue.

2. Variables de entorno
   Se configuraron variables de entorno para facilitar la ejecución y conexión de los proyectos:

- PORT: configurada en el backend para establecer el puerto del servidor, utilizando 4000 como valor predeterminado.
- VITE_API_URL: configurada en React para definir la dirección de la API, utilizando una dirección local como valor predeterminado.

Estas variables permiten modificar la configuración sin cambiar directamente el código fuente.

3. Logs y monitoreo
   Se implementó un middleware en Express para registrar las peticiones HTTP realizadas al backend.

Los registros muestran:

- Fecha y hora de la petición.
- Método HTTP.
- Ruta solicitada.
- Código de respuesta.
- Tiempo de respuesta en milisegundos.

Esto facilita el seguimiento de las solicitudes y permite identificar posibles problemas durante la ejecución de la API.

4. Configuración de Webpack y Babel
   No se agregaron configuraciones manuales de Webpack ni Babel, debido a que los proyectos utilizan herramientas integradas para la compilación y optimización:

- Vite: utiliza Rolldown y Oxc en su proceso de compilación.
- Next.js: utiliza Turbopack y SWC.

Se mantuvieron estas herramientas para aprovechar la configuración integrada de cada proyecto y evitar dependencias o configuraciones adicionales innecesarias.

5. Evidencias
   Las pruebas y configuraciones realizadas se encuentran documentadas mediante las siguientes capturas:

01-build-vite.png: compilación de producción con Vite.
02-build-nextjs.png: compilación de producción con Next.js.
03-variable-port.png: configuración de PORT y middleware de logs.
04-variable-api-url.png: configuración de VITE_API_URL.
05-logs-backend.png: registros de peticiones HTTP en el backend.

6. Conclusión
   La preparación para producción permitió optimizar las compilaciones, configurar variables de entorno y añadir registros de peticiones HTTP para facilitar el seguimiento de la API. Se utilizaron las herramientas integradas de Vite y Next.js para mantener una configuración adecuada a las tecnologías del proyecto.
