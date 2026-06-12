import { Helmet } from "react-helmet-async";

export default function SobreNosotros() {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | LlajtaClothes</title>
        <meta name="description" content="Conoce la historia y misión de LlajtaClothes, tu tienda de ropa urbana en Bolivia." />
        <meta property="og:title" content="Sobre Nosotros | LlajtaClothes" />
        <meta property="og:description" content="Somos LlajtaClothes, una tienda de ropa urbana nacida en Cochabamba, Bolivia." />
      </Helmet>

      <section>

        <h1>Sobre Nosotros</h1>
        <p>Conoce quiénes somos y qué nos mueve.</p>

        <hr />

        <div className="sobre-hero">
          <h2>LlajtaClothes</h2>
          <p>
            Nacimos en Cochabamba, Bolivia, con una sola idea: ofrecer ropa urbana de calidad
            a precios accesibles para todos. "Llajta" en quechua significa tierra o ciudad —
            nuestra tierra, nuestra identidad.
          </p>
        </div>

        <div className="sobre-grid">

          <article className="sobre-card">
            <div className="sobre-icono">🎯</div>
            <h3>Nuestra Misión</h3>
            <p>
              Vestir a cada persona con prendas que reflejen su estilo propio,
              combinando tendencias actuales con la identidad boliviana.
            </p>
          </article>

          <article className="sobre-card">
            <div className="sobre-icono">👁️</div>
            <h3>Nuestra Visión</h3>
            <p>
              Convertirnos en la tienda de moda urbana de referencia en Bolivia,
              expandiéndonos a las principales ciudades del país.
            </p>
          </article>

          <article className="sobre-card">
            <div className="sobre-icono">💎</div>
            <h3>Nuestros Valores</h3>
            <p>
              Calidad, honestidad y atención al cliente. Cada prenda pasa por un
              control de calidad antes de llegar a tus manos.
            </p>
          </article>

        </div>

        <hr />

        <div className="sobre-datos">
          <h2>¿Por qué elegirnos?</h2>

          <ul className="sobre-lista">
            <li>✅ Prendas de algodón y materiales de primera calidad</li>
            <li>✅ Tallas desde XS hasta XXL para todo tipo de cuerpo</li>
            <li>✅ Precios justos sin intermediarios</li>
            <li>✅ Catálogo actualizado cada temporada</li>
            <li>✅ Atención personalizada para cada cliente</li>
          </ul>
        </div>

      </section>
    </>
  );
}
