import React, {memo, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MessTyping from 'app/screens/VirtualChef/components/MessTyping';
import FONTS from 'app/ultis/fonts';
import {widthScreen} from "../../../ultis/layout";

interface Props {
  text: string;
  onShowAnswer: () => void;
  continueMess: boolean;
}

export const timeTyping = 2000;

const MessWithAvatar = memo((props: Props) => {
  const [typing, setTyping] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTyping(false);
      if (props.continueMess) {
        setTimeout(() => {
          props.onShowAnswer();
        }, timeTyping);
      } else {
        props.onShowAnswer();
      }
    }, timeTyping);
  }, [props.onShowAnswer]);
  return (
    <View style={styles.container}>
      <Image source={require('app/assets/Virtual/img_avatar.png')} />
      {typing ? (
        <MessTyping />
      ) : (
        <View style={styles.contentText}>
          <Text style={styles.txtChat}>{props.text}</Text>
        </View>
      )}
    </View>
  );
});

export default MessWithAvatar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  contentText: {
    borderRadius: 21,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    marginLeft: 8,
    maxWidth: widthScreen / 1.5,
  },
  txtChat: {
    color: '#1D1E2C',
    fontSize: 14,
    fontFamily: FONTS.Montserrat.Regular,
  },
});
