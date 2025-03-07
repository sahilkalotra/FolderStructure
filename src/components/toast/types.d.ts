import React from "react"
import { ToastProps } from "react-native-toast-message"

type CustomToastProps = {
    title: string
    message: string
    duration?: number
}

type AlertBoxProps = {
    renderAlertBox: () => React.ReactNode
    cancelable?: boolean
}