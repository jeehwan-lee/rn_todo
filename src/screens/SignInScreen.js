import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { signIn } from "../api/auth";
import Button from "../components/Button";
import Input, {
  IconNames,
  keyboardTypes,
  returnKeyTypes,
} from "../components/Input";
import SafeInputView from "../components/SafeInputView";

function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const passwordRef = useRef(null);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async () => {
    if (!isLoading && !disabled) {
      try {
        setIsLoading(true);
        Keyboard.dismiss();
        const data = await signIn(email, password);
        setIsLoading(false);
        navigation.navigate("List");
      } catch (error) {
        Alert.alert("로그인 실패", error, [
          { text: "확인", onPress: () => setIsLoading(false) },
        ]);
      }
    }
  };

  return (
    <SafeInputView>
      <SafeAreaView style={styles.container}>
        <Image source={require("../../assets/main.png")} style={styles.image} />
        <Input
          title="이메일"
          placeholder="your@email.com"
          keyboardType={keyboardTypes.EMAIL}
          returnKeyType={returnKeyTypes.NEXT}
          value={email}
          onChangeText={(text) => setEmail(text)}
          iconName={IconNames.EMAIL}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          title="비밀번호"
          returnKeyType={returnKeyTypes.DONE}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          iconName={IconNames.PASSWORD}
          ref={passwordRef}
          onSubmitEditing={onSubmit}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="로그인"
            onPress={onSubmit}
            disabled={disabled}
            isLoading={isLoading}
          />
        </View>
      </SafeAreaView>
    </SafeInputView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 20,
  },
});

export default SignInScreen;
