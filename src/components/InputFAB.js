import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PRIMARY, WHITE } from "../color";

const InputFAB = () => {
  const [text, setText] = useState("");
  return (
    <>
      <View
        style={[styles.position, styles.shape, { justifyContent: "center" }]}
      >
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          style={[styles.input]}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType
          keyboardAppearance="light"
          returnKeyType="done"
        />
      </View>
      <Pressable
        style={({ press }) => [
          styles.position,
          styles.shape,
          styles.button,
          pressed && { backgroundColor: PRIMARY.DARK },
        ]}
      >
        <MaterialCommunityIcons name="plus" size={24} color={WHITE} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  position: {
    position: "absolute",
    bottom: 30,
    right: 10,
  },
  shape: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: PRIMARY.DEFAULT,
  },
  input: {
    color: WHITE,
    paddingLeft: 20,
    paddingRight: 70,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default InputFAB;
