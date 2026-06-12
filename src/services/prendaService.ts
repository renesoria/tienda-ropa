import axios from "axios";
import type { Prenda } from "../types/prenda";

// URL donde se encuentra la API PHP.
// Todas las peticiones utilizarán esta dirección.
const URL = "http://localhost/api_ropa/catalogo.php";

// ==========================================
// RECUPERAR TODOS - GET ALL
// ==========================================
export const getPrendas = async (): Promise<Prenda[]> => {
    try {
      const response = await axios.get<Prenda[]>(URL);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
};

// ==========================================
// RETORNAR UN SOLO PROD - GET ONE
// ==========================================
export const getPrenda = async(id: number): Promise<Prenda> => {
    try {
      const response = await axios.get<Prenda>(`${URL}?id=${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
};

// ==========================================
// CREAR - POST
// ==========================================
export const createPrenda = async(prenda: Prenda) => {
    try {
      const response = await axios.post(URL, prenda, {
          headers: {
            "Content-Type": "application/json",
          }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
};

// ==========================================
// ACTUALIZAR - PUT
// ==========================================
export const updatePrenda = async (prenda: Prenda) => {
    try {
      const response = await axios.put(URL, prenda, {
          headers: {
            "Content-Type": "application/json",
          }
      });
      return response.data;
    } catch (error) {
     console.error(error);
      throw error;
    }
};

// ==========================================
// ELIMINAR - DELETE
// ==========================================
export const deletePrenda = async (id: number) => {
    try {
      const response = await axios.delete(`${URL}?id=${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
};
