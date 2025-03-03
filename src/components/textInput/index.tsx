import { View, TextInput, Image, Pressable } from 'react-native'
import styles from './styles'
import colors from '../../utils/colors'
import React from 'react'
import assets from '../../assets'

interface InputProps {
    onChange: any,
    value: string,
    leftIcon?: boolean,
    onPress?: () => void,
    placeHolder?: string
}

const Input: React.FC<InputProps> = ({ onChange, value, leftIcon = false, onPress ,placeHolder=""}) => {
    return (
        <View style={styles.inputView}>
            <TextInput placeholderTextColor={colors.lightGray} placeholder={placeHolder}
                onChangeText={onChange} style={styles.input} value={value} />
            {leftIcon && (<Pressable onPress={onPress && onPress}>
                <Image source={assets.eye} style={{ height: 12, width: 15 }}
                    resizeMode="contain" tintColor={colors.lightGray} />
            </Pressable>)}

        </View>
    )
}

export default Input