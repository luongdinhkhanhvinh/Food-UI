import React, { memo, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

const timeDot = 400;

const config = {
  duration: timeDot,
  easing: Easing.ease,
  useNativeDriver: true,
};

const MessTyping = memo(() => {
  const move = useRef(new Animated.Value(0)).current;
  const move1 = useRef(new Animated.Value(0)).current;
  const move2 = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(move, {
          ...config,
          toValue: -8,
        }),
        Animated.timing(move, {
          ...config,
          toValue: 0,
        }),
      ]),
      { iterations: -1 },
    ).start();
    setTimeout(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(move1, {
            ...config,
            toValue: -8,
          }),
          Animated.timing(move1, {
            ...config,
            toValue: 0,
          }),
        ]),
        { iterations: -1 },
      ).start();
    }, 150);

    setTimeout(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(move2, {
            ...config,
            toValue: -8,
          }),
          Animated.timing(move2, {
            ...config,
            toValue: 0,
          }),
        ]),
        { iterations: -1 },
      ).start();
    }, 300);
  }, []);
  return (
    <View style={styles.contentText}>
      <Animated.View
        style={[styles.dot, { transform: [{ translateY: move }] }]}
      />
      <Animated.View
        style={[styles.dot, { transform: [{ translateY: move1 }] }]}
      />
      <Animated.View
        style={[
          styles.dot,
          { marginRight: 0, transform: [{ translateY: move2 }] },
        ]}
      />
    </View>
  );
});

export default MessTyping;

const styles = StyleSheet.create({
  contentText: {
    flexDirection: 'row',
    borderRadius: 21,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    height: 40,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#979797',
    marginRight: 4,
  },
});
