import React from 'react';
import { View, Image, Modal } from 'react-native';
import GradientButton from '../gradientButton';
import colors from '../../utils/colors';
import assets from '../../assets';
import styles from './styles';
import Label from '../label';


const CustomModal: React.FC<CustomModalProps> = ({ onClose, title, message = '', buttonText = '' }) => {
    return (
        <Modal visible={true} animationType="fade" transparent={false} backdropColor={colors.black2}>
            <View style={styles.modal}>
                <View style={styles.modalContainer}>
                    <Image source={assets.pswdSuccess} style={styles.imgStyle} resizeMode="contain" />

                    {title && <Label style={styles.title} text={title} />}
                    {message && <Label style={styles.message} text={message} />}

                    <GradientButton style={styles.button} onPress={onClose}>
                        <Label style={styles.buttonText} text={buttonText} />
                    </GradientButton>
                </View>
            </View>

        </Modal>
    );
};


export default CustomModal;
