import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { useClientesContext } from '../../Context/useClienteContext';
import { ModalSalvo } from '../../Modal/ModalSalvo';
import { ModalCheck } from '../../Modal/ModalCheck';

import { styles } from './HomeStyles';

/* interface Cliente {
  Nome: string;
  Telefone: string;
  Marca: string;
  Modelo: string;
  'Ano modelo': string;
  Placa: string;
  'Código FIPE': string;
  'Valor Protegido': string;
} */

export default function Home() {
  const { clientes, setClientes } = useClientesContext();
  //const [clientes, setClientes] = useState<Cliente[]>([]);

  const [modalSalvoVisible, setModalSalvoVisible] = useState(false);
  const [modalCheckVisible, setModalCheckVisible] = useState(false);
  const [valor, setValor] = useState<string>('');

  const [novoCliente, setNovoCliente] = useState({
    Nome: '',
    Telefone: '',
    Marca: '',
    Modelo: '',
    'Ano modelo': '',
    Placa: '',
    'Código FIPE': '',
    Parcela: '',
    Vistoria: '',
    Franquia: '',
    'Valor Protegido': '',
  });

  const adicionarClientes = () => {
    if (novoCliente.Nome === '' ||
      novoCliente.Telefone === '' ||
      novoCliente.Marca === '' ||
      novoCliente.Modelo === '' ||
      novoCliente['Ano modelo'] === '' ||
      novoCliente.Placa === '' ||
      novoCliente['Código FIPE'] === '' ||
      novoCliente['Valor Protegido'] === '') {
      setModalCheckVisible(true)
    } else {
      setClientes((prevClientes) => [
        ...prevClientes,
        { ...novoCliente },
      ]);
      // Limpar os campos de input após a adição
      setNovoCliente({
        Nome: '',
        Telefone: '',
        Marca: '',
        Modelo: '',
        'Ano modelo': '',
        Placa: '',
        'Código FIPE': '',
        Parcela: '',
        Vistoria: '',
        Franquia: '',
        'Valor Protegido': '',
      });
      setModalSalvoVisible(true)
    }
  };

  const formatarNumero = (text: string) => {
    // Remover todos os caracteres não numéricos
    const numeroLimpo = text.replace(/[^0-9]/g, '');

    // Se o número estiver vazio, definir como vazio
    if (!numeroLimpo) {
      setValor('');
      return;
    }

    // Formatando o número
    const partes = numeroLimpo.match(/(\d{1,3})/g);

    // Verificar se partes é nulo
    if (!partes) {
      setValor('');
      return;
    }

    // Juntar as partes
    const formatado = partes.join('.');

    // Definir o valor formatado no estado
    setValor(formatado);
  };




  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Cotações</Text>
        <View>
          <Text style={styles.title}>Dados do Cliente</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={novoCliente.Nome}
              onChangeText={(text) => setNovoCliente((prev) => ({ ...prev, Nome: text.toUpperCase() }))}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TextInput
                style={[styles.input, { width: "50%" }]}
                placeholder="Telefone"
                value={novoCliente.Telefone}
                onChangeText={(text) => setNovoCliente((prev) => ({ ...prev, Telefone: text }))}
              />
              <TextInput
                style={[styles.input, { width: "47%" }]}
                placeholder="Marca"
                value={novoCliente.Marca}
                onChangeText={(text) => setNovoCliente((prev) => ({ ...prev, Marca: text }))}
              /></View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

              <TextInput
                style={[styles.input, { width: "58%" }]}
                placeholder="Modelo"
                value={novoCliente.Modelo}
                onChangeText={(text) => setNovoCliente((prev) => ({ ...prev, Modelo: text }))}
              />
              <TextInput
                style={[styles.input, { width: "40%" }]}
                placeholder="Ano Modelo"
                value={novoCliente['Ano modelo']}
                onChangeText={(text) => setNovoCliente((prev) => ({ ...prev, "Ano modelo": text }))}
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TextInput
                style={[styles.input, { width: "30%" }]}
                placeholder="Placa"
                value={novoCliente.Placa}
                onChangeText={(text) => setNovoCliente((prev) => ({ ...prev, Placa: text }))}
              />
              <TextInput
                style={[styles.input, { width: "32%" }]}
                placeholder="Código FIPE"
                value={novoCliente['Código FIPE']}
                onChangeText={(text) => setNovoCliente((prev) => ({ ...prev, "Código FIPE": text }))}
              />
              <TextInput
                style={[styles.input, { width: "35%" }]}
                placeholder="Parcela"
                value={novoCliente.Parcela ? `R$ ${novoCliente.Parcela}` : ''}
                onChangeText={(text) => setNovoCliente((prev) => ({ ...prev, "Parcela": text.replace('R$ ', '') }))}
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TextInput
                style={[styles.input, { width: "30%" }]}
                placeholder="Vistoria"
                value={novoCliente.Vistoria ? `R$ ${novoCliente.Vistoria}` : ''}
                onChangeText={(text) => setNovoCliente((prev) => ({ ...prev, "Vistoria": text.replace('R$ ', '') }))}
              />
              <TextInput
                style={[styles.input, { width: "30%" }]}
                placeholder="Franquia"
                value={novoCliente.Franquia ? `R$ ${novoCliente.Franquia}` : ''}
                onChangeText={(text) => setNovoCliente((prev) => ({ ...prev, "Franquia": text.replace('R$ ', '') }))}
              />
              <TextInput
                style={[styles.input, { width: "38%" }]}
                placeholder="Valor Protegido"
                value={novoCliente['Valor Protegido'] ? `R$ ${novoCliente['Valor Protegido']}` : ''}
                onChangeText={(text) => setNovoCliente((prev) => ({ ...prev, "Valor Protegido": text.replace('R$ ', '') }))}

              /></View>


          </View>
          <Modal
            visible={modalSalvoVisible}
            transparent={true}
            animationType='slide'
          >
            <ModalSalvo
              handleClose={() => setModalSalvoVisible(false)} />
          </Modal>
          <Modal
            visible={modalCheckVisible}
            transparent={true}
            animationType='slide'
          >
            <ModalCheck
              handleClose={() => setModalCheckVisible(false)} />
          </Modal>


          <TouchableOpacity
            style={styles.button}
            onPress={() => adicionarClientes()}
          >
            <Text style={styles.textButton}>Salvar Cotação</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View >
  );
}
