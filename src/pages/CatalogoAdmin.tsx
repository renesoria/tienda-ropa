import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { usePrendas } from "../context/PrendasContext";
import type { Prenda } from "../types/prenda";
import Button from "../components/Button";

export default function CatalogoAdmin() {
  const { prendas, loading, fetchPrendas, savePrenda, updatePrenda, removePrenda } = usePrendas();

  // ==========================================
  // ESTADOS
  // ==========================================
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState<number | null>(null);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [talla, setTalla] = useState("");
  const [precio, setPrecio] = useState(0);
  const [imagen, setImagen] = useState("");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  // Carga el catálogo al iniciar (solo si no hay datos en contexto)
  useEffect(() => { if (prendas.length === 0) fetchPrendas(); }, []);

  // ==========================================
  // VALIDAR FORMULARIO
  // ==========================================
  const validateForm = (): boolean => {
    if (!nombre.trim() || nombre.trim().length < 2) {
      setError("El nombre es obligatorio (mínimo 2 caracteres).");
      return false;
    }
    if (!descripcion.trim() || descripcion.trim().length < 5) {
      setError("La descripción es obligatoria (mínimo 5 caracteres).");
      return false;
    }
    if (!talla.trim()) {
      setError("La talla es obligatoria.");
      return false;
    }
    if (!precio || precio <= 0) {
      setError("El precio debe ser mayor a 0.");
      return false;
    }
    return true;
  };

  // ==========================================
  // GUARDAR / ACTUALIZAR
  // ==========================================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setExito("");

    if (!validateForm()) return;

    try {
      const prenda: Prenda = {
        id: id || undefined,
        nombre,
        descripcion,
        talla,
        precio,
        imagen
      };

      if (editing) {
        await updatePrenda(prenda);
        setExito("Prenda actualizada con éxito.");
      } else {
        await savePrenda(prenda);
        setExito("Prenda registrada con éxito.");
      }

      resetForm();
    } catch {
      setError("Error al guardar la prenda.");
    }
  };

  // ==========================================
  // EDITAR — cargar datos al formulario
  // ==========================================
  const handleEdit = (prenda: Prenda) => {
    setEditing(true);
    setId(prenda.id || null);
    setNombre(prenda.nombre);
    setDescripcion(prenda.descripcion);
    setTalla(prenda.talla);
    setPrecio(prenda.precio);
    setImagen(prenda.imagen);
    setError("");
    setExito("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ==========================================
  // ELIMINAR
  // ==========================================
  const handleDelete = async (id: number) => {
    if (!confirm("¿Deseas eliminar esta prenda?")) return;
    try {
      await removePrenda(id);
      setExito("Prenda eliminada correctamente.");
    } catch {
      setError("Error al eliminar la prenda.");
    }
  };

  // ==========================================
  // RESET — limpiar formulario
  // ==========================================
  const resetForm = () => {
    setEditing(false);
    setId(null);
    setNombre("");
    setDescripcion("");
    setTalla("");
    setPrecio(0);
    setImagen("");
  };

  // ==========================================
  // RENDER
  // ==========================================
  return (
    <>
      <Helmet>
        <title>Administrar Catálogo | LlajtaClothes</title>
        <meta name="description" content="Panel de administración del catálogo de ropa LlajtaClothes." />
        <meta property="og:title" content="Administrar Catálogo | LlajtaClothes" />
        <meta property="og:description" content="Gestiona las prendas del catálogo LlajtaClothes." />
      </Helmet>

      <section>

        <h1>Administrar Catálogo</h1>

        <hr />

        <form onSubmit={handleSubmit} noValidate>

          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre de la prenda"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <br /><br />

          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            placeholder="Descripción de la prenda"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <br /><br />

          <label htmlFor="talla">Talla</label>
          <input
            id="talla"
            type="text"
            placeholder="Ej: S, M, L, XL"
            value={talla}
            onChange={(e) => setTalla(e.target.value)}
          />
          <br /><br />

          <label htmlFor="precio">Precio (Bs.)</label>
          <input
            id="precio"
            type="number"
            placeholder="0.00"
            value={precio}
            onChange={(e) => setPrecio(Number(e.target.value))}
            min="0"
            step="0.01"
          />
          <br /><br />

          <label htmlFor="imagen">Imagen (URL o nombre de archivo)</label>
          <input
            id="imagen"
            type="text"
            placeholder="Ej: polera.jpg o https://..."
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
          <br /><br />

          <Button type="submit" variant="primary">
            {editing ? "Actualizar" : "Guardar"}
          </Button>

          {" "}

          <Button type="button" variant="secondary" onClick={resetForm}>
            Limpiar
          </Button>

        </form>

        {error && <p className="error">{error}</p>}
        {exito && <p className="exito">{exito}</p>}

        <hr />

        <h2>Lista de Prendas</h2>

        {loading && <p>Cargando catálogo...</p>}

        <ul className="catalogo-lista">
          {prendas.map((p) => (
            <li key={p.id} className="prenda-item">

              {p.imagen && (
                <img
                  src={p.imagen.startsWith("http") ? p.imagen : `/images/${p.imagen}`}
                  alt={p.nombre}
                  className="prenda-imagen"
                />
              )}

              <div className="prenda-info">
                <strong>{p.nombre}</strong>
                <span className="prenda-talla">Talla: {p.talla}</span>
                <span className="prenda-precio">Bs. {p.precio}</span>
                <p>{p.descripcion}</p>

                <div className="prenda-acciones">
                  <Button size="small" onClick={() => handleEdit(p)}>
                    Editar
                  </Button>
                  {" "}
                  <Button size="small" variant="danger" onClick={() => handleDelete(p.id!)}>
                    Eliminar
                  </Button>
                </div>
              </div>

            </li>
          ))}
        </ul>

      </section>
    </>
  );
}
