import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../AuthContext'

// Envuelve las rutas privadas: si no hay sesión, redirige al login.
function ProtectedRoute() {
    const { usuario, cargando } = useAuth()
    const location = useLocation()

    if (cargando) return <p>Verificando sesión...</p>

    if (!usuario) {
        return <Navigate to="/login" replace state={{ desde: location }} />
    }

    return <Outlet />
}

export default ProtectedRoute
