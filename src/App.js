import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WHITE } from "./color";
import AuthStack from "./navigations/Authstack";
import SignInScreen from "./screens/SignInScreen";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <AuthStack />
    </NavigationContainer>
  );
}
