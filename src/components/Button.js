import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";
import { GRAY, PRIMARY, WHITE, DANGER } from "../color";

export const ButtonTypes = {
  PRIMARY: "PRIMARY",
  DANGER: "DANGER",
};
const Button = ({ title, onPress, disabled, isLoading, buttonType }) => {
  const colors = { PRIMARY, DANGER };
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: colors[buttonType].DEFAULT },
        pressed && { backgroundColor: colors[buttonType].DARK },
        disabled && { backgroundColor: colors[buttonType].LIGHT, opacity: 0.6 },
      ]}
      disabled={disabled}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={GRAY.DEFAULT} />
      ) : (
        <Text style={StyleSheet.title}>{title}</Text>
      )}
    </Pressable>
  );
};

Button.defaultProps = {
  buttonType: ButtonTypes.PRIMARY,
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
    lineHeight: 20,
  },
});

export default Button;
