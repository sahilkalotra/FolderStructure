import { StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  inputView: {
    height: 45, width:'95%', alignItems:'center',justifyContent:'space-between',
    borderWidth: 1, color:colors.lightGray, flexDirection:'row', borderRadius:5,
    padding: 10, borderColor:colors.opaqueWhite, backgroundColor:colors.dullBlack
  },
  input :{ color:colors.lightGray , height: 45,  width:"90%", fontSize:14 }
});
