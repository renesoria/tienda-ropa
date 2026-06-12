import axios from "axios";
import type { Tendencia } from "../types/tendencia";

// API pública de ropa — FakeStoreAPI
const BASE_URL = "https://fakestoreapi.com";

export const getTendencias = async (): Promise<Tendencia[]> => {
  try {
    const [mujeres, hombres] = await Promise.all([
      axios.get<Tendencia[]>(`${BASE_URL}/products/category/women's clothing?limit=10`),
      axios.get<Tendencia[]>(`${BASE_URL}/products/category/men's clothing?limit=10`)
    ]);
    return [...mujeres.data, ...hombres.data];
  } catch (error) {
    console.error("Error al cargar tendencias:", error);
    throw error;
  }
};
