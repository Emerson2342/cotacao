import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(24,24,24,0.8)",
        paddingTop: 100,
        alignItems: "center"
    },
    context: {
        backgroundColor: "#cbc7cd",
        width: "95%",
        padding: 10,
        borderRadius: 9,
        // borderWidth: 1,
        borderColor: "#e9a429"
    },
    text: {
        fontSize: 20,
        color: "#000",
        marginVertical: 3,

    },
    buttonContainer: {
        flexDirection: "row",
        width: "94%",
        justifyContent: "space-between",
        alignSelf: "center"
    },

    button: {
        height: 50,
        marginVertical: 10,
        backgroundColor: "#e9a429",
        borderRadius: 9,
        justifyContent: "center",
        width: "48%",

    },
    textButton: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        padding: 5,
        color: "#000",

    }
});