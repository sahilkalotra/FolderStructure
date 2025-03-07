import { View, TextInput, Image, Pressable, StyleProp, ViewStyle, TextStyle } from 'react-native'
import styles from './styles'
import colors from '../../utils/colors'
import React, { useState } from 'react'
import assets from '../../assets'

interface InputProps {
    onChange: (data:any) => void,
    value: string,
    leftIcon?: boolean,
    secure?: boolean,
    multiline?: boolean,
    onPress?: () => void,
    placeHolder?: string
    style?:StyleProp<ViewStyle>;
    customLeftIcon?: React.ReactNode
}

const Input: React.FC<InputProps> = ({ onChange, value, leftIcon = false, secure, onPress ,placeHolder="", style, multiline, customLeftIcon}) => {
    const [secured , setSecured] = useState<boolean>( secure ?? false)
    const inputStyle:StyleProp<TextStyle> = multiline ? {height: '100%', textAlignVertical:'top'} : {}
    const handlePress = () => {
        onPress ? onPress() : setSecured(!secured)
    }
    return (
        <View style={[styles.inputView, style]}>
            <TextInput placeholderTextColor={colors.lightGray} multiline={multiline} placeholder={placeHolder}
                onChangeText={onChange} style={[styles.input,inputStyle]} value={value} secureTextEntry={secured}/>
            {leftIcon && (
             <Pressable onPress={handlePress}>
                    { customLeftIcon ? customLeftIcon : <Image source={assets.eye} style={{ height: 12, width: 15 }}
                            resizeMode="contain" tintColor={colors.lightGray} /> }
               
            </Pressable>)}

        </View>
    )
}

export default Input