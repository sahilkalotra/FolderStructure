import { ScrollView, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import colors from '../../utils/colors'
import SafeArea from '../../components/safeAreaView'
import CustomHeader from '../../components/header'
import { useNavigation } from '../../hooks/navigationHook'
import Label from '../../components/label'
import commonStyle from '../../utils/commonStyle'
import fonts from '../../utils/fonts'
import GradientButton from '../../components/gradientButton'
import local from '../../utils/local'
import styles from './styles'
import { deviceHeight } from '../../utils/helper'
import LinearGradient from 'react-native-linear-gradient'

const PrivacyPolicy = () => {
    const navigation = useNavigation()
    const gradientColor = [colors.lightPink, colors.lightHotPink];
    const start = { x: 0, y: 0 }; const end = { x: 1, y: 0 };

    const onBackPress = () => {
        navigation.reset({ index: 0, routes: [{ name: "SignIn" }] })
    }
    const handleAccept = () => navigation.navigate('termsAndCondition')

    return (
        <SafeArea backgroundColor={colors.black} barStyle="light-content">
            <CustomHeader onPressLeft={onBackPress} />
            <View style={commonStyle.rowCenter}>
                <Label text={local.PRIVACY_POLICY} fontSize={24} fontFamily={fonts.SemiBold} />
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: deviceHeight / 6 , }}>
                <View style={{ padding: 15, marginTop: 30, gap: 20 }}>
                    <Label text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} fontFamily={fonts.Regular} style={{ lineHeight: 25, textAlign: 'center' }} />
                    <Label text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.y five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} fontFamily={fonts.Regular} style={{ lineHeight: 25, textAlign: 'center' }} />
                </View>
            </ScrollView>


            <TouchableOpacity onPress={() => handleAccept()} style={styles.gradientBtn}>
                <LinearGradient colors={gradientColor} style={styles.gradientBtn} start={start} end={end}>
                    <Label text={local.ACCEPT_AND_CONTINUE} style={styles.continue} fontSize={16} />
                </LinearGradient>
            </TouchableOpacity>
        </SafeArea>
    )
}

export default PrivacyPolicy