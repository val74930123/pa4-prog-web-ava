import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../AuthContext'

function Login() {
    const { usuario, cargando, sesionExpirada, login } = useAuth()
    const location = useLocation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [enviando, setEnviando] = useState(false)

    // Página a la que quería entrar el usuario antes de ser enviado al login
    const destino = location.state?.desde?.pathname || '/'

    // Si ya hay sesión, no tiene sentido mostrar el formulario
    if (!cargando && usuario) return <Navigate to={destino} replace />

    const enviar = async (e) => {
        e.preventDefault()
        setError('')

        if (!email.trim() || !password) {
            setError('Ingresa tu correo y tu contraseña')
            return
        }

        setEnviando(true)

        try {
            // Al terminar bien, el AuthContext guarda el usuario y el
            // <Navigate> de arriba redirige a la página de destino.
            await login(email.trim(), password)
        } catch (err) {
            if (err.response) {
                setError(
                    err.response.data?.mensaje ||
                        `Error del servidor: ${err.response.status}`
                )
            } else if (err.request) {
                setError('Error de red: no se pudo conectar con el servidor')
            } else {
                setError(err.message)
            }
        } finally {
            setEnviando(false)
        }
    }

    return (
        <div>
            <h1>Gestion de Solicitudes Academicas</h1>
            <h2>Iniciar sesión</h2>

            {sesionExpirada && (
                <p>Tu sesión ha expirado. Inicia sesión nuevamente.</p>
            )}

            <form onSubmit={enviar}>
                <div>
                    <label htmlFor="email">Correo: </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="correo@ejemplo.com"
                        autoComplete="username"
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña: </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                </div>
                <button type="submit" disabled={enviando}>
                    {enviando ? 'Ingresando...' : 'Ingresar'}
                </button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default Login
