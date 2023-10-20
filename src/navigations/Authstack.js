import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { PRIMARY, WHITE } from "../color";
import ListScreen from "../screens/ListScreen";
import SignInScreen from "../screens/SignInScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
