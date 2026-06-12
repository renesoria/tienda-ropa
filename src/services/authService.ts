//lógica para conectarse al backend y realizar el login.
//LIBRERIA PARA GESTIONAR PETICIONES
import axios from "axios";
// IMPORTA EL TIPO LoginResponse
import type { LoginResponse } from "../types/auth";

// URL BASE DE LA API
const API_URL = "http://localhost/api_ropa";

// Usuarios predefinidos — Opción A (fallback cuando el backend PHP no está disponible)
const USUARIOS_DEMO = [
  { id: 1, usuario: "admin",   password: "123456", rol: "Administrador" as const },
  { id: 2, usuario: "cliente", password: "123456", rol: "Usuario"        as const },
];

// FUNCION ASINCRONA login
export async function login(
  usuario: string,
  password: string
): Promise<LoginResponse> {

  try {
    // REALIZA PETICION POST AL BACKEND PHP (timeout 4s)
    const response = await axios.post<LoginResponse>(
      `${API_URL}/login.php`,
      { usuario, password },
      {
        headers: { "Content-Type": "application/json" },
        timeout: 4000,
      }
    );
    return response.data;
  } catch {
    // Backend no disponible — verificar contra usuarios predefinidos
    const encontrado = USUARIOS_DEMO.find(
      (u) => u.usuario === usuario && u.password === password
    );
    if (encontrado) {
      return {
        success: true,
        message: "Login correcto",
        user: { id: encontrado.id, usuario: encontrado.usuario, rol: encontrado.rol },
      };
    }
    return { success: false, message: "Credenciales incorrectas." };
  }
}
