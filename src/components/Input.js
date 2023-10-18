import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { BLACK, GRAY, PRIMARY } from "../color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const keyboardTypes = {
  DEFAULT: "default",
  EMAIL: "email-address",
};

export const returnKeyTypes = {
  DONE: "done",
  NEXT: "next",
};

export const IconNames = {
  EMAIL: "email",
  PASSWORD: "lock",
};

function Input({
  title,
  placeholder,
  keyboardType,
  returnKeyType,
  secureTextEntry,
  value,
  iconName,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          value && styles.hasValueTitle,
          isFocused && styles.focusedTitle,
        ]}
      >
        {title}
      </Text>
      <View>
        <TextInput
          {...props}
          style={[
            styles.input,
            value && styles.hasValueInput,
            isFocused && styles.focusedInput,
          ]}
          placeholder={placeholder ?? title}
          placeholderTextColor={GRAY.DEFAULT}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          keyboardAppearance="light"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name={iconName}
            size={20}
            color={(() => {
              switch (true) {
                case isFocused:
                  return PRIMARY.DEFAULT;
                case !!value:
                  return BLACK;
                default:
                  return GRAY.DEFAULT;
              }
            })()}
          />
        </View>
      </View>
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
    color: GRAY.DEFAULT,
  },
  hasValueTitle: {
    color: BLACK,
  },
  focusedTitle: {
    fontWeight: "600",
    color: PRIMARY.DEFAULT,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 42,
    borderColor: GRAY.DEFAULT,
    paddingLeft: 30,
  },
  focusedInput: {
    borderWidth: 2,
    borderColor: PRIMARY.DEFAULT,
    color: PRIMARY.DEFAULT,
  },
  hasValueInput: {
    borderColor: BLACK,
    color: BLACK,
  },
  icon: {
    position: "absolute",
    left: 8,
    height: "100%",
    justifyContent: "center",
  },
});

export default Input;
