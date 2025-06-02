import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <Text style={style.headerText}>Hello world 👋 🌍!</Text>
      <Image
        source={require("../../assets/images/welcome.jpg")}
        style={{ width: 200, height: 200 }}
      />
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
});
