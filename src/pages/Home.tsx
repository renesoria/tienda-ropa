import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>LlajtaClothes — Catálogo de Ropa</title>
        <meta name="description" content="Descubre la moda urbana en LlajtaClothes. Prendas de calidad: poleras, jeans, chamarras y más." />
        <meta property="og:title" content="LlajtaClothes — Catálogo de Ropa" />
        <meta property="og:description" content="Descubre la moda urbana en LlajtaClothes. Prendas de calidad: poleras, jeans, chamarras y más." />
        <meta property="og:image" content="/favicon.svg" />
      </Helmet>

      <header className="home-hero">
        <div className="home-hero-content">
          <h1>Bienvenido a LlajtaClothes</h1>
          <p>Tu tienda de ropa urbana. Encuentra las mejores prendas con estilo y calidad.</p>
          <Link to="/login" className="btn-hero">Explorar Catálogo</Link>
        </div>
      </header>

      <main>
        <section className="home-features">

          <article className="feature-card">
            <h2>Moda Actual</h2>
            <p>Colecciones actualizadas cada temporada con las últimas tendencias urbanas.</p>
          </article>

          <article className="feature-card">
            <h2>Todas las Tallas</h2>
            <p>Disponemos de XS, S, M, L, XL y XXL para que encuentres tu talla perfecta.</p>
          </article>

          <article className="feature-card">
            <h2>Calidad Premium</h2>
            <p>Prendas elaboradas con materiales de alta calidad y acabados impecables.</p>
          </article>

        </section>
      </main>

      <footer className="home-footer">
        <p>© {new Date().getFullYear()} LlajtaClothes — Todos los derechos reservados.</p>
      </footer>
    </>
  )
}
