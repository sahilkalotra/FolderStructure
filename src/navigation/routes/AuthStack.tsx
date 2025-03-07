import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils";
import SignIn from "../../screens/signIn";
import SignUp from "../../screens/signUp";
import ForgotPassword from "../../screens/forgotPassword";
import CreatePassword from "../../screens/createPassword";
import OtpVerification from "../../screens/otpVerification";
import ProfilePhoto from "../../screens/createProfile/profilePhoto";
import CoverPhoto from "../../screens/createProfile/coverPhoto";
import UserInfo from "../../screens/createProfile/userInfo";
import PrivacyPolicy from "../../screens/privacyPolicy";
import TermsAndCondition from "../../screens/termsAndCondition";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn" >
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
      <Stack.Screen name="createPassword" component={CreatePassword} options={{ headerShown: false }} />
      <Stack.Screen name="otpVerification" component={OtpVerification} options={{ headerShown: false }} />
      <Stack.Screen name="profilePhoto" component={ProfilePhoto} options={{ headerShown: false }} />
      <Stack.Screen name="coverPhoto" component={CoverPhoto} options={{ headerShown: false }} />
      <Stack.Screen name="userInfo" component={UserInfo} options={{ headerShown: false }} />
      <Stack.Screen name="privacyPolicy" component={PrivacyPolicy} options={{ headerShown: false }} />
      <Stack.Screen name="termsAndCondition" component={TermsAndCondition} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthStack;
