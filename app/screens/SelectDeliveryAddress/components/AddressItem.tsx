import {memo, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SvgChecked from 'app/svgs/SvgChecked';
import FONTS from'app/ultis/fonts';
import colors from 'app/ultis/colors';

interface AddressProps {
  addressName: string;
  addressDetail: string;
  isCheck: boolean;
  onPress: (id: string) => void;
  num: string;
  default?: boolean;
}

const AddressItem = memo((props: AddressProps) => {
  const onPress = useCallback(() => {
    props.onPress && props.onPress(props.num);
  }, [props]);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}>
      <Text style={styles.txtAddressName} numberOfLines={1}>
        {props.addressName}
        {props.default ? (
          <Text style={styles.txtDefault}> (Default)</Text>
        ) : null}
      </Text>
      <Text style={styles.txtAddressDetail} numberOfLines={1}>
        {props.addressDetail}
      </Text>
      {props.isCheck ? (
        <View style={styles.checked}>
          <SvgChecked />
        </View>
      ) : null}
    </TouchableOpacity>
  );
});

export default AddressItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  txtAddressName: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: FONTS.Montserrat.Medium,
    color: '#1D1E2C',
    marginBottom: 7,
  },
  txtAddressDetail: {
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#7D8699',
  },
  checked: {
    position: 'absolute',
    top: 9,
    right: 9,
  },
  txtDefault: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    lineHeight: 17,
    color: colors.gray0,
  },
});
