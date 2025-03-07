import React, { useState } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import PopupModal from "../PopupModal";
import commonStyle from "../../utils/commonStyle";
import assets from "../../assets";
import Label from "../label";
import colors from "../../utils/colors";
import { CameraPermission, MediaPermission } from "../../utils/permissions";

const gallery = 'gallery'
const camera = 'camera'

interface mediaPickerProps {
    isActive: boolean;
    onCloseAction: () => void;
    onPickAction: (data: any) => void;
}

const MediaPicker: React.FC<mediaPickerProps> = ({
    isActive,
    onCloseAction,
    onPickAction
}) => {
    const options = [
        { label: camera.toUpperCase(), image: assets.cameraIcon },
        { label: gallery.toUpperCase(), image: assets.galleryIcon },
    ]

    const onOptionAction = async (type: string) => {

        const option: any = {
            width: 600,
            height: 500,
            cropping: false,
            mediaType: 'photo',
            freeStyleCropEnabled: false
        }
        try {
            let value;
            if (type === camera) {
                const permission = await CameraPermission()
                if(!permission) return;
                value = await ImagePicker.openCamera(option);
                
            } else if (type === gallery) {
                const permission = await MediaPermission()
                console.log('clickedd',type, permission)
                if(!permission) return;
                value = await ImagePicker.openPicker(option);
            } else {
                Alert.alert('Invalid Selection', 'Please choose a valid option.');
                return;
            }
            handleResult(value);
        } catch (error) {
            console.error('Image Picker Error:', error);
        }
    }
    const handleResult = (value: any) => {
        if (value) {
            let name = value.path.split('/').pop();
            const obj = {
                name: name,
                uri: value.path,
                type: value.mime,
            };
            onCloseAction()
            onPickAction(obj);
        } 
    };  

    return (
        <PopupModal visible={isActive} onClose={() => onCloseAction()}>
            <View>
                <View style={commonStyle.flexRow}>
                    {options.map((item, index) => (
                        <View key={index} style={styles.listContainer}>
                            <TouchableOpacity style={styles.listImageContainer}
                                onPress={() => onOptionAction(item.label.toLowerCase())}>
                                <Image source={item.image} style={styles.listImage} tintColor={colors.white}/>
                            </TouchableOpacity>
                            <Label text={item.label} fontSize={15}  />
                        </View>
                    ))}
                </View>
            </View>
        </PopupModal>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1, alignItems: 'center', rowGap: 5
    },
    listImageContainer: {
        height: 100, width: 100, alignItems: 'center', justifyContent: 'center'
    },
    listImage: {
        height: 60, width: 60, resizeMode: 'contain'
    }
})

export default MediaPicker;