import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useAuth } from "../context/AuthContext";

export default function Layout() {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth > 768);

  const adminMenu = [
    { name: "Catálogo", path: "/admin/catalogo" },
    { name: "Tendencias Globales", path: "/admin/tendencias" },
    { name: "Sobre Nosotros", path: "/admin/sobre-nosotros" },
    { name: "Mi Perfil", path: "/admin/perfil" }
  ];

  const userMenu = [
    { name: "Catálogo", path: "/catalogo" },
    { name: "Tendencias Globales", path: "/tendencias" },
    { name: "Sobre Nosotros", path: "/sobre-nosotros" },
    { name: "Mi Perfil", path: "/perfil" }
  ];

  const menu = user?.rol === "Administrador" ? adminMenu : userMenu;

  return (
    <>
      <Navbar onToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="container">

        <Sidebar menu={menu} isOpen={sidebarOpen} />

        <main className="main">
          <Outlet />
        </main>

      </div>

      <Footer />
    </>
  );
}
