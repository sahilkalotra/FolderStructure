import React from 'react';
import { View,Text, Pressable } from 'react-native';
import styles from './styles';

// import AntDesign from 'react-native-vector-icons/AntDesign';

const Buttons: React.FC<ButtonsProps> = ({
  customComponent,
  name = 'like2',
  text = 'Like',
  color = 'white',
  size = 30,
  onPress,
}) => {
  return (
    <Pressable style={styles.btnContainer} onPress={onPress}>
      {customComponent ? (
        customComponent
      ) : (
        <View style={styles.iconTextContainer}>
          {/* <AntDesign name={name} color={color} size={size} /> */}
          <Text style={[styles.text, { color: color }]}>{text}</Text>
        </View>
      )}
    </Pressable>
  );
};

export default Buttons;


