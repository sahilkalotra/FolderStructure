import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { deviceWidth } from "../../utils/helper";
import fonts from "../../utils/fonts";


export default StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    modalContainer: {
        borderColor: colors.black2,
        backgroundColor: colors.dullBlack,
        padding: 20, gap:15,
        borderRadius: 10,borderWidth:1,
        maxWidth: 400, width: deviceWidth - 40,
        alignItems: 'center',
    },
    imgStyle:{ height: 120, width: 120 },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        marginBottom: 20, textAlign: 'center'
    },
    button: { width: "95%", borderRadius: 5, alignItems: 'center' },
    buttonText: {
        color: colors.black,
        fontSize: 16, fontFamily: fonts.Bold
    },
});