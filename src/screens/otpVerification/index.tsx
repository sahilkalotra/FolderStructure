import React, { useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import GradientButton from '../../components/gradientButton'
import SafeArea from '../../components/safeAreaView'
import commonStyle from '../../utils/commonStyle'
import { OtpInput } from "react-native-otp-entry";
import Label from '../../components/label'
import colors from '../../utils/colors'
import local from '../../utils/local'
import assets from '../../assets'
import styles from './styles'
import { useNavigation } from '../../hooks/navigationHook'
import CustomHeader from '../../components/header'
import GradientLabel from '../../components/GradientLabel'
import fonts from '../../utils/fonts'

const OtpVerification = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState<string>('');

  const submit = () => navigation.navigate('createPassword')

  return (
    <SafeArea backgroundColor={colors.black} barStyle="light-content">
      <CustomHeader />
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" bounces contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[commonStyle.container, commonStyle.alignCenter, styles.gap]}>
          <View style={commonStyle.alignCenter}>
            <Image source={assets.irlLogo} style={styles.logo} />
            <Label text={local.CONFIRM_YOUR_ACCOUNT} style={styles.heading} fontSize={25} />
          </View>

          <View style={commonStyle.alignCenter}>
            <Label text={local.CONFIRM_YOUR_ACCOUNT_TEXT} style={styles.suHeading} fontSize={15} />
            <GradientLabel text={'irluser@gmail.com'} fontSize={15} />
          </View>


          <View style={styles.input}>
            <OtpInput numberOfDigits={4} onTextChange={(text) => console.log(text)}
              theme={{
                pinCodeContainerStyle:styles.otpContainer,
                focusedPinCodeContainerStyle: styles.otpContainer,
                pinCodeTextStyle:{color:colors.white , fontFamily:fonts.Medium},
              }} />
          </View>

          <GradientButton onPress={submit} style={styles.gradientBtn}>
            <Label text={local.SIGNIN} style={styles.continue} fontSize={16} />
          </GradientButton>

        </View>
      </KeyboardAwareScrollView>
    </SafeArea>

  )
}

export default OtpVerification