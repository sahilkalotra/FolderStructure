import React from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from './styles'; 

const Header: React.FC<HeaderProps> = ({
  customComponent,
  customIcon,
  name = 'arrowleft',
  text = 'Reels',
  color = 'white',
  size = 30,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      {customComponent ? (
        customComponent // If customComponent is passed, render it
      ) : (
        <View style={styles.headerContainer}>
          {/* Render the customIcon if passed, or default to the text */}
          {customIcon ? (
            customIcon
          ) : (
            <Text style={[styles.text, { color: color }]}>{text}</Text>
          )}
        </View>
      )}
    </Pressable>
  );
};

export default Header;
