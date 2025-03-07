import React, { useState } from 'react'
import { View, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Label from '../../components/label'
import Input from '../../components/textInput'
import { validationRules } from '../../utils/helper'
import { useNavigation } from '../../hooks/navigationHook'
import GradientButton from '../../components/gradientButton'
import { setLoggedIn } from '../../redux/slice/authSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import SafeArea from '../../components/safeAreaView'
import commonStyle from '../../utils/commonStyle'
import Validate from '../../utils/validate'
import colors from '../../utils/colors'
import local from '../../utils/local'
import assets from '../../assets'
import styles from './styles'
import { signInThunk } from '../../redux/thunk/authThunk'
import { showErrorToast } from '../../components/toast'
import { resetState } from '../../redux/slice/userSlice'

const SignIn = () => {
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

  const signUp = () => navigation.navigate('SignUp')
  const forgotPassword = () => navigation.navigate('forgotPassword')

  const continuePress = () => {
    if(!handleValidation()) return;
    dispatch(signInThunk({ email, password })).then((response) => {
      console.log(response?.payload)
      if (response?.payload?.status == 200) {
        dispatch(resetState())
        const data = response?.payload?.data 
        if(!data?.isEmailVerified){ navigation.navigate('otpVerification', { type: 'signUp', email }); return }
        if(!data?.isProfileCompleted){ navigation.navigate('profilePhoto'); return }
        return dispatch(setLoggedIn(true))
      } 
      showErrorToast({title:local.OOPS, message: response?.payload?.message })
    })
  }

  return (
    <SafeArea backgroundColor={colors.black} barStyle="light-content">
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" bounces contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[commonStyle.container, commonStyle.alignCenter, styles.gap]}>
          <View style={[commonStyle.alignCenter]}>
            <Image source={assets.irlLogo} style={styles.logo} />
            <Label text={local.SIGN_IN_TO_YOUR_ACCOUNT} style={styles.heading} fontSize={25} />
          </View>

          <View style={styles.input}>
            <Input onChange={setEmail} value={email} placeHolder={local.ENTER_YOUR_EMAIL_ADDRESS}
              style={errorState.email || (isTouched.email && !email) ? commonStyle.error : {}} />
            <Input onChange={setPassword} value={password} placeHolder={local.ENTER_YOUR_PASSWORD} leftIcon secure
              style={errorState.password || (isTouched.password && !password) ? commonStyle.error : {}} />
            <View style={[commonStyle.alignEnd, styles.width]}>
              <Label text={local.FORGOT_PASSWORD_MARK} onPress={forgotPassword} />
            </View>
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
            <Label text={local.SIGNUP} onPress={signUp} style={{ color: colors.lightHotPink }} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeArea>

  )
}

export default SignIn