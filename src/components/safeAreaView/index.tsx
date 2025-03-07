import React from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native'
import colors from '../../utils/colors'
import styles from './styles'
import commonStyle from '../../utils/commonStyle'

interface SafeAreaProps { isSafe?: boolean, children: React.ReactNode, backgroundColor?: string, barStyle?: "dark-content" | "default" | "light-content" }

const SafeArea: React.FC<SafeAreaProps> = ({ isSafe = true, children, backgroundColor, barStyle }) => {
    return (
        <View style={[styles.statusBar, { backgroundColor: backgroundColor || colors.transparent }]}>
            {isSafe ?
                <SafeAreaView style={commonStyle.container}>
                    <StatusBar translucent backgroundColor={colors.black} barStyle={barStyle || "dark-content"} />
                    {children}
                </SafeAreaView>
                : <View style={styles.contentContainer}>
                    <StatusBar translucent backgroundColor={colors.black} barStyle={barStyle || "dark-content"} />
                    {children}
                </View>
            }
        </View>
    )
}

export default SafeArea
