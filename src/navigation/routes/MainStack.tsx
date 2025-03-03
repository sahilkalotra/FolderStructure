import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils";



const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator>
    </Stack.Navigator>
  );
};

export default MainStack;
