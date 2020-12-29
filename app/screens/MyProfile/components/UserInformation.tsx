import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import FONTS from'app/ultis/fonts';
import colors from 'app/ultis/colors';

interface Props {
  style?: ViewStyle;
  title: string;
  content: string;
}

const UserInformation = (props: Props) => {
  return (
    <View style={props.style}>
      <Text style={styles.txtTitle}>{props.title}</Text>
      <Text style={styles.txtContent}>{props.content}</Text>
    </View>
  );
};
export default UserInformation;

const styles = StyleSheet.create({
  txtTitle: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    color: colors.gray0,
    marginBottom: 6,
  },
  txtContent: {
    fontFamily: FONTS.Montserrat.Bold,
    fontWeight: '600',
    fontSize: 14,
    color: colors.title,
    marginBottom: 6,
  },
});
