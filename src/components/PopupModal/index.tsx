import React from "react";
import { Animated, Image, Modal, ScrollView, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native"
import colors from "../../utils/colors";
import assets from "../../assets";

interface popupModalProps {
    visible: boolean;
    onClose: () => void;
    children: any;
    scrollEnabled?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
}

const PopupModal: React.FC<popupModalProps> = ({
    visible,
    onClose,
    children,
    scrollEnabled = true,
    containerStyle
}) => {
    return (
        <Modal visible={visible} transparent={true}>
            <View style={styles.positioned}>
                <View style={[styles.sheetContainer, containerStyle]}>
                    <ScrollView scrollEnabled={scrollEnabled} contentContainerStyle={styles.scrollContainer}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>
                        {children}
                    </ScrollView>
                    <TouchableOpacity onPress={() => onClose()} style={styles.overlapCross}>
                        <Image source={assets.cross} style={styles.crossImg} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    positioned: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.black2
    },
    container: {
        flex: 1
    },
    sheetContainer: {
        maxHeight: '90%',
        backgroundColor: colors.dullBlack,
        borderRadius: 10,
        padding: 50,
        paddingTop: 30,
        marginHorizontal: 15
    },
    overlapCross: {
        position: 'absolute',
        top: -20,
        right: 10,
        backgroundColor: colors.black2,
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    crossImg: {
        height: 45,
        width: 45,
        resizeMode: 'contain'
    },
    scrollContainer: {
        flexGrow: 1
    }
})
export default PopupModal;