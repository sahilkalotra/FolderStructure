import React, { useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import GradientButton from '../../components/gradientButton'
import SafeArea from '../../components/safeAreaView'
import commonStyle from '../../utils/commonStyle'
import Input from '../../components/textInput'
import Label from '../../components/label'
import colors from '../../utils/colors'
import local from '../../utils/local'
import assets from '../../assets'
import styles from './styles'
import { useNavigation } from '../../hooks/navigationHook'
import CustomHeader from '../../components/header'

const ForgotPassword = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState<string>('');

  const submit = () => navigation.navigate('otpVerification')

  return (
    <SafeArea backgroundColor={colors.black} barStyle="light-content">
      <CustomHeader />
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" bounces contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[commonStyle.container, commonStyle.alignCenter, styles.gap]}>
          <View style={commonStyle.alignCenter}>
            <Image source={assets.irlLogo} style={styles.logo} />
            <Label text={local.FORGOT_PASSWORD} style={styles.heading} fontSize={25} />
          </View>

          <Label text={local.FORGOT_PASSWORD_TEXT} style={styles.suHeading} fontSize={15} />

          <View style={styles.input}>
            <Input onChange={setEmail} value={email} placeHolder={local.ENTER_YOUR_EMAIL} />
          </View>

          <GradientButton onPress={submit} style={styles.gradientBtn}>
            <Label text={local.SUBMIT} style={styles.continue} fontSize={16} />
          </GradientButton>

        </View>
      </KeyboardAwareScrollView>
    </SafeArea>

  )
}

export default ForgotPassword