import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import colors from 'app/ultis/colors';
import { widthScreen } from 'app/ultis/layout';

interface Props {
  style?: ViewStyle;
  svg?: any;
  onPress: any;
}

const PaymentItem = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.paymentItem, props.style]}>
      {props.svg}
    </TouchableOpacity>
  );
};

export default PaymentItem;

const styles = StyleSheet.create({
  paymentItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (widthScreen / 375) * 98,
    height: (widthScreen / 375) * 98,
    backgroundColor: colors.while,
    borderRadius: 8,
    shadowColor: 'rgba(141, 151, 158, 0.8)',
    shadowRadius: 10,
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.2,
    borderWidth: 2,
  },
});
