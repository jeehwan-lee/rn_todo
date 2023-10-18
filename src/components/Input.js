import { StyleSheet, Text, TextInput, View } from "react-native";

export const keyboardTypes = {
  DEFAULT: "default",
  EMAIL: "email-address",
};

export const returnKeyTypes = {
  DONE: "done",
  NEXT: "next",
};

function Input({
  title,
  placeholder,
  keyboardType,
  returnKeyType,
  secureTextEntry,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder ?? title}
        placeholderTextColor="#a3a3a3"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        keyboardAppearance="light"
      />
    </View>
  );
}

Input.defaultProps = {
  keyboardType: keyboardTypes.DEFAULT,
  returnKeyType: returnKeyTypes.DONE,
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 42,
  },
});

export default Input;
