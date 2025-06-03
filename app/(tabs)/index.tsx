import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [number, setNumber] = useState(0);
  const [clearTimeout] = useState(() => {
    return () => {};
  });
  return (
    <View style={style.container}>
      <Text style={style.headerText}>Hello world 👋 🌍!</Text>
      <Image
        source={require("../../assets/images/welcome.jpg")}
        style={{ width: 200, height: 200 }}
      />
      <Text style={style.counterLable}>Current Number</Text>
      <Text style={style.counterValue}>{number}</Text>
      <View style={style.ButtonGroup}>
        <Button
          title="Increment"
          onPress={() => {
            setNumber(number + 1);
            console.log("Incremented number:", number);
          }}
          color="#4CAF50"
        />
        <Button
          title="Decrement"
          onPress={() => {
            setNumber(number - 1);
            console.log("Decremented number:", number);
          }}
          color="#F44336"
        />
        <Button
          title="Reset"
          onPress={() => {
            clearTimeout();
            setNumber(0);
            console.log("Reset number to:", number);
          }}
          color="#2196F3"
        />
      </View>
      <View
        style={{
          marginTop: 20,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <TextInput
          style={style.TextInput}
          placeholder="Enter Your Email"
          keyboardType="email-address"
        />
        <Button
          title="Submit"
          onPress={() => {
            // Submit logic here
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
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  counterLable: {
    fontSize: 20,
    margin: 10,
    color: "white",
  },
  counterValue: {
    fontSize: 28,

    color: "white",
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
  ButtonGroup: {
    flexDirection: "row",
    gap: 10,

    marginTop: 20,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
    alignItems: "center",

    borderRadius: 10,
    paddingVertical: 10,
  },
});
