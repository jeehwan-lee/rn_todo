import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WHITE } from "./color";
import UserContext, { UserProvider } from "./contexts/UserContext";
import AuthStack from "./navigations/Authstack";
import MainStack from "./navigations/MainStack";
import SignInScreen from "./screens/SignInScreen";

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <UserContext.Consumer>
          {({ user }) => (user ? <MainStack /> : <AuthStack />)}
        </UserContext.Consumer>
      </NavigationContainer>
    </UserProvider>
  );
}
