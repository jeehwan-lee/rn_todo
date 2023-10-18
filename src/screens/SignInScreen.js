import { useState } from "react";
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
import Input, {
  IconNames,
  keyboardTypes,
  returnKeyTypes,
} from "../components/Input";
import SafeInputView from "../components/SafeInputView";

function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  return (
    <SafeInputView>
      <View style={styles.container}>
        <Image source={require("../../assets/main.png")} style={styles.image} />
        <Input
          title="이메일"
          placeholder="your@email.com"
          keyboardType={keyboardTypes.EMAIL}
          returnKeyType={returnKeyTypes.NEXT}
          value={email}
          onChangeText={(text) => setEmail(text)}
          iconName={IconNames.EMAIL}
        />
        <Input
          title="비밀번호"
          returnKeyType={returnKeyTypes.DONE}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          iconName={IconNames.PASSWORD}
        />
      </View>
    </SafeInputView>
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
