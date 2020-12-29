import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import FONTS from'app/ultis/fonts';
import {widthScreen} from 'app/ultis/layout';
export interface WtProps {
  title: string;
  intro: string;
  image: any;
}

const WalkthroughScreen = memo((props: WtProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textTitle}>{props.title}</Text>
        <Text style={styles.textIntro}>{props.intro}</Text>
      </View>
      <View style={styles.bottomContent} />
      <Image source={props.image} style={styles.imgBackground} />
    </View>
  );
});

export default WalkthroughScreen;

const styles = StyleSheet.create({
  container: {
    width: widthScreen,
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 48,
    fontFamily: FONTS.PlayfairDisplay.Bold,
    color: '#0EAD69',
    textAlign: 'center',
    width: (widthScreen / 375) * 300,
  },
  textIntro: {
    marginTop: 16,
    fontSize: 16,
    fontFamily: FONTS.Montserrat.Regular,
    textAlign: 'center',
    color: '#000',
    lineHeight: 28,
  },
  btnLinear: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 25,
    width: '100%',
  },
  textBtn: {
    color: '#fff',
    fontFamily: FONTS.Montserrat.Bold,
    fontSize: 14,
  },
  imgBackground: {
    position: 'absolute',
    bottom: 0,
    width: widthScreen,
    height: (widthScreen / 400) * 375,
    zIndex: -20,
    resizeMode: 'stretch',
  },
  touch: {
    width: '100%',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: (widthScreen / 400) * 32,
  },
  bottomContent: {
    flex: 1,
    width: widthScreen,
    paddingHorizontal: 32,
    paddingTop: (widthScreen / 400) * 60,
  },
});
