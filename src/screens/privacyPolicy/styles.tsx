import { StyleSheet } from "react-native"
import colors from "../../utils/colors"
import fonts from "../../utils/fonts"


export default StyleSheet.create({
    gradientBtn: { width: "90%", borderRadius: 5, alignItems: 'center' , position:'absolute', bottom:30, alignSelf:'center', height:45,justifyContent:'center'},
    continue: { color: colors.black , fontFamily: fonts.SemiBold },
})