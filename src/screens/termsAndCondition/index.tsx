import { ScrollView, View } from 'react-native'
import React from 'react'
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
import { useAppDispatch } from '../../hooks/reduxHook'
import { setLoggedIn } from '../../redux/slice/authSlice'
import { deviceHeight } from '../../utils/helper'

const TermsAndCondition = () => {
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const handleContinue=() => { dispatch(setLoggedIn(true)) }
    return (
        <SafeArea backgroundColor={colors.black} barStyle="light-content">
            <CustomHeader />
            <View style={commonStyle.rowCenter}>
                <Label text={local.TERMS_AND_CONDITION} fontSize={24} fontFamily={fonts.SemiBold} />
            </View>
            <ScrollView  contentContainerStyle={{paddingBottom:deviceHeight/6}}>
                <View style={{ padding: 10, marginTop: 30, gap: 20 }}>
                    <Label text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} fontFamily={fonts.Regular} style={{ lineHeight: 25, textAlign:'center' }}/>
                    <Label text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.y five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} fontFamily={fonts.Regular} style={{ lineHeight: 25, textAlign:'center' }} />
                    <Label text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.y five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} fontFamily={fonts.Regular} style={{ lineHeight: 25, textAlign:'center' }} />
                    <Label text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.y five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} fontFamily={fonts.Regular} style={{ lineHeight: 25, textAlign:'center' }} />
                    <Label text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.y five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} fontFamily={fonts.Regular} style={{ lineHeight: 25, textAlign:'center' }} />
                </View>
            </ScrollView>

            <GradientButton onPress={handleContinue} style={styles.gradientBtn}>
                <Label text={local.CONTINUE} style={styles.continue} fontSize={16} />
            </GradientButton>
        </SafeArea>
    )
}

export default TermsAndCondition