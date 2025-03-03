import { StatusBar, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { deviceHeight, deviceWidth } from '../../utils/helper';

export default StyleSheet.create({
  logo: { height: 130, width: 130, resizeMode: 'contain' },
  gap: {  justifyContent:"space-evenly" , height: deviceHeight - 70 },
  heading: { color: colors.white , fontFamily: fonts.SemiBold },
  input: { width: deviceWidth, alignItems: "center", gap:25 },
  gradientBtn: { width: "95%", borderRadius: 5, alignItems: 'center' },
  continue: { color: colors.black , fontFamily: fonts.SemiBold },
  sepratorView:{ width: "90%", flexDirection: "row", alignItems: 'center' },
  seprator : { flex: 1, backgroundColor: colors.opaqueWhite15, height: 1.5 },
  sepratorlabelView:{ width: 80, alignItems: 'center' },
  sepratorLabel:{ color: colors.opaqueWhite60 },
  googleLoginBrn :{
    height: 45, width:'95%', alignItems:'center',justifyContent:"center", gap:10,
    borderWidth: 1, color:colors.lightGray, flexDirection:'row', borderRadius:5,
    padding: 10, borderColor:colors.opaqueWhite, backgroundColor:colors.dullBlack
  },
  width:{ width: '95%' },
  googleLogo:{ height: 30, width: 30 }
});
