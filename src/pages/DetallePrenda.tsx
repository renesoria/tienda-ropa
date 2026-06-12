import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { usePrendas } from "../context/PrendasContext";

export default function DetallePrenda() {
  const { id } = useParams<{ id: string }>();
  const { prendas, loading, fetchPrendas } = usePrendas();
  const navigate = useNavigate();
  const [ready, setReady] = useState(prendas.length > 0);

  useEffect(() => {
    if (prendas.length === 0) {
      fetchPrendas().finally(() => setReady(true));
    }
  }, []);

  if (!ready || loading) {
    return <section><p>Cargando prenda...</p></section>;
  }

  const prenda = prendas.find((p) => Number(p.id) === Number(id));

  const imageSrc = prenda?.imagen
    ? (prenda.imagen.startsWith("http") ? prenda.imagen : `/images/${prenda.imagen}`)
    : "";

  if (!prenda) {
    return (
      <section>
        <p>Prenda no encontrada.</p>
        <button className="btn-volver" onClick={() => navigate(-1)}>← Volver</button>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{prenda.nombre} | LlajtaClothes</title>
        <meta name="description" content={prenda.descripcion} />
        <meta property="og:title" content={`${prenda.nombre} | LlajtaClothes`} />
        <meta property="og:description" content={prenda.descripcion} />
      </Helmet>

      <section>

        <button className="btn-volver" onClick={() => navigate(-1)}>
          ← Volver al catálogo
        </button>

        <div className="detalle-card">

          {imageSrc && (
            <div className="detalle-imagen-wrap">
              <img src={imageSrc} alt={prenda.nombre} className="detalle-imagen" />
            </div>
          )}

          <div className="detalle-info">

            <h1>{prenda.nombre}</h1>

            <p className="detalle-precio">Bs. {prenda.precio}</p>

            <span className="badge-talla">Talla: {prenda.talla}</span>

            <hr />

            <p className="detalle-descripcion">{prenda.descripcion}</p>

          </div>

        </div>

      </section>
    </>
  );
}
