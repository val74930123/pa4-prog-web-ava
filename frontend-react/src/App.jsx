import { useState } from 'react'
import FormularioSolicitud from './components/FormularioSolicitud'
import ListaSolicitudes from './components/ListaSolicitudes'

function App() {
  const [actualizar, setActualizar] = useState(0)

  return (
    <div>
      <h1>Gestion de Solicitudes Academicas</h1>

      <h2>Nueva solicitud</h2>
      <FormularioSolicitud onCreada ={() => setActualizar(actualizar + 1)} />

      <h2>Solicitudes registradas</h2>
      <ListaSolicitudes actualizar={actualizar}/>
    </div>
  )
}

export default App