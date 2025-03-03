import React from 'react';
import { View, TouchableOpacity, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import assets from '../../assets';
import Label from '../label';

const CustomHeader: React.FC<CustomHeaderProps> = ({
    title = '',
    onPressLeft,
    leftIcon,
    rightIcon,
    leftHeaderState = true,
}) => {
    const navigation = useNavigation();

    const handleLeftPress = () => {
        if (onPressLeft) {
            onPressLeft();
        } else {
            navigation.goBack();
        }
    };
    return (
            <View style={styles.container}>
                <TouchableOpacity onPress={handleLeftPress} style={styles.leftIconContainer}>
                    {leftHeaderState && !leftIcon ? (
                        <Image source={assets.backIcon} resizeMode='contain'
                            style={{ height: 20, width: 21 }}/>
                    ) : ( leftIcon)}
                </TouchableOpacity>
                {title &&  <Label text={title} />}
                <View style={styles.rightIconContainer}>
                    {rightIcon}
                </View>
            </View>
    );
};

export default CustomHeader;
