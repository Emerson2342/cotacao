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
  'Cobertura Terceiros'?: string,
  DiaCadastro?: number,
  MesCadastro?: number,
  AnoCadastro?: number,

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

  const removerCliente = (cliente: Cliente) => {
    context.setClientes((prevClientes) => {
      const novosClientes = prevClientes.filter((c) => c !== cliente);
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
      Nome: 'Emerson Ribeiro',
      Telefone: '9835-4398',
      Marca: 'VW',
      Modelo: 'Gol 1.0',
      'Ano modelo': '2009',
      Placa: 'JHP-0014',
      'Código FIPE': '4815162342',
      Parcela: '120,00',
      Vistoria: '250,00',
      'Ajuda Participativa': '5%',
      'Valor Protegido': '15.000,00',
      'Cobertura Terceiros': '150.000,00',
      DiaCadastro: 10,
      MesCadastro: 2,
      AnoCadastro: 2024
    },
    {
      Nome: 'Aurinete Maria',
      Telefone: '9835-4398',
      Marca: 'FIAT',
      Modelo: 'Palio ELX 1.0',
      'Ano modelo': '2002',
      Placa: 'JGG-9080',
      'Código FIPE': '4815162342',
      Parcela: '120,00',
      Vistoria: '250,00',
      'Ajuda Participativa': '5%',
      'Valor Protegido': '15.000,00',
      'Cobertura Terceiros': '150.000,00',
      DiaCadastro: 8,
      MesCadastro: 1,
      AnoCadastro: 2024
    },
    {
      Nome: 'Jack Sheppard',
      Telefone: '9835-4398',
      Marca: 'FIAT',
      Modelo: 'Weekend ELX 1.0',
      'Ano modelo': '2000',
      Placa: 'JGG-2340',
      'Código FIPE': '4815162342',
      Parcela: '110,00',
      Vistoria: '150,00',
      'Ajuda Participativa': '5%',
      'Valor Protegido': '15.000,00',
      'Cobertura Terceiros': '150.000,00',
      DiaCadastro: 1,
      MesCadastro: 2,
      AnoCadastro: 2024
    },
    {
      Nome: 'Will Turner',
      Telefone: '9835-4398',
      Marca: 'Sail',
      Modelo: 'Black Pearl ELX 1.0',
      'Ano modelo': '2000',
      Placa: 'JGG-1234',
      'Código FIPE': '4815162342',
      Parcela: '190,00',
      Vistoria: '350,00',
      'Ajuda Participativa': '5%',
      'Valor Protegido': '15.000,00',
      'Cobertura Terceiros': '150.000,00',
      DiaCadastro: 7,
      MesCadastro: 2,
      AnoCadastro: 2024
    },
    {
      Nome: 'McGaiver',
      Telefone: '9835-4398',
      Marca: 'Sail',
      Modelo: 'Black Pearl ELX 1.0',
      'Ano modelo': '2000',
      Placa: 'JGG-1234',
      'Código FIPE': '4815162342',
      Parcela: '190,00',
      Vistoria: '350,00',
      'Ajuda Participativa': '5%',
      'Valor Protegido': '15.000,00',
      'Cobertura Terceiros': '150.000,00',
      DiaCadastro: 7,
      MesCadastro: 1,
      AnoCadastro: 2024
    },
    {
      Nome: 'Torontotokyo',
      Telefone: '9835-4398',
      Marca: 'Sail',
      Modelo: 'Black Pearl ELX 1.0',
      'Ano modelo': '2000',
      Placa: 'JGG-1234',
      'Código FIPE': '4815162342',
      Parcela: '190,00',
      Vistoria: '350,00',
      'Ajuda Participativa': '5%',
      'Valor Protegido': '15.000,00',
      'Cobertura Terceiros': '150.000,00',
      DiaCadastro: 19,
      MesCadastro: 1,
      AnoCadastro: 2024
    },


  ]);

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
