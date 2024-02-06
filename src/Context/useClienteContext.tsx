/* import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Cliente {
  Nome?: string,
  Telefone?: string,
  Marca?: string,
  Modelo?: string,
  'Ano modelo'?: string,
  Placa?: string,
  'Código FIPE'?: string,
  'Valor Protegido'?: string,
}

export default Cliente;

interface ClientesContextProps {
  clientes: Cliente[];
  setClientes: React.Dispatch<React.SetStateAction<Cliente[]>>;
  clienteSelecionado: Cliente | null;
  selecionarCliente: (cliente: Partial<Cliente> | null) => void;
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


  const [clientes, setClientes] = useState<Cliente[]>([
    {
      Nome: 'John Doe',
      Telefone: '123456789',
      Marca: 'Toyota',
      Modelo: 'Corolla',
      'Ano modelo': '2022',
      Placa: 'ABC123',
      'Código FIPE': '123456',
      'Valor Protegido': '10000',
    },
    {
      Nome: 'Jane Doe',
      Telefone: '987654321',
      Marca: 'Honda',
      Modelo: 'Civic',
      'Ano modelo': '2021',
      Placa: 'XYZ789',
      'Código FIPE': '789012',
      'Valor Protegido': '12000',
    },
    {
      Nome: 'Bob Smith',
      Telefone: '555555555',
      Marca: 'Ford',
      Modelo: 'Focus',
      'Ano modelo': '2020',
      Placa: 'DEF456',
      'Código FIPE': '456789',
      'Valor Protegido': '9000',
    }]);



  // Carregar os dados do AsyncStorage quando o componente montar
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

  // Atualizar o AsyncStorage sempre que a lista for alterada
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
    <ClientesContext.Provider value={{ clientes, setClientes, clienteSelecionado, selecionarCliente }}>
      {children}
    </ClientesContext.Provider>
  );
};


 */

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
  Franquia?: string,
  'Valor Protegido'?: string,
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
