import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
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
});