import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    border:{
        borderWidth:1, borderColor:colors.white
    },
    gap:{ gap: 15 },
    row:{
        flexDirection: "row",
    },
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    alignEnd:{ alignItems:'flex-end'},
    alignCenter:{
        alignItems: "center",
    },
    justifyBetween: {
        flexDirection:"row",
        alignItems: 'flex-start',
        justifyContent: "space-between",
    },
    justifyRowBetween: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    rowCenter: {
        justifyContent: "center",
        alignItems: "center",
    },
    justifyRowCenter: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    error : { borderColor: colors.red, borderWidth: 1 }
});