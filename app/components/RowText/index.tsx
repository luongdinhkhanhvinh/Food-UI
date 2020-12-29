import React, {memo} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface PropsRowText {
  name: string;
  value: any;
  texBold: boolean;
}

const RowText = memo((props: PropsRowText) => {
  let value = '';
  if (typeof props.value === 'string') {
    value = props.value;
  } else {
    value = `$ ${props.value}`;
  }

  return (
    <View style={styles.textBoxSize1}>
      <Text
        style={[
          styles.textBox1,
          {
            fontWeight: props.texBold ? '500' : 'normal',
            fontSize: props.texBold ? 18 : 14,
          },
        ]}>
        {props.name}
      </Text>
      <Text
        style={[
          styles.textNormal,
          {
            fontWeight: props.texBold ? '500' : 'normal',
            fontSize: props.texBold ? 18 : 14,
          },
        ]}>
        {value}
      </Text>
    </View>
  );
});

export default RowText;

const styles = StyleSheet.create({
  textBoxSize1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingRight: 24,
  },
  textBox1: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    paddingTop: 4,
  },
  textNormal: {
    fontFamily: 'Montserrat',
    fontSize: 14,
  },
});
