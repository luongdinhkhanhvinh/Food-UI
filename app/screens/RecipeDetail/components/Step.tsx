import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import SvgStep from 'app/svgs/RecipeDetail/SvgStep';
import FONTS from'app/ultis/fonts';
import {widthScreen} from 'app/ultis/layout';

const Step = memo(() => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <SvgStep />
        <Text style={styles.txtStep}>Make the saffron rice:</Text>
      </View>
      <Image source={require('app/assets/SignUp/step_1.png')} style={styles.img} />
      <Text style={styles.txtContent}>
        Wash and dry the kale. Separate the leaves from the stems; discard the
        stems, then roughly chop the leaves. In a medium pot, combine the rice,
        saffron, a big pinch of salt, and 1 cup of water.{' '}
      </Text>
    </View>
  );
});

export default Step;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtStep: {
    color: '#1D1E2C',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: FONTS.Montserrat.Medium,
    marginLeft: 16,
  },
  img: {
    width: widthScreen - 48,
    height: ((widthScreen - 48) / 327) * 200,
    marginTop: 16,
  },
  txtContent: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 28,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
  },
});
