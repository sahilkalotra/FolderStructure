import {StyleSheet} from 'react-native';

import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import {deviceHeight, deviceWidth} from '../../utils/helper';

export default StyleSheet.create({
  flatList1: {
    position: 'absolute',
    zIndex: -2,
    backgroundColor: colors.black,
  },
  logo: {height: 120, width: 120, resizeMode: 'contain', top: 70},
  dotStyle: {
    width: 10,
    height: 10,
    backgroundColor: colors.white,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  container: {
    flex: 1,
    zIndex: 2,
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  container1: {
    position: 'absolute',
    bottom: 100,
    maxWidth: 150,
    overflow: 'hidden',
  },
  heading: {
    fontSize: 30,
    color: colors.white,
    fontFamily: fonts.Bold,
  },
  subHeading: {
    fontSize: 14,
    color: colors.white,
    lineHeight: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.transparent,
  },
  getStartedButton: {
    backgroundColor: colors.white,
    width: '100%',
    height: 58,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  getStartedText: {
    fontSize: 18,
    lineHeight: 25,
    fontWeight: '700',
  },
  skipText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '600',
  },
  nextButton: {
    height: 58,
    width: 58,
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 9,
    height: 18,
  },
  dotContainer: {
    top: 30,
  },
  imageBackground: {
    width: deviceWidth,
    height: deviceHeight,
    alignItems: 'center',
    paddingHorizontal:40
  },
  backGroundImageView: {
    justifyContent: 'flex-end',
    position: 'absolute',
    alignItems: 'center',
    bottom: 150,
  },
  nextIcon: {
    width: 14,
    height: 11,
  },
  gradientButtonStyle : { borderRadius: 5 },
  gradientbtnView: { padding: 10, gap: 7 }
});
