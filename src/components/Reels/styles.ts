import { StyleSheet } from 'react-native';
import { deviceHeight,deviceWidth } from '../../utils/helper';

export default StyleSheet.create({
    container: {
        width: deviceWidth,
        height: deviceHeight,
        justifyContent: 'center',
      },
      SliderContainer: {
        position: 'absolute',
        width: deviceWidth,
        height: 55,
        bottom: 0,
        zIndex: 100,
      },
      TimeOne: {
        color: 'grey',
        position: 'absolute',
        left: 15,
        fontSize: 13,
        bottom: 5,
      },
      TimeTwo: {
        color: 'grey',
        position: 'absolute',
        right: 15,
        fontSize: 13,
        bottom: 5,
      },
      OptionsContainer: {
        position: 'absolute',
        right: 10,
        bottom: 70,
        zIndex: 100,
      },
      HeaderContainer: {
        position: 'absolute',
        width: deviceWidth,
        top: 0,
        height: 50,
        zIndex: 100,
      },
      FirstHalf: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: deviceWidth * 0.25,
        height: deviceHeight,
        zIndex: 99,
      },
      SecondHalf: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: deviceWidth * 0.25,
        height: deviceHeight,
        zIndex: 99,
      },
    btnContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      marginBottom: 5,
    },
    iconTextContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      marginTop: 10,
      fontWeight: 'bold',
    },
    headerContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        marginLeft: 20,
      },
      Text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        marginLeft: 20,
      },
      slider : {height: 40, width: '100%'}
  });