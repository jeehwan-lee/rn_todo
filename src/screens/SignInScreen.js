import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Input, { keyboardTypes, returnKeyTypes } from "../components/Input";

function SignInScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: "padding" })}
    >
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Image
            source={require("../../assets/main.png")}
            style={styles.image}
          />
          <Input
            title="이메일"
            placeholder="your@email.com"
            keyboardType={keyboardTypes.EMAIL}
            returnKeyType={returnKeyTypes.NEXT}
          />
          <Input
            title="비밀번호"
            returnKeyType={returnKeyTypes.DONE}
            secureTextEntry={true}
          />
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SignInScreen;
