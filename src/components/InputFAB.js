import React, { useEffect, useRef, useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Platform,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PRIMARY, WHITE } from "../color";
import { useWindowDimensions } from "react-native";

const InputFAB = () => {
  const [text, setText] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(BOTTOM);

  const inputRef = useRef(null);
  const windowWidth = useWindowDimensions().width;

  const BOTTOM = 30;

  useEffect(() => {
    if (Platform.OS === "ios") {
      const show = Keyboard.addListener("keyboardWillShow", (e) => {
        setKeyboardHeight(e.endCoordinates.height + BOTTOM);
      });
      const hide = Keyboard.addListener("keyboardWillHide", () => {
        setKeyboardHeight(BOTTOM);
      });

      return () => {
        show.remove();
        hide.remove();
      };
    }
  }, []);

  const open = () => {
    inputRef.current.focus();
    setIsOpened(true);
  };

  const close = () => {
    if (isOpened) {
      inputRef.current.blur();
      setText("");
      setIsOpened(false);
    }
  };

  const onPressButton = () => {
    isOpened ? close() : open();
  };

  return (
    <>
      <View
        style={[
          styles.position,
          styles.shape,
          { justifyContent: "center", bottom: keyboardHeight },
          isOpened && { width: windowWidth - 20 },
        ]}
      >
        <TextInput
          ref={inputRef}
          onBlur={close}
          value={text}
          onChangeText={(text) => setText(text)}
          style={[styles.input]}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          keyboardAppearance="light"
          returnKeyType="done"
        />
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.position,
          styles.shape,
          styles.button,
          { bottom: keyboardHeight },
          pressed && { backgroundColor: PRIMARY.DARK },
        ]}
        onPress={onPressButton}
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
