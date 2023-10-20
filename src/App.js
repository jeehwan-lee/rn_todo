import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WHITE } from "./color";
import UserContext, { UserProvider } from "./contexts/UserContext";
import AuthStack from "./navigations/Authstack";
import MainStack from "./navigations/MainStack";
import Navigation from "./navigations/Navigation";
import SignInScreen from "./screens/SignInScreen";

export default function App() {
  return (
    <UserProvider>
      <StatusBar style="dark" />
      <Navigation />
    </UserProvider>
  );
}
