import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(24,24,24,0.9)",
        paddingTop: 100,
        alignItems: "center"
    },
    context: {
        backgroundColor: "#43245c",
        width: "95%",
        padding: 10,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#e9a429"
    },
    title: {
        paddingTop: 10,
        color: "#e9a429",
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    buttonContainer: {
        top: 20,
        width: "100%",
        alignItems: "center",
        paddingBottom: 25
    },
    button: {
        height: 50,
        marginVertical: 10,
        backgroundColor: "#e9a429",
        width: "85%",
        borderRadius: 9,
        justifyContent: "center"
    },
    textButton: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        padding: 5,
        color: "#000"
    }
});