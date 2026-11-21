import { useEffect, useState } from 'react'
import api from '../api'

function ListaSolicitudes({ actualizar }) {
    const [solicitudes, setSolicitudes] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const obtenerSolicitudes = async () => {
            try {
                const { data } = await api.get('/solicitudes')

                if (!Array.isArray(data.solicitudes)) { throw new Error('La respuesta no tiene el formato esperado') }

                setSolicitudes(data.solicitudes)
            } catch (error) {
                if (error.response) {

                    setError(`Error del servidor: ${error.response.status}`)
                } else if (error.request) {

                    setError('Error de red: no se pudo conectar con el servidor')
                } else {
                    setError(error.message)
                }
            } finally {
                setCargando(false)
            }

        }
        obtenerSolicitudes()
    }, [actualizar])

    if (cargando) return <p>Cargando solicitudes...</p>
    if (error) return <p>{error}</p>
    if (solicitudes.length === 0) return <p>No hay solicitudes registradas.</p>

    return (
        <ul>
            {solicitudes.map((s) => (
                <li key={s.id}>
                    #{s.id} - {s.titulo} ({s.solicitante}) - {s.estado}
                </li>
            ))}
        </ul>
    )
}

export default ListaSolicitudes