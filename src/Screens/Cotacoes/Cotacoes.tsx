import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useClientesContext } from '../../Context/useClienteContext';
import { ModalCliente } from '../../Modal/ModalCliente';

import { styles } from './CotacoesStyles';

interface Cliente {
    Nome?: string,
    Telefone?: string,
    Modelo?: string,
    Vistoria?: string,
    "Valor Protegido"?: string
}

export function Cotacoes() {

    const { clientes, removerCliente, selecionarCliente } = useClientesContext();

    const [modalVisible, setModalVisible] = useState(false);



    const renderItem = ({ item, index }: { item: Cliente; index: number }) => {
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
                        <Text style={{ width: "20%" }}>Carro: </Text>< Text style={styles.text}>{item.Modelo}</Text>
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
            <View style={styles.listContainer}>
                <FlatList
                    data={clientes}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />

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