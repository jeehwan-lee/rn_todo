import { Pressable, StyleSheet, Text } from "react-native";
import { PRIMARY, WHITE } from "../color";

const Button = ({ title, onPress, disabled }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && { backgroundColor: PRIMARY.DARK },
        disabled && { backgroundColor: PRIMARY.LIGHT, opacity: 0.6 },
      ]}
      disabled={disabled}
    >
      <Text style={StyleSheet.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PRIMARY.DEFAULT,
  },
  title: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "700",
  },
});

export default Button;
