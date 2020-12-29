import React, {memo, useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FONTS from'app/ultis/fonts';
import SvgChecked from 'app/svgs/SvgChecked';

interface PMIProps {
  children: any;
  title: string;
  content: string;
  isChecked: boolean;
  num: string;
  onSelect: (num: string) => void;
  isCredit?: boolean;
}

const PaymentMethodItem = memo((props: PMIProps) => {
  const onSelect = useCallback(() => {
    props.onSelect && props.onSelect(props.num);
  }, [props]);
  const styleContent = props.isCredit ? styles.txtCredit : styles.txtContent;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onSelect}
      activeOpacity={1}>
      {props.children}
      <View style={styles.info}>
        <Text style={styles.txtTitle}>{props.title}</Text>
        <Text style={styleContent}>{props.content}</Text>
      </View>
      {props.isChecked ? (
        <View style={styles.checked}>
          <SvgChecked />
        </View>
      ) : null}
    </TouchableOpacity>
  );
});

export default PaymentMethodItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  info: {
    marginLeft: 24,
    justifyContent: 'center',
  },
  txtTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: FONTS.Montserrat.Medium,
    color: '#1D1E2C',
  },
  txtContent: {
    marginTop: 7,
    fontSize: 12,
    lineHeight: 15,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#7D8699',
  },
  txtCredit: {
    marginTop: 7,
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#7D8699',
  },
  checked: {
    position: 'absolute',
    right: 9,
    top: 9,
  },
});
