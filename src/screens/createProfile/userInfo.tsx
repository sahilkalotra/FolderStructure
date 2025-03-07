import React, { useState } from 'react'
import { View, Image, ActivityIndicator } from 'react-native'
import commonStyle from '../../utils/commonStyle'
import SafeArea from '../../components/safeAreaView'
import { useNavigation } from '../../hooks/navigationHook'
import DropdownComponent from '../../components/dropdrown'
import GradientButton from '../../components/gradientButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { setUserName, setBio, setGender, setEducation, setLocation, resetState } from "../../redux/slice/userSlice"
import {  validUserNameThunk } from '../../redux/thunk/authThunk'
import { useAppSelector } from '../../hooks/reduxHook'
import CustomModal from '../../components/customModal'
import { useAppDispatch } from '../../hooks/reduxHook'
import { validationRules } from '../../utils/helper'
import CustomHeader from '../../components/header'
import { GenderData } from '../../utils/enums'
import Input from '../../components/textInput'
import Validate from '../../utils/validate'
import Label from '../../components/label'
import colors from '../../utils/colors'
import local from '../../utils/local'
import assets from '../../assets'
import styles from './styles'
import { completeProfileThunk } from '../../redux/thunk/userThunk'

let typingTimeout: NodeJS.Timeout;
const UserInfo = () => {
  const navigation = useNavigation()

  const dispatch = useAppDispatch()
  const { userName, bio, gender, education, location, profilePhoto, coverPhoto } = useAppSelector((state: any) => state.user);
  const {loader} = useAppSelector((state) => state.auth);

  const [errorState, setErrorState] = useState<{ [key: string]: boolean }>({});
  const [modalVisible, setModalVisible] = useState(false);
  const [validUsername, setValidUserName] = useState(false);

  // Define dynamic validation rules for this screen
  const formValidationRules = {
    userName: validationRules.userName,
    bio: validationRules.bio, gender: validationRules.gender,
    education: validationRules.education, location: validationRules.location
  };

  const { handleValidation, isTouched } = Validate({
    values: { userName, bio, gender, education, location }, rules: formValidationRules, setErrorState: setErrorState
  });

  const handleChange = (action: any, value: string) => {
    // Clear the previous timeout to debounce the request
    if (typingTimeout) { clearTimeout(typingTimeout) }

    // If the username is more than 3 characters, start a new timeout
    if (action === setUserName && value.length > 3) {
      typingTimeout = setTimeout(() => {
        // Dispatch the action to check if the username is available
        dispatch(validUserNameThunk({ username: value }))
          .then((response) => {
            if (response.payload.status == 200) {
              setValidUserName(false)
            } else {
              setValidUserName(true)
            }
          })
      }, 500);
    }
    // Dispatch the action to update the state regardless of the debounce
    dispatch(action(value));
  };


  const handleContinue = () => {
    if (handleValidation()) {
      const userData = { userName, bio, gender, education, location, profilePhoto, coverPhoto }
      dispatch(completeProfileThunk(userData)).then((response) => {
        if (response.payload.status == 200) setModalVisible(true)
      })
    }
  }

  const closeModal = () => {
    setModalVisible(false);
    dispatch(resetState())
    navigation.reset({ index: 0, routes: [{ name: "privacyPolicy" }] })
  };

  return (
    <SafeArea backgroundColor={colors.black} barStyle="light-content">
      <CustomHeader />
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" bounces contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[commonStyle.container, commonStyle.alignCenter, styles.gap]}>

          <View style={commonStyle.alignCenter}>
            <Image source={assets.irlLogo} style={styles.logo} />
            <Label text={local.CREATE_PROFILE} style={styles.heading} fontSize={25} />
          </View>

          <View style={[commonStyle.rowCenter, { gap: 20 }]}>
            <Input onChange={(value) => handleChange(setUserName, value?.trim())}
              value={userName} placeHolder={local.USERNAME}  onPress={()=>{handleChange(setUserName, ''); setValidUserName(false)}}
              customLeftIcon={<Image source={assets.cross} style={{height:20,width:20,}}/>} leftIcon={userName?.length>0}
              style={[errorState.userName || (isTouched.email && !userName) ? commonStyle.error : {},{width: userName?.length>0 ?'86%':'95%'}]}
            />
            {validUsername &&
              <View style={[commonStyle.row, { width: "85%", alignItems: 'flex-start', }]}>
                <Image source={assets.warning} style={{ resizeMode: 'contain', height: 14, width: 14, margin: 5 }} />
                <Label text={local.userNameNotAvailable} style={styles.warning} fontSize={11} />
              </View>
            }

            <Input onChange={(value) => handleChange(setBio, value)}
              value={bio} placeHolder={local.BIO} multiline
              style={[errorState.bio || (isTouched.email && !bio) ? commonStyle.error : {}, { height: 100, alignItems: "flex-start", paddingVertical: 0 }]}
            />

            <DropdownComponent data={GenderData} value={gender}
              setValue={(value) => handleChange(setGender, value)}
              placeHolder={local.GENDER} style={errorState.gender || (isTouched.email && !gender) ? commonStyle.error : {}}
            />

            <Input onChange={(value) => handleChange(setEducation, value)}
              value={education} placeHolder={local.EDUCATION}
              style={errorState.education || (isTouched.email && !education) ? commonStyle.error : {}}
            />

            <Input onChange={(value) => handleChange(setLocation, value)}
              value={location} placeHolder={local.LOCATION}
              style={errorState.location || (isTouched.email && !location) ? commonStyle.error : {}}
            />
          </View>

          <GradientButton onPress={()=>handleContinue()} style={styles.gradientBtn}>
            <Label text={local.CONTINUE} style={styles.continue} fontSize={16} />
          </GradientButton>
        </View>
      </KeyboardAwareScrollView>
      {modalVisible &&
        <CustomModal onClose={closeModal} title={local.PROFILE_CREATED}
          message={local.PROFILE_CREATED_TEXT} buttonText={local.GET_STARTED} />
      }
    </SafeArea>
  )
}

export default UserInfo


