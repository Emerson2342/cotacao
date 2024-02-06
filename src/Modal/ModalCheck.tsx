import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './ModalCheckStyles';

interface ModalCheckProps {
    handleClose: () => void;
}
export function ModalCheck({ handleClose }: ModalCheckProps) {

    return (
        <View style={styles.container}>
            <View style={styles.context}>
                <View ><Text style={styles.title}>Favor preencher todos os campos</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleClose()}>
                        <Text style={styles.textButton}> Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
