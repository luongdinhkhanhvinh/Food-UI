import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FONTS from 'app/ultis/fonts';

interface RecipeProps {
  children: any;
  num?: number;
  preText?: string;
  unit: string;
}

const RecipeProps = memo((props: RecipeProps) => {
  const number = props.preText ? ` ${props.num}` : props.num;
  const preText = props.preText ? props.preText : '';
  return (
    <View style={styles.flexRow}>
      {props.children}
      <Text style={styles.txtNumber}>
        <Text style={styles.txtUnit}>{preText}</Text>
        {number} <Text style={styles.txtUnit}>{props.unit}</Text>
      </Text>
    </View>
  );
});
export default RecipeProps;
const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center',
  },
  txtNumber: {
    marginLeft: 8,
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Medium,
    color: '#1D1E2C',
  },
  txtUnit: {
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
  },
});
