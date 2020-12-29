import React, {memo} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FONTS from 'app/ultis/fonts';

interface Props {
  text: string;
}

const MessUser = memo((props: Props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={['#0EAD69', '#82D84E']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={styles.txtChat}>{props.text}</Text>
      </LinearGradient>
      <Image source={require('app/assets/Virtual/img_user.png')} />
    </View>
  );
});

export default MessUser;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 40,
  },
  linear: {
    borderRadius: 21,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    marginRight: 8,
  },
  txtChat: {
    color: '#fff',
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    fontWeight: '600',
  },
});
