import React, {memo} from 'react';
import FONTS from'app/ultis/fonts';
import {Platform, StyleSheet, Text} from 'react-native';
import {widthScreen} from "app/ultis/layout";
interface TitleProps {
  title: string;
}
const HeaderTitle = memo((props: TitleProps) => {
  return <Text style={styles.title}>{props.title}</Text>;
});

export default HeaderTitle;

const styles = StyleSheet.create({
  title: {
    color: '#1D1E2C',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: FONTS.Montserrat.Medium,
    textAlign: 'left',
  },
});
