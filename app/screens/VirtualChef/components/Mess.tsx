import React, {memo, useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MessTyping from 'app/screens/VirtualChef/components/MessTyping';
import {timeTyping} from 'app/screens/VirtualChef/components/MessWithAvatar';
import FONTS from 'app/ultis/fonts';
import {widthScreen} from "../../../ultis/layout";

interface Props {
  text: string;
  continueMess: boolean;
  onShowAnswer: () => void;
}

const Mess = memo((props: Props) => {
  const [typing, setTyping] = useState(true);
  const [delay, setDelay] = useState(props.continueMess);
  useEffect(() => {
    if (props.continueMess) {
      setTimeout(() => {
        setDelay(false);
      }, timeTyping);
    }
    if (!delay) {
      setTimeout(() => {
        setTyping(false);
        props.onShowAnswer();
      }, timeTyping + 200);
    }
  }, [props.continueMess, delay, props.onShowAnswer]);
  return (
    <View style={styles.container}>
      {delay ? null : typing ? (
        <View style={styles.typing}>
          <MessTyping />
        </View>
      ) : (
        <View style={styles.contentText}>
          <Text style={styles.txtChat}>{props.text}</Text>
        </View>
      )}
    </View>
  );
});

export default Mess;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  contentText: {
    borderRadius: 21,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    marginLeft: 32,
    maxWidth: widthScreen / 1.5,
  },
  typing: {
    marginLeft: 24,
  },
  txtChat: {
    color: '#1D1E2C',
    fontSize: 14,
    fontFamily: FONTS.Montserrat.Regular,
  },
});
