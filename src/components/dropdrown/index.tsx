import React, { useState } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import colors from '../../utils/colors';

interface DropdownComponentProps {
    data: any;
    placeHolder: string;
    value: string;
    setValue: (date:string) => void;
    style?: StyleProp<ViewStyle>
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({data, value , setValue,placeHolder,style}) => {

  return (
    <Dropdown style={[styles.dropdown, style]} containerStyle={styles.containerStyle}
      placeholderStyle={styles.placeholderStyle} selectedTextStyle={styles.placeholderStyle}
      iconStyle={styles.iconStyle} itemContainerStyle={styles.itemContainerStyle}
      data={data} labelField="label" valueField="value" placeholder={placeHolder}
      value={value} onChange={(data)=>setValue(data?.value)}
      renderItem={(item) => (
        <View style={[styles.item]} >
          <Text style={styles.itemText}>{item?.label}</Text>
        </View>
      )}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: 45,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    color: colors.lightGray,
    flexDirection: 'row',
    borderRadius: 5,
    padding: 10,
    borderColor: colors.opaqueWhite,
    backgroundColor: colors.dullBlack,
  },
  containerStyle: {
    borderWidth: 1,
    color: colors.lightGray,
    borderRadius: 5,
    borderColor: colors.opaqueWhite,
    backgroundColor: colors.dullBlack,
    marginTop: 5,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  placeholderStyle: {
    fontSize: 14,
    color: colors.lightGray,
  },
  itemContainerStyle: {
    backgroundColor: colors.dullBlack, 
  },
  item: {
    padding: 15,
    justifyContent: 'center',
    backgroundColor:colors.dullBlack,
    borderBottomWidth:0.5 , borderColor:colors.opaqueWhite
  },
  itemText: {
    fontSize: 14,
    color: colors.lightGray,
  },
  selectedItem: {
    backgroundColor: colors.dullBlack, 
  },
});
