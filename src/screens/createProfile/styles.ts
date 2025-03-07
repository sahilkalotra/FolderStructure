import { StatusBar, StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { deviceHeight, deviceWidth } from '../../utils/helper';
import commonStyle from '../../utils/commonStyle';

export default StyleSheet.create({
    logo: { height: 130, width: 130, resizeMode: 'contain' },
    uploadLogo: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        borderRadius: 100,
        backgroundColor: colors.dullBlack,
        borderWidth: 1, borderColor: colors.opaqueWhite15,
        ...commonStyle.rowCenter, overflow:'hidden'
    },
    profileLogoSelected: { height: '100%', width: '100%' },
    profileLogo: { height: 80, width: 80, resizeMode: 'contain', zIndex:-2 },
    gap: { justifyContent: 'space-between', paddingBottom: deviceHeight/10 },
    heading: { color: colors.white, fontFamily: fonts.SemiBold },
    warning: { color: colors.white, fontFamily: fonts.Regular, flexShrink:1 },
    gradientBtn: { width: '95%', borderRadius: 5, alignItems: 'center', marginTop:10 },
    continue: { color: colors.black, fontFamily: fonts.SemiBold },
    plusIcon: { height: 38, width: 38, position: 'absolute', right: 10, bottom: 40, zIndex:10 },
    plusIcon2: { height: 30, width: 30, position: 'absolute', right: 0, bottom: 10 , zIndex:-1 },
    coverLogo: {
        backgroundColor: colors.dullBlack, borderRadius: 10,
        borderWidth: 1, borderColor: colors.opaqueWhite15, overflow: 'hidden',
        width: deviceWidth - 40, height: 150, ...commonStyle.rowCenter 
    }
});
