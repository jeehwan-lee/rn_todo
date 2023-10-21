import { useState } from "react";
import { memo } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import { GRAY } from "../color";
import Button from "../components/Button";
import EmptyList from "../components/EmptyList";
import InputFAB from "../components/InputFAB";
import List from "../components/List";
import ListItem from "../components/ListItem";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const ListScreen = () => {
  const [todos, setTodos] = useState([]);
  const [isBottom, setIsBottom] = useState(false);

  const { getItem, setItem } = useAsyncStorage("todos2");

  const save = async (data) => {
    try {
      await setItem(JSON.stringify(data));
      setTodos(data);
    } catch (e) {
      Alert.alert("저장하기 실패", "데이터 저장에 실패했습니다.");
    }
  };

  const load = async () => {
    try {
      const data = await getItem();
      const todos = JSON.parse(data || "[]");
      setTodos(todos);
    } catch (e) {
      console.log(e);
      Alert.alert("불러오기 실패", "데이터 불러오기에 실패했습니다.");
    }
  };

  const onInsert = (task) => {
    const id = Date.now().toString();
    const newTodos = [{ id: id, task: task, isDone: false }, ...todos];
    save(newTodos);
  };

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    save(newTodos);
  };

  const onToggle = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    save(newTodos);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {todos.length !== 0 ? (
        <List
          data={todos}
          setIsBottom={setIsBottom}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ) : (
        <EmptyList />
      )}
      <InputFAB onInsert={onInsert} isBottom={isBottom} />
    </View>
  );
};

export default ListScreen;
