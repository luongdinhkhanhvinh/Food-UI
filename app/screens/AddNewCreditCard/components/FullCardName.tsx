import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import CardNumber from'app/screens/AddNewCreditCard/components/CardNumber';
import convertCardNumber from 'app/ultis/convertCardNumber';
interface FullCardNameProps {
  text: string;
}
const FullCardNumber = memo((props: FullCardNameProps) => {
  const text = props.text;
  const convert = convertCardNumber(text);
  console.log('convert', convert);
  return (
    <View style={styles.container}>
      <CardNumber value={convert.substring(0, 4)} />
      <CardNumber value={convert.substring(4, 8)} />
      <CardNumber value={convert.substring(8, 12)} />
      <CardNumber value={convert.substring(12, 16)} />
    </View>
  );
});

export default FullCardNumber;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
