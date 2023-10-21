import { memo } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { GRAY } from "../color";
import Button from "../components/Button";
import EmptyList from "../components/EmptyList";
import InputFAB from "../components/InputFAB";
import List from "../components/List";
import ListItem from "../components/ListItem";

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
    <View style={{ flex: 1, paddingBottom: bottom }}>
      {todos.length !== 0 ? <List data={todos} /> : <EmptyList />}
    </View>
  );
};

export default ListScreen;
