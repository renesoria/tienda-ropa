import { Helmet } from "react-helmet-async";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Mi Perfil | LlajtaClothes</title>
        <meta name="description" content="Información de tu cuenta en LlajtaClothes." />
        <meta property="og:title" content="Mi Perfil | LlajtaClothes" />
        <meta property="og:description" content="Consulta los datos de tu cuenta LlajtaClothes." />
      </Helmet>

      <section>

        <h1>Mi Perfil</h1>
        <p>Información de tu cuenta.</p>

        <hr />

        <div className="perfil-card">

          <div className="perfil-avatar">
            {user?.usuario.charAt(0).toUpperCase()}
          </div>

          <div className="perfil-datos">

            <div className="perfil-fila">
              <span className="perfil-label">Usuario</span>
              <span className="perfil-valor">{user?.usuario}</span>
            </div>

            <div className="perfil-fila">
              <span className="perfil-label">Rol</span>
              <span className="barra-rol">{user?.rol}</span>
            </div>

            <div className="perfil-fila">
              <span className="perfil-label">ID</span>
              <span className="perfil-valor">#{user?.id}</span>
            </div>

          </div>

        </div>

        <br />

        <button className="btn-cerrar-sesion" onClick={handleLogout}>
          Cerrar Sesión
        </button>

      </section>
    </>
  );
}
