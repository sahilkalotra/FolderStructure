import { Text } from 'react-native'
import React from 'react'
import styles from './styles'

import { LabelProps } from './types'

const Label = ({ text, style, fontFamily = "Regular", fontSize = 16, ...props }: LabelProps) => {
    return <Text style={[styles.label, { fontSize: fontSize }, style]} {...props}>{text || "Label"}</Text>
}

export default Label