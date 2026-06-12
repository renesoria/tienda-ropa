import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { usePrendas } from "../context/PrendasContext";
import Card from "../components/Card";

export default function CatalogoUsuario() {
  const { prendas, loading, fetchPrendas } = usePrendas();
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => { if (prendas.length === 0) fetchPrendas(); }, []);

  const prendasFiltradas = prendas.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.talla.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Catálogo de Ropa | LlajtaClothes</title>
        <meta name="description" content="Explora nuestro catálogo de ropa LlajtaClothes: poleras, jeans, chamarras y más." />
        <meta property="og:title" content="Catálogo de Ropa | LlajtaClothes" />
        <meta property="og:description" content="Descubre las últimas prendas disponibles en LlajtaClothes." />
      </Helmet>

      <section>

        <h1>Catálogo de Ropa</h1>
        <p>Explora nuestras prendas disponibles.</p>

        <hr />

        <input
          type="text"
          className="input-busqueda"
          placeholder="Buscar por nombre o talla..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        {loading && <p>Cargando catálogo...</p>}

        {!loading && prendasFiltradas.length === 0 && (
          <p className="sin-resultados">No se encontraron prendas con "{busqueda}".</p>
        )}

        <div className="cards-grid">
          {prendasFiltradas.map((p) => (
            <Card
              key={p.id}
              title={p.nombre}
              description={p.descripcion}
              image={p.imagen ? (p.imagen.startsWith("http") ? p.imagen : `/images/${p.imagen}`) : ""}
              variant="primary"
            >
              <span className="badge-talla">Talla: {p.talla}</span>
              <strong className="card-precio">Bs. {p.precio}</strong>
              <Link to={`/catalogo/${p.id}`} className="btn-detalle">Ver detalle</Link>
            </Card>
          ))}
        </div>

      </section>
    </>
  );
}
