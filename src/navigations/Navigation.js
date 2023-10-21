import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";
import AuthStack from "./Authstack";
import MainStack from "./MainStack";

const Navigation = () => {
  const { user } = useContext(UserContext);
  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
