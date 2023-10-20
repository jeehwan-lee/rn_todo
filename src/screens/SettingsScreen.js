import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import UserContext from "../contexts/UserContext";

const SettingsScreen = () => {
  const { setUser } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Button title="로그아웃" onPress={() => setUser(null)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default SettingsScreen;
