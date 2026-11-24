import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api',
    // El navegador envía automáticamente la cookie HttpOnly con el JWT.
    // El token nunca se guarda en localStorage ni sessionStorage.
    withCredentials: true
});

// El AuthContext registra aquí qué debe hacer la app cuando la sesión caduca.
let manejadorSesionExpirada = null;

export function registrarManejadorSesionExpirada(fn) {
    manejadorSesionExpirada = fn;
}

// En estas rutas un 401 es normal (credenciales incorrectas, aún no hay
// sesión al abrir la app, etc.), así que no se considera "sesión expirada".
const RUTAS_DE_AUTENTICACION = ['/auth/login', '/auth/me', '/auth/logout'];

// Interceptor para detectar sesiones vencidas o inválidas
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const url = error.config?.url ?? '';
        const esRutaDeAutenticacion = RUTAS_DE_AUTENTICACION.some((ruta) =>
            url.includes(ruta)
        );

        if (
            error.response?.status === 401 &&
            !esRutaDeAutenticacion &&
            manejadorSesionExpirada
        ) {
            manejadorSesionExpirada();
        }

        return Promise.reject(error);
    }
);

export default api;
