import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, SectionList, } from 'react-native';
import { useClientesContext } from '../../Context/useClienteContext';
import { ModalCliente } from '../../Modal/ModalCliente';
import { Picker } from '@react-native-picker/picker';

import { styles } from './CotacoesStyles';

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
    const [selectedMonth, setSelectedMonth] = useState(1);
    const [selectedDay, setSelectedDay] = useState(1);
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
        //  setClientesFiltrados(clientes);

        if (selectedMonth == 0 && selectedDay == 0) {
            setClientesFiltrados(clientes);
        }

        if (selectedMonth != 0 && selectedDay != 0) {
            const clientesFiltradosDiaMes = clientes.filter(
                cliente => cliente.DiaCadastro == selectedDay && cliente.MesCadastro == selectedMonth
            );
            setClientesFiltrados(clientesFiltradosDiaMes);
        }

        if (selectedMonth != 0 && selectedDay == 0) {
            const clientesFiltradosMes = clientes.filter(cliente => cliente.MesCadastro == selectedMonth);
            setClientesFiltrados(clientesFiltradosMes);
        }
    };







    const renderItem = ({ item, index }: { item: Cliente, index: number }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(true);
                    selecionarCliente(item)
                }}
                onLongPress={() => removerCliente(index)}
                style={styles.clienteContainer}>
                <View style={{ width: "60%" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ width: "20%" }}>Nome:</Text><Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}> {item.Nome} </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        {/*  <Text style={{ width: "20%" }}>Carro: </Text>< Text style={styles.text}>{item.Modelo}</Text> */}
                        <Text style={{ width: "20%" }}>Data: </Text>
                        < Text style={styles.text}>{item['DiaCadastro']}/{item['MesCadastro']}/{item['AnoCadastro']}</Text>
                    </View>
                </View>

                <View style={{ width: "100%" }} >
                    <Text style={{ width: "35%", textAlign: "center" }}>Telefone:</Text><Text style={[styles.text, { textAlign: "center", width: "33%" }]}>{item.Telefone}</Text>
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

            <View style={styles.listContainer}>
                <FlatList
                    data={clientesFiltrados}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>

            <TouchableOpacity
                //onPress={() => alert(JSON.stringify(clientes))}
                onPress={() => filtrarClientes()}

                style={{ backgroundColor: "#fff" }}
            >
                <Text>Clientes Filtrados</Text>
            </TouchableOpacity>

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