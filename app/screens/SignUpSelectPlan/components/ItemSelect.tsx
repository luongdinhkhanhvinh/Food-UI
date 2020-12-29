import React, {memo, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FONTS from '../../../ultis/fonts';
import SvgChecked from '../../../svgs/SignUp/SvgChecked';
import {widthScreen} from 'app/ultis/layout';

interface ItemSelectProps {
  children: any;
  title: string;
  onPress: (num: number) => void;
  num: number;
  isChoose: boolean;
}

const ItemSelect = memo((props: ItemSelectProps) => {
  const onSelect = useCallback(() => {
    props.onPress && props.onPress(props.num);
  }, [props]);
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      {props.children}
      <Text style={styles.txtTitle}>{props.title}</Text>
      {props.isChoose ? (
        <View style={styles.checkedIcon}>
          <SvgChecked />
        </View>
      ) : null}
    </TouchableOpacity>
  );
});

export default ItemSelect;

const width_item = (widthScreen - 72) / 2;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: width_item,
    height: (width_item / 150) * 130,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.03,
    shadowRadius: 4.65,
    marginRight: 24,
    elevation: 6,
  },
  txtTitle: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    color: '#1D1E2C',
    lineHeight: 17,
    marginTop: 16,
  },
  checkedIcon: {
    position: 'absolute',
    right: 9,
    top: 9,
  },
});
