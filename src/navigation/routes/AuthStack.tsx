import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils";
import SignIn from "../../screens/signIn";
import SignUp from "../../screens/signUp";
import ForgotPassword from "../../screens/forgotPassword";
import CreatePassword from "../../screens/createPassword";
import OtpVerification from "../../screens/otpVerification";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn" >
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
      <Stack.Screen name="createPassword" component={CreatePassword} options={{ headerShown: false }} />
      <Stack.Screen name="otpVerification" component={OtpVerification} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthStack;
