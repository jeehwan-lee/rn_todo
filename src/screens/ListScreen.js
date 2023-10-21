import { useState } from "react";
import { memo } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { GRAY } from "../color";
import Button from "../components/Button";
import EmptyList from "../components/EmptyList";
import InputFAB from "../components/InputFAB";
import List from "../components/List";
import ListItem from "../components/ListItem";

const ListScreen = () => {
  const [todos, setTodos] = useState([]);

  const onInsert = (task) => {
    const id = Date.now().toString();
    setTodos((prev) => [{ id, task, isDone: false }, ...prev]);
  };

  return (
    <View style={{ flex: 1 }}>
      {todos.length !== 0 ? <List data={todos} /> : <EmptyList />}
      <InputFAB onInsert={onInsert} />
    </View>
  );
};

export default ListScreen;
