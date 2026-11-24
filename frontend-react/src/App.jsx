import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import FormularioSolicitud from './components/FormularioSolicitud'
import ListaSolicitudes from './components/ListaSolicitudes'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuth } from './AuthContext'

// Página original de solicitudes (sin cambios), ahora dentro de una ruta privada
function PaginaSolicitudes() {
  const { usuario, logout } = useAuth()
  const [actualizar, setActualizar] = useState(0)

  return (
    <div>
      <div className="barra-usuario">
        <span>{usuario?.email}</span>
        <button type="button" onClick={() => logout()}>Cerrar sesión</button>
      </div>

      <h1>Gestion de Solicitudes Academicas</h1>

      <h2>Nueva solicitud</h2>
      <FormularioSolicitud onCreada ={() => setActualizar(actualizar + 1)} />

      <h2>Solicitudes registradas</h2>
      <ListaSolicitudes actualizar={actualizar}/>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<PaginaSolicitudes />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
