import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WHITE } from "./color";
import AuthStack from "./navigations/Authstack";
import MainStack from "./navigations/MainStack";
import SignInScreen from "./screens/SignInScreen";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      {user ? (
        <MainStack user={user} setUser={setUser} />
      ) : (
        <AuthStack user={user} setUser={setUser} />
      )}
    </NavigationContainer>
  );
}
