import React, { useEffect, useState } from 'react'
import commonStyle from '../../utils/commonStyle'
import SafeArea from '../../components/safeAreaView'
import { View, Image, TouchableOpacity } from 'react-native'
import GradientButton from '../../components/gradientButton'
import CustomHeader from '../../components/header'
import Label from '../../components/label'
import colors from '../../utils/colors'
import local from '../../utils/local'
import assets from '../../assets'
import styles from './styles'
import { useNavigation } from '../../hooks/navigationHook'
import MediaPicker from '../../components/mediaPicker'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { setProfilePhoto } from '../../redux/slice/userSlice'
import { showErrorToast } from '../../components/toast'

const ProfilePhoto = () => {
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const { profilePhoto } = useAppSelector((state) => state.user);
  const [pickerActive, setPickerActive] = useState<boolean>(false);

  const handleContinue = () => {
    if (!profilePhoto) { return showErrorToast({ title: 'Error', message: 'Profile photo is required.' }) }
    navigation.navigate('coverPhoto')
  } 

  return (
    <SafeArea backgroundColor={colors.black} barStyle="light-content">
      <CustomHeader />
      <View style={[commonStyle.container, commonStyle.alignCenter, styles.gap]}>

        <View style={commonStyle.alignCenter}>
          <Image source={assets.irlLogo} style={styles.logo} />
          <Label text={local.CREATE_PROFILE} style={styles.heading} fontSize={25} />
        </View>

        <View style={[commonStyle.rowCenter, commonStyle.gap]}>
          <TouchableOpacity style={styles.uploadLogo} onPress={() => setPickerActive(true)}>
            <Image source={profilePhoto ? profilePhoto : assets.profileLogo} style={profilePhoto ? styles.profileLogoSelected : styles.profileLogo} />
          </TouchableOpacity>
          <Image source={assets.plus} style={styles.plusIcon} />
          <Label text={local.UPLOAD_YOUR_PROFILE_PHOTO} style={styles.heading} fontSize={14} />
        </View>

        <GradientButton onPress={handleContinue} style={styles.gradientBtn}>
          <Label text={local.CONTINUE} style={styles.continue} fontSize={16} />
        </GradientButton>
      </View>
      <MediaPicker isActive={pickerActive} onCloseAction={() => setPickerActive(false)}
        onPickAction={(data: any) => dispatch(setProfilePhoto(data))} />
    </SafeArea>
  )
}

export default ProfilePhoto