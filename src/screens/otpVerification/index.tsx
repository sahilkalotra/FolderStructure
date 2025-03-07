import { View, Image } from 'react-native'
import React, { useMemo, useState } from 'react'
import { validationRules } from '../../utils/helper'
import SafeArea from '../../components/safeAreaView'
import { useNavigation } from '../../hooks/navigationHook'
import GradientLabel from '../../components/GradientLabel'
import GradientButton from '../../components/gradientButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomHeader from '../../components/header'
import { OtpInput } from "react-native-otp-entry"
import commonStyle from '../../utils/commonStyle'
import Validate from '../../utils/validate'
import Label from '../../components/label'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'
import local from '../../utils/local'
import assets from '../../assets'
import styles from './styles'
import { useCountdownTimer } from '../../hooks/timerHook'
import { useAppDispatch } from '../../hooks/reduxHook'
import { resendOtpThunk, verifyOtpThunk } from '../../redux/thunk/authThunk'
import { showErrorToast, showSuccessToast } from '../../components/toast'
import { setAccessToken } from '../../redux/slice/authSlice'

const OtpVerification = ({ navigation: nav, route }: OtpVerificationProps) => {
  const { type, email = 'irluser@gmail.com' } = route?.params || {};
  const dispatch = useAppDispatch()
  const navigation = useNavigation()
  const [otp, setOtp] = useState<string>('');
  const [resend, setResend] = useState<boolean>(false)
  const [errorState, setErrorState] = useState<{ [key: string]: boolean }>({});
  const [isTouched, setIsTouched] = useState<{ [key: string]: boolean }>({});

  // Use the countdown timer helper
  const { timer, resetTimer } = useCountdownTimer(60, () => setResend(true))

  // Dynamic validation rules for this screen
  const formValidationRules = { otp: validationRules.otp };
  const { handleValidation } = Validate({
    values: { otp }, rules: formValidationRules, setErrorState: setErrorState
  });


  // Submit handler
  const submit = () => {
    if(handleValidation()){
      dispatch(verifyOtpThunk({ email, OTP:otp})).then((response)=>{
        if(response?.payload?.status == 200){
        showSuccessToast({ title: local.verified, message: response.payload.message })
        if(type == 'forgotPassword'){ return navigation.navigate('createPassword',{email}) }
        navigation.navigate("profilePhoto")
        dispatch(setAccessToken(response?.payload?.data?.token))
        } else { showErrorToast({ title: local.OOPS, message: response.payload.message })}
      })
    }

  }

  // Handle on OTP input change
  const handleOtpChange = (otpValue: string) => {
    setOtp(otpValue);
    setIsTouched({ otp: true });
    if (otp.length == 3) setErrorState({})
  }

  //Handle Resend Otp
  const handleResendOtp = () => {
    dispatch(resendOtpThunk({email})).then(()=>{
      setResend(false)
      resetTimer()
    })
  }

  const errorStyle = useMemo(() => (errorState.otp && isTouched.otp ? commonStyle.error : {}), [errorState])

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
            <GradientLabel text={email} fontSize={15} />
          </View>


          <View style={styles.input}>
            <OtpInput numberOfDigits={4} onTextChange={handleOtpChange}
              theme={{
                pinCodeContainerStyle: { ...styles.otpContainer, ...errorStyle },
                focusedPinCodeContainerStyle: { ...styles.otpContainer, ...errorStyle },
                pinCodeTextStyle: { color: colors.white, fontFamily: fonts.Medium },
              }} />
          </View>

          <GradientButton onPress={submit} style={styles.gradientBtn}>
            <Label text={local.CONTINUE} style={styles.continue} fontSize={16} />
          </GradientButton>

          <View style={{ flex: 0.5, justifyContent: "space-between" }}>
            <View style={styles.sepratorView}>
              <View style={styles.sepratorlabelView}>
                <GradientLabel text={timer.toString()+"s"} style={styles.sepratorLabel} fontSize={15} />
              </View>
            </View>

            <View style={[commonStyle.flexRow]}>
              <Label text={local.DIDNT_GET_CODE} />
              <Label text={local.RESEND_OTP} disabled={!resend} onPress={handleResendOtp} style={{ color: colors.lightHotPink }} />
            </View>
          </View>
        </View>

      </KeyboardAwareScrollView>
    </SafeArea>

  )
}

export default OtpVerification