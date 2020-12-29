import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SvgPoint from 'app/svgs/Login/SvgPoint';
import FONTS from'app/ultis/fonts';
import {widthScreen} from 'app/ultis/layout';

const Ruler = memo(() => {
  return (
    <View style={styles.container}>
      <View style={styles.number}>
        <SvgPoint />
        <Text style={styles.txtValue}>0</Text>
      </View>
      <View style={styles.number}>
        <SvgPoint />
        <Text style={styles.txtValue}>250</Text>
      </View>
      <View style={styles.number}>
        <SvgPoint />
        <Text style={styles.txtValue}>500</Text>
      </View>
      <View style={styles.number}>
        <SvgPoint />
        <Text style={styles.txtValue}>750</Text>
      </View>
      <View style={styles.number}>
        <SvgPoint />
        <Text style={styles.txtValue}>1000</Text>
      </View>
    </View>
  );
});
export default Ruler;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 4,
    paddingRight: 4,
    justifyContent: 'space-between',
  },
  number: {
    alignItems: 'center',
  },
  txtValue: {
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 12,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#7D8699',
    marginTop: 4,
  },
});
