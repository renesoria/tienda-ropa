import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Unauthorized() {
  return (
    <>
      <Helmet>
        <title>403 - Acceso Denegado | LlajtaClothes</title>
        <meta name="description" content="No tienes permisos para acceder a esta página." />
      </Helmet>

      <div className="error-page">
        <h1>403</h1>
        <h2>Acceso Denegado</h2>
        <p>No tienes los permisos necesarios para ver esta página.</p>
        <Link to="/">← Volver al Inicio</Link>
      </div>
    </>
  )
}
