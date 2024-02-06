import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#43245c",
    },
    title: {
        fontSize: 40,
        textAlign: "center",
        padding: 15,
        color: "#cbc7cd"
    },
    listContainer: {
        maxHeight: 600,
        width: "93%",
        alignSelf: "center"
    },
    text: {
        width: "80%",
        fontSize: 15,
        fontWeight: "bold"
    },
    clienteContainer: {
        alignItems: "center",
        backgroundColor: "#fff",
        height: 60,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: "row",
        padding: 10
    }
});