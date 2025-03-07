import { StyleProp, TextProps, TextStyle } from "react-native"

interface LabelProps extends TextProps {
    text: string;
    style?: StyleProp<TextStyle>;
    fontSize?:number;
    fontFamily?: "Regular" | "Black" | "BlackItalic" | "Bold" | "BoldItalic" | "Light" | "LightItalic" | "Medium" | "MediumItalic" | "Thin" | "ThinItalic" | 'SemiBold' | any;
}
