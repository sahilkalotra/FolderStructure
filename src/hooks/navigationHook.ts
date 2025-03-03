import { NavigationProp } from "@react-navigation/native";
import { useNavigation as useNavigationBase } from "@react-navigation/native";
import { RootStackParamList } from "../utils";

type StackNavigationProp = NavigationProp<RootStackParamList>;

export function useNavigation() {
  return useNavigationBase<StackNavigationProp>();
}
