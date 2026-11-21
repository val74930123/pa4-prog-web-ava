import { useState } from 'react'
import api from '../api'

function FormularioSolicitud({ onCreada }) {
    const [titulo, setTitulo] = useState('')
    const [solicitante, setSolicitante] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [error, setError] = useState('')

    const enviar = async (e) => {
        e.preventDefault()
        setMensaje('')
        setError('')

        if (titulo.trim().legth < 5 || solicitante.trim().length < 3) {
            setError('El título debe tener al menos 5 caracteres y el solicitante al menos 3')
            return
        }
        try {
            const { data } = await api.post('/solicitudes', { titulo, solicitante })
            setMensaje(`Solicitud #${data.id} registrada correctamente`)
            setTitulo('')
            setSolicitante('')
            onCreada()
        } catch (error) {
            if (error.response) {
                setError(error.response.data.mensaje || `Error del servidor: ${error.response.status}`)
            } else if (error.request) {
                setError('Error de red: no se pudo conectar con el servidor')
            } else {
                setError(error.message)
            }
        }
    }

    return (
        <form onSubmit={enviar}>
            <div>
                <label>Titulo: </label>
                <input
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Ej. Constancia de matricula"
                />
            </div>
            <div>
                <label>Solicitante: </label>
                <input
                    value={solicitante}
                    onChange={(e) => setSolicitante(e.target.value)}
                    placeholder="Nombre completo"
                />
            </div>
            <button type="submit">Registrar solicitud</button>
            {mensaje && <p>{mensaje}</p>}
            {error && <p>{error}</p>}
        </form>
    )
}

export default FormularioSolicitud