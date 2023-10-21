import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WHITE } from "./color";
import SignInScreen from "./screens/SignInScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SignInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});
