import { StatusBar, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { deviceHeight, deviceWidth } from '../../utils/helper';

export default StyleSheet.create({
  logo: { height: 130, width: 130, resizeMode: 'contain' },
  gap: {  gap:40 , },
  heading: { color: colors.white , fontFamily: fonts.SemiBold },
  suHeading: { color: colors.white , fontFamily: fonts.SemiBold , textAlign:'center' },
  input: { width: deviceWidth, alignItems: "center", gap:25 },
  gradientBtn: { width: "95%", borderRadius: 5, alignItems: 'center' },
  continue: { color: colors.black , fontFamily: fonts.SemiBold },
  width:{ width: '95%' },
});
