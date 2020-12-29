import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FONTS from '../../../ultis/fonts';

const ItemBill = memo(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtNumMeals}>2 Meals</Text>
      <Text style={styles.txtPrice}>$24.22</Text>
      <Text style={styles.txtServicePrice}>$6.25/serving</Text>
    </View>
  );
});

export default ItemBill;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  txtNumMeals: {
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
    lineHeight: 17,
    fontSize: 14,
    marginBottom: 5,
  },
  txtPrice: {
    fontFamily: FONTS.Montserrat.Medium,
    color: '#1D1E2C',
    lineHeight: 20,
    fontSize: 16,
    marginBottom: 3,
  },
  txtServicePrice: {
    fontFamily: FONTS.Montserrat.Regular,
    color: '#7D8699',
    lineHeight: 17,
    fontSize: 12,
  },
});
