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
    picker: {
        height: 40,
        alignSelf: "center",
        width: "55%",
        backgroundColor: "#fff",
        borderRadius: 4,
        justifyContent: "center",
        marginBottom: 7
    },
    dropContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        alignSelf: "center"
    },
    buttonContainer: {
        backgroundColor: "#fff",
        width: "50%",
        borderRadius: 5,
        alignSelf: "center",
        height: 45,
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    listContainer: {
        top: 15,
        maxHeight: 490,
        width: "93%",
        alignSelf: "center"
    },
    text: {
        fontSize: 15,
        fontWeight: "bold"
    },
    clienteContainer: {
        alignItems: "center",
        backgroundColor: "#fff",
        height: 65,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: "row",
        padding: 10
    },
    textoVazio: {
        top: 150,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        color: "#E9A429",
    }
});