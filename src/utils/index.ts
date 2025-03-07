export type RootStackParamList = {
  // <-- Auth Navigation -->
  OnBoarding: undefined;
  AuthStack: undefined;
  SignIn:undefined;
  SignUp:undefined;
  forgotPassword:undefined;
  createPassword: {email:string};
  otpVerification:{type: 'signUp' | 'forgotPassword', email: string};
  profilePhoto:undefined;
  coverPhoto:undefined;
  userInfo:undefined;
  privacyPolicy:undefined;
  termsAndCondition:undefined;

  // <-- Main Navigation -->
  MainStack: undefined;
  TabNavigator: undefined
  HomeScreen:undefined;
};
