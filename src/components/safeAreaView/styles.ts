import { StatusBar, StyleSheet } from "react-native";
import commonStyle from "../../utils/commonStyle";

export default StyleSheet.create({
    statusBar: {
        ...commonStyle.container,
        height: StatusBar.currentHeight
    },
    contentContainer : { flex:1 , paddingTop: StatusBar.currentHeight }
})