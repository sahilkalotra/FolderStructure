import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import { isAndroid } from '../../utils/helper';

export default StyleSheet.create({
    toastContainer: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: colors.dullBlack,
        width: '95%',
        marginTop: isAndroid ? 10 : 20,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
    },
    lottie: {
        height: 50,
        width: 50
    },
    notificationDetailsContainer: {
        paddingLeft: 5,
        flex: 1
    },
    notificationTitle: {
        fontSize: 15,
        marginBottom: 3
    },
    notificationMessage: {
        fontSize: 13,
    },
    successColor: {
        color: "rgb(28,214,137)"
    },
    warningColor: {
        color: "rgb(253,160,0)"
    },
    errorColor: {
        color: "rgb(244,65,65)"
    },
    infoColor: {
        color: "rgb(30,191,227)"
    },
    // alert box styles
    alertBoxContainer: {
        height: 100,
        marginBottom: -10,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },

})