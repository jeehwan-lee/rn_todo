import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { GRAY } from "../color";
import ListItem from "./ListItem";

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const List = ({ data }) => {
  return (
    <FlatList
      windowSize={5}
      data={data}
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
        return <ListItem item={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default List;
