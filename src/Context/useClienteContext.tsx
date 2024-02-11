import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Cliente {
  Nome?: string,
  Telefone?: string,
  Marca?: string,
  Modelo?: string,
  'Ano modelo'?: string,
  Placa?: string,
  'Código FIPE'?: string,
  Parcela?: string,
  Vistoria?: string,
  'Ajuda Participativa'?: string,
  'Valor Protegido'?: string,
  'Cobertura Terceiros'?: string
}

interface ClientesContextProps {
  clientes: Cliente[];
  setClientes: React.Dispatch<React.SetStateAction<Cliente[]>>;
  clienteSelecionado: Cliente | null;
  selecionarCliente: (cliente: Partial<Cliente> | null) => void;
  ultimoCliente: Cliente | null; // Adicione um campo para armazenar o último cliente
}

const ClientesContext = createContext<ClientesContextProps | undefined>(undefined);

interface ClientesProviderProps {
  children: ReactNode;
}

export const useClientesContext = () => {
  const context = useContext(ClientesContext);
  if (!context) {
    throw new Error("useClientesContext deve ser usado dentro de ClientesProvider");
  }
  const removerCliente = (index: number) => {
    context.setClientes((prevClientes) => {
      const novosClientes = [...prevClientes];
      novosClientes.splice(index, 1);
      return novosClientes;
    });
  };

  return { ...context, removerCliente };
};

export const ClientesProvider: React.FC<ClientesProviderProps> = ({ children }) => {
  const [clienteSelecionado, setClienteSelecionado] = useState<Cliente | null>(null);
  const selecionarCliente = (cliente: Cliente | null) => {
    setClienteSelecionado(cliente);
  };

  const [clientes, setClientes] = useState<Cliente[]>([]);

  const ultimoCliente = obterUltimoObjeto(clientes);

  useEffect(() => {
    const loadAsyncData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("clientes");
        if (storedData) {
          setClientes(JSON.parse(storedData));
        }
      } catch (error) {
        console.error("Erro ao carregar dados do AsyncStorage:", error);
      }
    };

    loadAsyncData();
  }, []);

  useEffect(() => {
    const saveAsyncData = async () => {
      try {
        await AsyncStorage.setItem("clientes", JSON.stringify(clientes));
      } catch (error) {
        console.error("Erro ao salvar dados no AsyncStorage:", error);
      }
    };

    saveAsyncData();
  }, [clientes]);

  return (
    <ClientesContext.Provider value={{ clientes, setClientes, clienteSelecionado, selecionarCliente, ultimoCliente }}>
      {children}
    </ClientesContext.Provider>
  );
};

function obterUltimoObjeto(array: any[]) {
  if (array.length === 0) {
    return null; // Retorna null se o array estiver vazio
  }

  return array[array.length - 1];
}
