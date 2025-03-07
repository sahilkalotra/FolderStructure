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
import { validationRules } from '../../utils/helper'
import Validate from '../../utils/validate'
import { useAppDispatch } from '../../hooks/reduxHook'
import { signUpThunk } from '../../redux/thunk/authThunk'
import { showErrorToast, showSuccessToast } from '../../components/toast'
import { resetState } from '../../redux/slice/userSlice'

const SignUp = () => {
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorState, setErrorState] = useState<{ [key: string]: boolean }>({});

  // Define dynamic validation rules for this screen
  const formValidationRules = { email: validationRules.email, password: validationRules.password };
  const { handleValidation, isTouched } = Validate({
    values: { email, password }, rules: formValidationRules, setErrorState: setErrorState
  });

  const signIn = () => navigation.navigate('SignIn')

  const continuePress = () => {
    if (handleValidation()) {
      const payload = { email, password }
      dispatch(signUpThunk(payload)).then((response)=>{
        if(response?.payload?.status!==201) return showErrorToast({ title: "Oops !!", message: response?.payload?.message })
        showSuccessToast({ title: local.emailSent, message: local.checkYourEmailYourOtpIsOnItsWay })
        dispatch(resetState())
        navigation.navigate('otpVerification', { type: 'signUp', email });
      })
    }
  }
  
  return (
    <SafeArea backgroundColor={colors.black} barStyle="light-content">
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" bounces contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[commonStyle.container, commonStyle.alignCenter, styles.gap]}>
          <View style={commonStyle.alignCenter}>
            <Image source={assets.irlLogo} style={styles.logo} />
            <Label text={local.CREATE_YOUR_ACCOUNT} style={styles.heading} fontSize={25} />
          </View>
          <View style={styles.input}>
          <Input onChange={setEmail} value={email} placeHolder={local.ENTER_YOUR_EMAIL_ADDRESS}
              style={errorState.email || (isTouched.email && !email) ? commonStyle.error : {}} />
            <Input onChange={setPassword} value={password} placeHolder={local.ENTER_YOUR_PASSWORD} leftIcon secure
              style={errorState.password || (isTouched.password && !password) ? commonStyle.error : {}} />
          </View>

          <GradientButton onPress={continuePress} style={styles.gradientBtn}>
            <Label text={local.CONTINUE} style={styles.continue} fontSize={16} />
          </GradientButton>

          <View style={styles.sepratorView}>
            <View style={styles.seprator} />
            <View style={styles.sepratorlabelView}>
              <Label text={local.OR} style={styles.sepratorLabel} fontSize={13} />
            </View>
            <View style={styles.seprator} />
          </View>

          <TouchableOpacity style={styles.googleLoginBrn} onPress={() => { }}>
            <Image source={assets.google} style={styles.googleLogo} resizeMode="contain" />
            <Label text={local.CONTINUE_WITH_GOOGLE} />
          </TouchableOpacity>

          <View style={[commonStyle.flexRow]}>
            <Label text={local.ALREADY_HAVE_AN_ACCOUNT} />
            <Label text={local.SIGNIN_DOT} onPress={signIn} style={{ color: colors.lightHotPink }} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeArea>

  )
}

export default SignUp