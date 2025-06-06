import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  const [number, setNumber] = useState(0);
  const [clearTimeout] = useState(() => {
    return () => {};
  });
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
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
        ></View>
      </View>
    </>
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
