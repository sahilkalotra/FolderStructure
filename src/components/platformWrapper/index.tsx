import React, { FC, ReactNode } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../../utils/colors';

// Define the props for the wrapper components
interface WrapperProps {
    children: ReactNode;
}

// iOS wrapper component
export const IOSWrapper: FC<WrapperProps> = ({ children }) => (
    <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1, backgroundColor: colors.black }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
);

// Android wrapper component
export const AndroidWrapper: FC<WrapperProps> = ({ children }) => (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
        {children}
    </View>
);
