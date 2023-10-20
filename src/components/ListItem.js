import React, { memo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BLACK, DANGER, PRIMARY } from "../color";

const ListItem = memo(({ item }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => {}} hitSlop={10}>
        {item.isDone ? (
          <MaterialCommunityIcons
            name="checkbox-marked"
            size={20}
            color={PRIMARY.DEFAULT}
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-blank-outline"
            size={20}
            color={BLACK}
          />
        )}
      </Pressable>
      <View style={styles.task}>
        <Text Style={{ fontSize: 20 }}>{item.task}</Text>
      </View>
      <Pressable onPress={() => {}} hitSlop={10}>
        <MaterialCommunityIcons
          name="trash-can"
          size={20}
          color={DANGER.DEFAULT}
        />
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
  task: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default ListItem;
