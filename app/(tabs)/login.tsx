import { Button, StyleSheet, TextInput, View } from "react-native";

export default function Login() {
  return (
    <View style={style.container}>
      <TextInput
        style={style.TextInput}
        placeholder="Enter Your Username"
        autoCapitalize="words"
        autoCorrect={false}
      />
      <TextInput
        style={style.TextInput}
        placeholder="Enter Your Email"
        keyboardType="email-address"
      />

      <View style={style.button}>
        <Button
          title="Submit"
          onPress={() => {
            // Submit logic here
            alert("Form submitted");
          }}
          color="#111111"
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  TextInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    color: "white",
    backgroundColor: "#333",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#111111",
    borderRadius: 5,
    marginTop: 20,
    width: "15%",
  },
});
