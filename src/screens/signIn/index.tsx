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

const SignIn = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signUp = () => navigation.navigate('SignUp')
  const forgotPassword = () => navigation.navigate('forgotPassword')

  return (
    <SafeArea backgroundColor={colors.black} barStyle="light-content">
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" bounces contentContainerStyle={{flexGrow:1}}>
        <View style={[commonStyle.container, commonStyle.alignCenter, styles.gap]}>
          <View style={commonStyle.alignCenter}>
            <Image source={assets.irlLogo} style={styles.logo} />
            <Label text={local.SIGN_IN_TO_YOUR_ACCOUNT} style={styles.heading} fontSize={25} />
          </View>

          <View style={styles.input}>
            <Input onChange={setEmail} value={email} placeHolder={local.ENTER_YOUR_EMAIL_ADDRESS} />
            <Input onChange={setPassword} value={password} placeHolder={local.ENTER_YOUR_PASSWORD} leftIcon />
            <View style={[commonStyle.alignEnd, styles.width]}>
              <Label text={local.FORGOT_PASSWORD_MARK} onPress={forgotPassword} />
            </View>
          </View>

          <GradientButton onPress={() => { }} style={styles.gradientBtn}>
            <Label text={local.CONTINUE} style={styles.continue} fontSize={16} />
          </GradientButton>

          <View style={styles.sepratorView}>
            <View style={styles.seprator} />
            <View style={styles.sepratorlabelView}>
              <Label text={local.OR} style={styles.sepratorLabel} fontSize={13} />
            </View>
            <View style={styles.seprator} />
          </View>

          <TouchableOpacity style={styles.googleLoginBrn} onPress={()=>{}}>
            <Image source={assets.google} style={styles.googleLogo} resizeMode="contain" />
            <Label text={local.CONTINUE_WITH_GOOGLE}/>
          </TouchableOpacity>

          <View style={[commonStyle.flexRow]}>
              <Label text={local.ALREADY_HAVE_AN_ACCOUNT}/>
              <Label text={local.SIGNUP} onPress={signUp} style={{color:colors.lightHotPink}} />
            </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeArea>

  )
}

export default SignIn