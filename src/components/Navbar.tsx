import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface NavbarProps {
  onToggle?: () => void;
}

const Navbar = ({ onToggle }: NavbarProps) => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="barra">
      <div className="barra-izquierda">
        {onToggle && (
          <button className="barra-toggle" onClick={onToggle}>☰</button>
        )}
        <Link to="/" className="barra-logo">LlajtaClothes</Link>
      </div>
      <div className="barra-acciones">
        {user && (
          <>
            <span>Hola, {user.usuario}</span>
            <span className="barra-rol">{user.rol}</span>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
