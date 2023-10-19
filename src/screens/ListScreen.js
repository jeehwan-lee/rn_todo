import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

const ListScreen = ({ navigation }) => {
  console.log("rendering ListScreen");
  return (
    <View style={StyleSheet.container}>
      <Text style={{ fontSize: 30 }}>List Screen</Text>
      <Button title="push" onPress={() => navigation.push("List")} />
      <Button title="navigate" onPress={() => navigation.navigate("List")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListScreen;
