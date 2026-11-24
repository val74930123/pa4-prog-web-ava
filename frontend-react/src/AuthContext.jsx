import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react'
import api, { registrarManejadorSesionExpirada } from './api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null)
    // true mientras se comprueba si ya existe una sesión al abrir la app
    const [cargando, setCargando] = useState(true)
    // true cuando una petición protegida devolvió 401 con la app ya abierta
    const [sesionExpirada, setSesionExpirada] = useState(false)

    // Al iniciar React: se le pregunta al backend si la cookie sigue siendo válida
    useEffect(() => {
        let activo = true

        const verificarSesion = async () => {
            try {
                const { data } = await api.get('/auth/me')
                if (activo) setUsuario(data.usuario)
            } catch {
                if (activo) setUsuario(null)
            } finally {
                if (activo) setCargando(false)
            }
        }

        verificarSesion()

        return () => {
            activo = false
        }
    }, [])

    // Si cualquier petición protegida devuelve 401, se cierra la sesión en pantalla
    useEffect(() => {
        registrarManejadorSesionExpirada(() => {
            setUsuario(null)
            setSesionExpirada(true)
        })

        return () => registrarManejadorSesionExpirada(null)
    }, [])

    const login = useCallback(async (email, password) => {
        const { data } = await api.post('/auth/login', { email, password })
        setUsuario(data.usuario)
        setSesionExpirada(false)
        return data.usuario
    }, [])

    const logout = useCallback(async () => {
        try {
            await api.post('/auth/logout')
        } catch (error) {
            console.error('No se pudo cerrar la sesión en el servidor:', error)
        } finally {
            setUsuario(null)
            setSesionExpirada(false)
        }
    }, [])

    const value = useMemo(
        () => ({ usuario, cargando, sesionExpirada, login, logout }),
        [usuario, cargando, sesionExpirada, login, logout]
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    const contexto = useContext(AuthContext)

    if (!contexto) {
        throw new Error('useAuth debe usarse dentro de un AuthProvider')
    }

    return contexto
}
