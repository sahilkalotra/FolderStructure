import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import GradientButton from '../../components/gradientButton'
import { useNavigation } from '../../hooks/navigationHook'
import CustomModal from '../../components/customModal'
import SafeArea from '../../components/safeAreaView'
import CustomHeader from '../../components/header'
import commonStyle from '../../utils/commonStyle'
import Input from '../../components/textInput'
import Label from '../../components/label'
import colors from '../../utils/colors'
import local from '../../utils/local'
import assets from '../../assets'
import styles from './styles'
import { validationRules } from '../../utils/helper'
import Validate from '../../utils/validate'
import { useAppDispatch } from '../../hooks/reduxHook'
import { resetPasswordThunk } from '../../redux/thunk/authThunk'
import { showErrorToast, showSuccessToast } from '../../components/toast'

const CreatePassword = ({ route }:any) => {
  const { email  } = route?.params || {};
  const navigation = useNavigation()
  const dispatch = useAppDispatch()

  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);

  const [errorState, setErrorState] = useState<{ [key: string]: boolean }>({});

  // Define dynamic validation rules for this screen
  const formValidationRules = { confirmPassword: validationRules.confirmPassword, password: validationRules.password };
  const { handleValidation, isTouched } = Validate({
    values: { password , confirmPassword }, rules: formValidationRules, setErrorState: setErrorState
  });

  const openModal = () => {
    if(handleValidation()){
      dispatch(resetPasswordThunk({email,password})).then((response)=>{
        if(response?.payload?.status==200){setModalVisible(true); return} 
        showErrorToast({ title: local.OOPS, message: response?.payload?.message })
        
      })
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.reset({ index: 0, routes: [{ name: "SignIn" }] })
  };

  return (
    <SafeArea backgroundColor={colors.black} barStyle="light-content">
      <CustomHeader />
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" bounces contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[commonStyle.container, commonStyle.alignCenter, styles.gap]}>
          <View style={commonStyle.alignCenter}>
            <Image source={assets.irlLogo} style={styles.logo} />
            <Label text={local.CREATE_PASSWORD} style={styles.heading} fontSize={25} />
          </View>
          <Label text={local.CREATE_PASSWORD_TEXT} style={styles.suHeading} fontSize={15} />

          <View style={styles.input}>
            <Input onChange={setPassword} secure leftIcon value={password} placeHolder={local.ENTER_NEW_PASSWORD}
             style={errorState.password || (isTouched.password && !password) ? commonStyle.error : {}} />
            <Input onChange={setConfirmPassword} secure leftIcon value={confirmPassword} placeHolder={local.CONFIRM_NEW_PASSWORD} 
             style={errorState.confirmPassword || (isTouched.confirmPassword && !confirmPassword) ? commonStyle.error : {}}/>
          </View>

          <GradientButton onPress={openModal} style={styles.gradientBtn}>
            <Label text={local.SAVE_NEW_PASSWORD} style={styles.continue} fontSize={16} />
          </GradientButton>

        </View>
      </KeyboardAwareScrollView>
      {modalVisible &&
        <CustomModal onClose={closeModal} title={local.PASSWORD_CHANGED}
          message={local.PASSWORD_CHANGED_TEXT} buttonText={local.BACK_TO_SIGNIN} />
      }
    </SafeArea>

  )
}

export default CreatePassword