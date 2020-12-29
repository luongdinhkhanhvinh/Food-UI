import React, {memo, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FONTS from'app/ultis/fonts';

interface CardNumberProps {
  value: string;
}

const CardNumber = memo((props: CardNumberProps) => {
  const text = props.value;
  const renderNumber = useCallback(() => {
    let render = [];
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) !== '#') {
        render.push(
          <View style={styles.inputView} key={`${i}`}>
            <Text style={styles.txtCardNumber}>{text.charAt(i)}</Text>
          </View>,
        );
      } else {
        render.push(
          <View style={styles.inputView} key={`${i}`}>
            <View style={styles.dot} />
          </View>,
        );
      }
    }
    return render;
  }, [text]);
  return <View style={styles.container}>{renderNumber()}</View>;
});
export default CardNumber;

const styles = StyleSheet.create({
  txtCardNumber: {
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 2,
    color: '#fff',
    fontFamily: FONTS.DINCondensed.Bold,
    marginLeft: 2,
  },
  inputView: {
    width: 12,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#fff',
    marginLeft: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
});
