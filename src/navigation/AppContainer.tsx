import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "../screens/onBoarding";
import { useAppSelector } from "../hooks/reduxHook";
import { RootStackParamList } from "../utils";
import MainStack from "./routes/MainStack";
import AuthStack from "./routes/AuthStack";
import { Alert } from "react-native";

export const navigationRef = React.createRef<any>();
const routeNameRef: any = React.createRef();

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContainer: React.FC = () => {
  const isLoggedIn = false
  const { isFirstTime } = useAppSelector(state => state.auth)

  useEffect(() => {
    // verify is logged in here or not
  }, [])

  const onReady = () => routeNameRef.current = navigationRef.current.getCurrentRoute().name
  const onStateChange = () => {
    const currentRouteName = navigationRef.current.getCurrentRoute().name
    routeNameRef.current = currentRouteName
  }
  if (isFirstTime) { return <OnBoardingScreen /> }

  return (
      <NavigationContainer ref={navigationRef} onReady={onReady} onStateChange={onStateChange}>
        <Stack.Navigator>
          {isLoggedIn
            ? <Stack.Screen name="MainStack" component={MainStack} options={{ headerShown: false }} />
            : <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />}
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export const getCurrentRouteName = () => routeNameRef;
export default AppContainer;
