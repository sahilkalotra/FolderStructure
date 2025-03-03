import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { isAndroid } from "../../utils/helper";


export default StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', paddingHorizontal:10,
      backgroundColor:colors.black, paddingTop:isAndroid ? 35 : 0
    },
    leftIconContainer: {
      padding: 10,
    },
    rightIconContainer: {
      padding: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.white,
    },
  });