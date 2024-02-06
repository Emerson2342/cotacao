import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(24,24,24,0.9)",
        // paddingTop: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    context: {
        backgroundColor: "#43245c",
        width: "70%",
        padding: 10,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#e9a429"
    },
    title: {
        paddingTop: 10,
        color: "#e9a429",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
    },
    buttonContainer: {
        top: 20,
        width: "100%",
        alignItems: "center",
        paddingBottom: 25
    },
    button: {
        backgroundColor: "#e9a429",
        width: "50%",
        borderRadius: 9,
        justifyContent: "center"
    },
    textButton: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        padding: 5,
        color: "#000"
    }
});