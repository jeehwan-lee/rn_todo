import { StyleSheet, Text, View } from "react-native";

const ListScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <Text style={{ fontSize: 30 }}>List Screen</Text>
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
