
import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api',
    withCredentials: true
});

// Interceptor para detectar sesiones vencidas o inválidas
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.log('La sesión no está activa o ha expirado.');
        }

        return Promise.reject(error);
    }
);

export default api;
