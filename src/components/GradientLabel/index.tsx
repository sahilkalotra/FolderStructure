import React from 'react';
import { LinearGradientText } from 'react-native-linear-gradient-text';
import colors from '../../utils/colors';
import styles from './styles';

const GradientLabel: React.FC<GradientTextProps> = ({ text, gradientColors, style, gradientStart,gradientEnd,fontSize=16 }) => {
    const gradientColor = gradientColors || [colors.lightPink, colors.lightHotPink];
    const start = gradientStart || { x: 0, y: 0 }; const end = gradientEnd || { x: 1, y: 0 };
    return (
      <LinearGradientText colors={gradientColor} text={text}
        start={start} end={end} textStyle={{...styles.gradientText,fontSize:fontSize, ...style}} 
        textProps={{ allowFontScaling: true }}/>
    );
};

export default GradientLabel;
