import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Helmet } from 'react-helmet-async'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validaciones
    if (!usuario.trim()) {
      setError('El usuario es obligatorio.')
      return
    }
    if (usuario.trim().length < 3) {
      setError('El usuario debe tener al menos 3 caracteres.')
      return
    }
    if (!password) {
      setError('La contraseña es obligatoria.')
      return
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    const success = await login(usuario, password)

    if (success) {
      const user = JSON.parse(localStorage.getItem('user') || '{}')
      if (user.rol === 'Administrador') {
        navigate('/admin/catalogo')
      } else {
        navigate('/catalogo')
      }
    } else {
      setError('Credenciales incorrectas o error en el servidor.')
    }
  }

  return (
    <>
      <Helmet>
        <title>Iniciar Sesión | LlajtaClothes</title>
        <meta name="description" content="Inicia sesión en LlajtaClothes para acceder al catálogo de ropa." />
        <meta property="og:title" content="Login | LlajtaClothes" />
        <meta property="og:description" content="Accede a tu cuenta en LlajtaClothes." />
      </Helmet>

      <div className="login-page">
        <div className="cajalogin">

          <h1>Iniciar Sesión</h1>
          <p className="login-sub">Accede a tu cuenta LlajtaClothes</p>

          <form onSubmit={handleLogin} noValidate>

            <label htmlFor="usuario">Usuario</label>
            <input
              id="usuario"
              type="text"
              placeholder="Ingresa tu usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              autoComplete="username"
            />

            <br /><br />

            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            <br /><br />

            <button type="submit">Ingresar</button>

          </form>

          {error && <p className="error">{error}</p>}

        </div>
      </div>
    </>
  )
}
