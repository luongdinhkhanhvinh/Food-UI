import React, {memo, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import SvgChecked from'app/svgs/SvgChecked';
import FONTS from'app/ultis/fonts';
interface CLProps {
  isCheck: boolean;
  onCheck: () => void;
  title: string;
  style?: ViewStyle;
}
const CheckLine = memo((props: CLProps) => {
  const onCheck = useCallback(() => {
    props.onCheck && props.onCheck();
  }, [props]);
  return (
    <TouchableOpacity style={[styles.check, props.style]} onPress={onCheck}>
      {props.isCheck ? <SvgChecked /> : <View style={styles.unCheck} />}
      <Text style={[styles.txtContent]}>{props.title}</Text>
    </TouchableOpacity>
  );
});
export default CheckLine;

const styles = StyleSheet.create({
  check: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtContent: {
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
    marginLeft: 9,
  },
  unCheck: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#82D84E',
    backgroundColor: '#E5E5E5',
  },
});
