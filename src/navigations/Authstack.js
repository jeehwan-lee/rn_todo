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
      initialRouteName="SignIn"
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "700",
        },
        headerTitle: ({ children, tintColor }) => {
          return (
            <Pressable onPress={() => console.log("test")}>
              <Text style={{ color: tintColor }}>{children}</Text>
            </Pressable>
          );
        },
        headerLeft: ({ canGoBack, tintColor }) => {
          const navigation = useNavigation();
          if (!canGoBack) return null;

          return (
            <Pressable onPress={() => navigation.goBack()} hitSlop={10}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={30}
                color={tintColor}
              />
            </Pressable>
          );
        },
        headerRight: ({ canGoBack, tintColor }) => {
          const navigation = useNavigation();
          if (!canGoBack) return null;

          return (
            <Pressable
              onPress={() => navigation.navigate("Settings")}
              hitSlop={10}
            >
              <MaterialCommunityIcons name="cog" size={30} color={tintColor} />
            </Pressable>
          );
        },
      }}
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: "TODO LIST",
          headerTintColor: PRIMARY.DEFAULT,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: "로그인",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "세팅",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
