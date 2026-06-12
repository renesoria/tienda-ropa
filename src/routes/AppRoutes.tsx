import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import CatalogoAdmin from "../pages/CatalogoAdmin";
import CatalogoUsuario from "../pages/CatalogoUsuario";
import DetallePrenda from "../pages/DetallePrenda";
import SobreNosotros from "../pages/SobreNosotros";
import Tendencias from "../pages/Tendencias";
import Perfil from "../pages/Perfil";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../components/Layout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas privadas — Layout con Navbar + Sidebar + Footer */}
        <Route element={<Layout />}>

          {/* Administrador */}
          <Route
            path="/admin/catalogo"
            element={
              <ProtectedRoute allowedRole="Administrador">
                <CatalogoAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/tendencias"
            element={
              <ProtectedRoute allowedRole="Administrador">
                <Tendencias />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/sobre-nosotros"
            element={
              <ProtectedRoute allowedRole="Administrador">
                <SobreNosotros />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/perfil"
            element={
              <ProtectedRoute allowedRole="Administrador">
                <Perfil />
              </ProtectedRoute>
            }
          />

          {/* Usuario */}
          <Route
            path="/catalogo"
            element={
              <ProtectedRoute allowedRole="Usuario">
                <CatalogoUsuario />
              </ProtectedRoute>
            }
          />
          <Route
            path="/catalogo/:id"
            element={
              <ProtectedRoute allowedRole="Usuario">
                <DetallePrenda />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tendencias"
            element={
              <ProtectedRoute allowedRole="Usuario">
                <Tendencias />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sobre-nosotros"
            element={
              <ProtectedRoute allowedRole="Usuario">
                <SobreNosotros />
              </ProtectedRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute allowedRole="Usuario">
                <Perfil />
              </ProtectedRoute>
            }
          />

        </Route>

        {/* Rutas de error */}
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
