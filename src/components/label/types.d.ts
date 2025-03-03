import { TextProps } from "react-native"

interface LabelProps extends TextProps {
    text: string;
    style?: ViewStyle;
    fontSize?:number;
    fontFamily?: "Regular" | "Black" | "BlackItalic" | "Bold" | "BoldItalic" | "Light" | "LightItalic" | "Medium" | "MediumItalic" | "Thin" | "ThinItalic";
}
