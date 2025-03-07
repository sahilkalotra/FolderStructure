import React, { useState } from 'react'
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
import { setCoverPhoto } from '../../redux/slice/userSlice'
import { showErrorToast } from '../../components/toast'

const CoverPhoto = () => {
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const { coverPhoto } = useAppSelector((state) => state.user);
  const [pickerActive, setPickerActive] = useState<boolean>(false);

  const handleContinue = () => {
    if (!coverPhoto) { return showErrorToast({ title: 'Error', message: 'Cover photo is required.' }) }
    navigation.navigate('userInfo')
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
          <TouchableOpacity style={styles.coverLogo} onPress={()=>setPickerActive(true)}>
            <View style={coverPhoto? styles.profileLogoSelected : {}} >
            <Image source={ coverPhoto?coverPhoto: assets.profileLogo} style={coverPhoto? styles.profileLogoSelected : styles.profileLogo} />
            <Image source={assets.plus} style={styles.plusIcon2} />
            </View>
          </TouchableOpacity>
          <Label text={local.UPLOAD_YOUR_COVER_PHOTO} style={styles.heading} fontSize={14} />
        </View>

        <GradientButton onPress={handleContinue} style={styles.gradientBtn}>
          <Label text={local.CONTINUE} style={styles.continue} fontSize={16} />
        </GradientButton>
      </View>
      <MediaPicker isActive={pickerActive} onCloseAction={() => setPickerActive(false)}
                onPickAction={(data: any) => dispatch(setCoverPhoto(data))} />
    </SafeArea>
  )
}

export default CoverPhoto