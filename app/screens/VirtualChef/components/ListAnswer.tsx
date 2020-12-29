import React, { memo, useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthScreen } from 'app/ultis/layout';
import FONTS from 'app/ultis/fonts';
interface Props {
  onPress: (item: any) => void;
  data: any[];
}

const ListAnswer = memo((props: Props) => {
  const [show, setShow] = useState(false);
  const onPress = useCallback(
    (item) => {
      props.onPress(item);
    },
    [props],
  );
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);
  return (
    <View style={styles.container}>
      {show &&
        props.data.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => onPress(item)}>
              <LinearGradient
                style={styles.linear}
                colors={['#0EAD69', '#82D84E']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <Text style={styles.txtChat}>{item.text}</Text>
              </LinearGradient>
            </TouchableOpacity>
          );
        })}
    </View>
  );
});

export default ListAnswer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: widthScreen,
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
    fontFamily: FONTS.Montserrat.SemiBold,
    fontSize: 14,
    fontWeight: '600',
  },
});
