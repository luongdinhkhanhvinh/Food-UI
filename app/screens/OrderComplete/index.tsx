import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SvgComplete from 'app/svgs/OrderComplete/SvgComplete';
import ButtonColor from'app/components/ButtonColor';
import ButtonLinear from'app/components/ButtonLinear';
import FONTS from'app/ultis/fonts';
import { useNavigation } from '@react-navigation/native';

const OrderComplete = memo(() => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SvgComplete />
      <Text style={styles.txtComplete}>Order Complete!</Text>
      <ButtonColor title={'go to home schedule'} onPress={() => { navigation.navigate("Upcoming") }} />
      <ButtonLinear
        title={'Share for friend and Family'}
        onPress={() => { }}
        style={styles.btnLinear}
      />
    </View>
  );
});
export default OrderComplete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  txtComplete: {
    color: '#1D1E2C',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: FONTS.Montserrat.Medium,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 64,
  },
  btnLinear: {
    marginTop: 16,
  },
});
