import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getTendencias } from "../services/tendenciasService";
import type { Tendencia } from "../types/tendencia";
import Card from "../components/Card";

export default function Tendencias() {

  // ==========================================
  // ESTADOS
  // ==========================================
  const [tendencias, setTendencias] = useState<Tendencia[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ==========================================
  // CARGAR DATOS - API PÚBLICA
  // ==========================================
  const loadTendencias = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getTendencias();
      setTendencias(data);
    } catch {
      setError("Error al cargar tendencias desde la API externa.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadTendencias(); }, []);

  // ==========================================
  // RENDER
  // ==========================================
  return (
    <>
      <Helmet>
        <title>Tendencias Globales | LlajtaClothes</title>
        <meta name="description" content="Explora las últimas tendencias de moda mundial en LlajtaClothes." />
        <meta property="og:title" content="Tendencias Globales | LlajtaClothes" />
        <meta property="og:description" content="Las últimas tendencias de moda internacional desde FakeStoreAPI." />
      </Helmet>

      <section>

        <h1>Tendencias Globales</h1>
        <p>Productos de moda internacional — fuente: <strong>FakeStoreAPI</strong></p>

        <hr />

        {loading && <p>Cargando tendencias...</p>}

        {error && <p className="error">{error}</p>}

        <div className="cards-grid">
          {tendencias.map((t) => (
            <Card
              key={t.id}
              title={t.title}
              description={
                t.description.length > 90
                  ? t.description.substring(0, 90) + "..."
                  : t.description
              }
              image={t.image}
              variant="secondary"
            >
              <span className="precio-api">${t.price}</span>
              <span className="rating-api">⭐ {t.rating.rate}</span>
            </Card>
          ))}
        </div>

      </section>
    </>
  );
}
