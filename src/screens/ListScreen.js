import { memo } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

const ListItem = memo(({ item }) => {
  console.log(item.id);
  return (
    <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
      <Text Style={{ fontSize: 20 }}>{item.task}</Text>
    </View>
  );
});
const ListScreen = ({ navigation }) => {
  const todos = [];
  for (let i = 1; i < 501; i++) {
    todos.push({ id: i, task: `task : ${i}` });
  }

  return (
    <View style={StyleSheet.container}>
      <FlatList
        windowSize={5}
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          console.log(item.id);
          return <ListItem item={item} />;
        }}
      />
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
