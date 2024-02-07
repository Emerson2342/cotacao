import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#43245c",
    overflow: "hidden"
  },

  header: {
    color: "#cbc7cd",
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
  },
  title: {
    color: "#cbc7cd",
    fontSize: 25,
    textAlign: "center",
  },
  button: {
    marginTop: 15,
    padding: 5,
    alignSelf: "center",
    backgroundColor: "#e9a429",
    width: "70%",
    borderRadius: 9,
    justifyContent: "center"
  },
  input: {
    paddingLeft: 10,
    fontSize: 17,
    borderWidth: 1,
    height: 45,
    borderRadius: 9,
    marginVertical: 3,
    backgroundColor: "#fff",

  },
  inputContainer: {
    width: "90%",
    alignSelf: "center",
    //paddingTop: 20,

  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 3,
    color: "#000"
  },
  drop: {
    width: "33%",
    height: 45,
    alignSelf: "center",
    borderRadius: 9,
    overflow: 'hidden',
    backgroundColor: "#fff",
    justifyContent: "center",


  },
  fontDrop: {
    color: "#43245c",
    textAlign: "left",

  }
});