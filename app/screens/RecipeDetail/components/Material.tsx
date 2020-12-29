import React, { memo } from 'react';
import { widthScreen } from 'app/ultis/layout';
import { Image, StyleSheet, Text, View } from 'react-native';
import FONTS from 'app/ultis/fonts';

interface MaterialProps {
  img: any;
  name: string;
}

const Material = memo((props: MaterialProps) => {
  return (
    <View style={styles.container}>
      <Image source={props.img} style={styles.img} />
      <Text style={styles.txt}>{props.name}</Text>
    </View>
  );
});

export default Material;

const styles = StyleSheet.create({
  container: {
    width: (widthScreen - 48) / 3,
    alignItems: 'center',
    marginVertical: 24,
  },
  img: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  txt: {
    fontSize: 10,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
    textAlign: 'center',
    marginTop: 8,
    width: widthScreen / 4,
  },
});
