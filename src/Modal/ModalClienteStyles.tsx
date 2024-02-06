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
        padding: 15,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#e9a429"
    },
    text: {
        fontSize: 20,
        color: "#fff",
        marginVertical: 3
    },
    buttonContainer: {
        top: 20,
        width: "100%",
        alignItems: "center"
    },
    buttonContainer2: {
        flexDirection: "row",
        width: "94%",
        justifyContent: "space-between",

    },
    button: {
        height: 50,
        marginVertical: 10,
        backgroundColor: "#e9a429",
        borderRadius: 9,
        justifyContent: "center",
        width: "94%"
    },
    button2: {
        height: 50,
        marginVertical: 10,
        backgroundColor: "#e9a429",
        borderRadius: 9,
        justifyContent: "center",
        width: "48%"
    },
    textButton: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        padding: 5,
        color: "#000",

    }
});