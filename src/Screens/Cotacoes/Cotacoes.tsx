import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Alert, } from 'react-native';
import { useClientesContext } from '../../Context/useClienteContext';
import { ModalCliente } from '../../Modal/ModalCliente';
import { Picker } from '@react-native-picker/picker';

import { styles } from './CotacoesStyles';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

interface Cliente {
    Nome?: string,
    Telefone?: string,
    Modelo?: string,
    Vistoria?: string,
    "Valor Protegido"?: string,
    DiaCadastro?: number,
    MesCadastro?: number,
    AnoCadastro?: number,
}

export function Cotacoes() {

    const { clientes, removerCliente, selecionarCliente } = useClientesContext();

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedDay, setSelectedDay] = useState(0);
    const [clientesFiltrados, setClientesFiltrados] = useState<Cliente[]>((clientes));

    const meses = [
        { label: 'Mostrar todos', value: '0' },
        { label: 'Janeiro', value: '1' },
        { label: 'Fevereiro', value: '2' },
        { label: 'Março', value: '3' },
        { label: 'Abril', value: '4' },
        { label: 'Maio', value: '5' },
        { label: 'Junho', value: '6' },
        { label: 'Julho', value: '7' },
        { label: 'Agosto', value: '8' },
        { label: 'Setembro', value: '9' },
        { label: 'Outubro', value: '10' },
        { label: 'Novembro', value: '11' },
        { label: 'Dezembro', value: '12' },
    ];


    const dias = [
        { label: 'Mostrar todos', value: '0' },
        ...Array.from({ length: 31 }, (_, index) => ({ label: `${index + 1}`, value: `${index + 1}` })),
    ];




    const filtrarClientes = () => {
        if (selectedMonth == 0 && selectedDay == 0) {
            setClientesFiltrados(clientes)
        }
        if (selectedMonth != 0 && selectedDay == 0) {
            const clientesFiltradosMes = clientes.filter(cliente => cliente.MesCadastro == selectedMonth);
            setClientesFiltrados(clientesFiltradosMes)
        } if (selectedMonth != 0 && selectedDay != 0) {
            const clientesFiltradosDiaMes = clientes.filter(
                cliente => cliente.DiaCadastro == selectedDay && cliente.MesCadastro == selectedMonth
            );
            setClientesFiltrados(clientesFiltradosDiaMes);
        }
        if (selectedMonth != 0 && selectedDay == 0) {
            const clientesFiltradosMes = clientes.filter(cliente => cliente.MesCadastro == selectedMonth);
            setClientesFiltrados(clientesFiltradosMes);
        }
        if (selectedMonth == 0 && selectedDay != 0) {
            Alert.alert("", "Favor selecionar o mês!")
        }
    };


    const renderItem = ({ item, index }: { item: Cliente, index: number }) => {

        const diaFormatado = String(item['DiaCadastro']).padStart(2, '0');
        const mesFormatado = String(item['MesCadastro']).padStart(2, '0');


        return (
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(true);
                    selecionarCliente(item)
                }}

                onLongPress={() => {
                    Alert.alert(
                        'Confirmar Exclusão',
                        'Tem certeza que deseja excluir este cliente?',
                        [
                            {
                                text: 'Cancelar',
                                style: 'cancel',
                            },
                            {
                                text: 'Excluir',
                                onPress: () => {
                                    removerCliente(item);
                                    Alert.alert("", "Favor atualizar a lista!")
                                },
                            },

                        ],
                        { cancelable: true }
                    );
                }}


                style={styles.clienteContainer}>
                <View >
                    <View style={{ flexDirection: "row" }}>
                        <Text>Nome:{' '}</Text><Text style={styles.text}> {item.Nome} </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text>Carro:{' '}</Text>< Text style={styles.text}>{item.Modelo}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text>Data da Cotação:{' '}</Text>
                            <Text style={styles.text}>{diaFormatado}/{mesFormatado}/{item['AnoCadastro']} </Text>
                        </View>
                        <View style={{ flexDirection: "row", width: "50%" }}>
                            <Text>Telefone:{' '}</Text><Text style={styles.text}>{item.Telefone}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        );
    };



    return (


        <View style={styles.container}>
            <Text style={styles.title}>Cotações Salvas</Text>
            <View style={styles.dropContainer}>
                <Text style={{ color: "#fff", fontSize: 20 }}>Selecione o mês</Text>
                <View style={styles.picker}>
                    <Picker
                        selectedValue={selectedMonth}
                        onValueChange={(itemValue, itemIndex) => setSelectedMonth(itemValue)}
                    >
                        {meses.map((mes) => (
                            <Picker.Item key={mes.value} label={mes.label} value={mes.value} />
                        ))}
                    </Picker>
                </View>
            </View>
            <View style={styles.dropContainer}>
                <Text style={{ color: "#fff", fontSize: 20 }}>Selecione o dia</Text>
                <View style={styles.picker}>

                    <Picker
                        selectedValue={selectedDay}
                        onValueChange={(itemValue, itemIndex) => setSelectedDay(itemValue)}
                    >
                        {dias.map((dia) => (
                            <Picker.Item key={dia.value} label={dia.label} value={dia.value} />
                        ))}
                    </Picker>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => filtrarClientes()}
                style={styles.buttonContainer}
            >
                <Text style={styles.buttonText}>Atualizar Clientes</Text>
            </TouchableOpacity>

            <View style={styles.listContainer}>
                {clientesFiltrados.length > 0 ? (<FlatList
                    data={clientesFiltrados}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />) : <Text style={styles.textoVazio}>Nenhuma Cotação Salva</Text>}

            </View>
            <Modal
                visible={modalVisible}
                transparent={true}

                animationType='slide'
            >
                <ModalCliente
                    handleClose={() => setModalVisible(false)}
                />
            </Modal>
        </View>
    );
}