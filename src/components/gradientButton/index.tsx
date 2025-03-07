import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import colors from '../../utils/colors';
import { GradientButtonProps } from './types';
import { store } from '../../redux/store';



const GradientButton = (props: GradientButtonProps) => {
  const { children, onPress, gradientColors, gradientStart, gradientEnd, style } = props
  const gradientColor = gradientColors || [colors.lightPink, colors.lightHotPink];
  const start = gradientStart || { x: 0, y: 0 }; const end = gradientEnd || { x: 1, y: 0 };
  
  return (
    <TouchableOpacity onPress={() => onPress()} style={style}>
      <LinearGradient colors={gradientColor} style={[styles.button, style]} start={start} end={end}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton
