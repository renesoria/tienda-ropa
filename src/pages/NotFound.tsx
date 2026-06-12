import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Página no encontrada | LlajtaClothes</title>
        <meta name="description" content="La página que buscas no existe en LlajtaClothes." />
      </Helmet>

      <div className="error-page">
        <h1>404</h1>
        <h2>Página No Encontrada</h2>
        <p>La ruta que buscas no existe en nuestra tienda.</p>
        <Link to="/">← Volver al Inicio</Link>
      </div>
    </>
  )
}
