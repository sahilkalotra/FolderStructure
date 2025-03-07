import {  View } from 'react-native';
import Toast, { ToastProps } from 'react-native-toast-message';
import { AlertBoxProps, CustomToastProps } from './types';
import Label from '../label';
import styles from './styles';

export const toastConfig = { //? Configuration for Toasts ?//
    success: (props: any) => <SuccessToastComponent {...props} />,
    error: (props: ToastProps) => <ErrorToastComponent {...props} />,
    warning: (props: ToastProps) => <WarningToastComponent {...props} />,
    info: (props: ToastProps) => <InfoToastComponent {...props} />,
    alertBox: (props: ToastProps) => <AlertBoxComponent {...props} />
}

const SuccessToastComponent = ({ props }: any) => {
    return (
        <View style={styles.toastContainer}>
            <View style={styles.notificationDetailsContainer}>
                <Label text={props?.title || "Yay!"} fontFamily='Medium' style={[styles.notificationTitle, styles.successColor]} />
                <Label text={props?.message || "Notification message"} fontFamily='Light' style={styles.notificationMessage} />
            </View>
        </View>
    );
};

const ErrorToastComponent = ({ props }: any) => {
    return (
        <View style={styles.toastContainer}>
            <View style={styles.notificationDetailsContainer}>
                <Label text={props?.title || "Oops!"} fontFamily='Medium' style={[styles.notificationTitle, styles.errorColor]} />
                <Label text={props?.message || "Notification message"} fontFamily='Light' style={styles.notificationMessage} />
            </View>
        </View>
    );
};

const WarningToastComponent = ({ props }: any) => {
    return (
        <View style={styles.toastContainer}>

            <View style={styles.notificationDetailsContainer}>
                <Label text={props?.title || "Woops!"} fontFamily='Medium' style={[styles.notificationTitle, styles.warningColor]} />
                <Label text={props?.message || "Notification message"} fontFamily='Light' style={styles.notificationMessage} />
            </View>
        </View>
    );
};

const InfoToastComponent = ({ props }: any) => {
    return (
        <View style={styles.toastContainer}>
            <View style={styles.notificationDetailsContainer}>
                <Label text={props?.title || "Heads Up!"} fontFamily='Medium' style={[styles.notificationTitle, styles.infoColor]} />
                <Label text={props?.message || "Notification message"} fontFamily='Light' style={styles.notificationMessage} />
            </View>
        </View>
    );
};

const AlertBoxComponent = ({ props }: any) => {
    return (
        <View style={styles.alertBoxContainer}>
            {props?.renderAlertBox && props?.renderAlertBox()}
        </View>
    );
};

// Show functions
export const showSuccessToast = (props: CustomToastProps) =>
    Toast.show({ type: 'success', props, visibilityTime: props?.duration || 3000, onPress: () => {} });

export const showWarningToast = (props: CustomToastProps) =>
    Toast.show({ type: 'warning', props, visibilityTime: props?.duration || 3000, onPress: () => {} });

export const showErrorToast = (props: CustomToastProps) =>
    Toast.show({ type: 'error', props, visibilityTime: props?.duration || 3000, onPress: () => {} });

export const showInfoToast = (props: CustomToastProps) =>
    Toast.show({ type: 'info', props, visibilityTime: props?.duration || 3000, onPress: () => {} });

export const showAlertBox = (props: AlertBoxProps) =>
    Toast.show({
        type: 'alertBox',
        autoHide: false,
        bottomOffset: 0,
        swipeable: props?.cancelable === true,
        position: 'bottom',
        props,
        onPress: () => {},
    });

export const hideToast = () => Toast.hide();
