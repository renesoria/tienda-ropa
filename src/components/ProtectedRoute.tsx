import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";

interface Props {
  children: ReactNode;
  allowedRole: 'Administrador' | 'Usuario';
}

export default function ProtectedRoute({ children, allowedRole }: Props) {
  const { user, loading } = useAuth();

  // Mientras verifica el token/localstorage, evitamos parpadeos
  if (loading) {
    return <p>Verificando sesión...</p>;
  }

  // Si no está logueado, a la página de login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si está logueado pero el rol no es el requerido
  if (user.rol !== allowedRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Si pasa todo, renderiza el componente
  return children;
}
