import { ViewProps, ViewStyle } from "react-native/types";

interface GradientButtonProps {
    children: React.ReactNode; 
    onPress: (data?:any) => void; 
    gradientColors?: string[]; 
    gradientStart?: { x: number, y: number }; 
    gradientEnd?: { x: number, y: number };
    style?: ViewStyle; 
  }