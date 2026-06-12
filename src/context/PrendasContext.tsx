import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Prenda } from '../types/prenda';
import * as prendaService from '../services/prendaService';

interface PrendasContextProps {
  prendas: Prenda[];
  loading: boolean;
  fetchPrendas: () => Promise<void>;
  savePrenda: (p: Prenda) => Promise<void>;
  updatePrenda: (p: Prenda) => Promise<void>;
  removePrenda: (id: number) => Promise<void>;
}

const PrendasContext = createContext({} as PrendasContextProps);

export const PrendasProvider = ({ children }: { children: ReactNode }) => {
  const [prendas, setPrendas] = useState<Prenda[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPrendas = async () => {
    setLoading(true);
    try {
      const data = await prendaService.getPrendas();
      setPrendas(data);
    } catch (error) {
      console.error("Error al cargar catálogo");
    } finally {
      setLoading(false);
    }
  };

  const savePrenda = async (nueva: Prenda) => {
    await prendaService.createPrenda(nueva);
    await fetchPrendas();
  };

  const updatePrenda = async (prenda: Prenda) => {
    await prendaService.updatePrenda(prenda);
    await fetchPrendas();
  };

  const removePrenda = async (id: number) => {
    await prendaService.deletePrenda(id);
    await fetchPrendas();
  };

  return (
    <PrendasContext.Provider value={{ 
      prendas, 
      loading, 
      fetchPrendas, 
      savePrenda, 
      updatePrenda, 
      removePrenda 
    }}>
      {children}
    </PrendasContext.Provider>
  );
};

export const usePrendas = () => useContext(PrendasContext);
