import { memo } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { GRAY } from "../color";
import Button from "../components/Button";
import ListItem from "../components/ListItem";

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const ListScreen = () => {
  const todos = [
    { id: 1, task: "React Native", isDone: false },
    { id: 2, task: "Flutter", isDone: false },
    { id: 3, task: "Android", isDone: false },
    { id: 4, task: "Swift", isDone: false },
    { id: 5, task: "React", isDone: false },
    { id: 6, task: "Vue", isDone: true },
  ];

  return (
    <View style={StyleSheet.container}>
      <FlatList
        windowSize={5}
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={() => {
          return (
            <>
              <View style={{ height: 10 }}></View>
            </>
          );
        }}
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
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default ListScreen;
