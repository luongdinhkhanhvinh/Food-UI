import React, {memo} from 'react';
import {Animated, StyleSheet, View, ViewStyle} from 'react-native';
import {heightScreen, widthScreen} from 'app/ultis/layout';

interface DotsProps {
  scrollX: Animated.Value;
  style?: ViewStyle;
}

const Dots = memo((props: DotsProps) => {
  const {scrollX} = props;
  const slide = scrollX.interpolate({
    inputRange: [0, widthScreen, widthScreen * 3, widthScreen * 3],
    outputRange: [4, 20, 50, 66],
    extrapolate: 'clamp',
  });
  const margin1 = scrollX.interpolate({
    inputRange: [0, widthScreen, widthScreen * 2, widthScreen * 3],
    outputRange: [12, 4, 4, 4],
    extrapolate: 'clamp',
  });
  const margin2 = scrollX.interpolate({
    inputRange: [0, widthScreen, widthScreen * 2, widthScreen * 3],
    outputRange: [4, 12, 4, 4],
    extrapolate: 'clamp',
  });
  const margin3 = scrollX.interpolate({
    inputRange: [0, widthScreen, widthScreen * 2, widthScreen * 3],
    outputRange: [4, 4, 12, 4],
    extrapolate: 'clamp',
  });
  const margin4 = scrollX.interpolate({
    inputRange: [0, widthScreen, widthScreen * 2, widthScreen * 3],
    outputRange: [4, 4, 4, 12],
    extrapolate: 'clamp',
  });
  const opacity1 = scrollX.interpolate({
    inputRange: [0, widthScreen, widthScreen * 2, widthScreen * 3],
    outputRange: [1, 0.2, 0.2, 0.2],
    extrapolate: 'clamp',
  });
  const opacity2 = scrollX.interpolate({
    inputRange: [0, widthScreen, widthScreen * 2, widthScreen * 3],
    outputRange: [0.2, 1, 0.2, 0.2],
    extrapolate: 'clamp',
  });
  const opacity3 = scrollX.interpolate({
    inputRange: [0, widthScreen, widthScreen * 2, widthScreen * 3],
    outputRange: [0.2, 0.2, 1, 0.2],
    extrapolate: 'clamp',
  });
  const opacity4 = scrollX.interpolate({
    inputRange: [0, widthScreen, widthScreen * 2, widthScreen * 3],
    outputRange: [0.2, 0.2, 0.2, 1],
    extrapolate: 'clamp',
  });
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Animated.View
          style={[
            styles.dotStyle,
            {opacity: opacity1, marginRight: margin1, marginLeft: margin1},
          ]}
        />
        <Animated.View
          style={[
            styles.dotStyle,
            {opacity: opacity2, marginLeft: margin2, marginRight: margin2},
          ]}
        />
        <Animated.View
          style={[
            styles.dotStyle,
            {opacity: opacity3, marginLeft: margin3, marginRight: margin3},
          ]}
        />
        <Animated.View
          style={[
            styles.dotStyle,
            {opacity: opacity4, marginLeft: margin4, marginRight: margin4},
          ]}
        />
        <Animated.View style={[styles.dotCenter, {left: slide}]} />
      </View>
    </View>
  );
});
export default Dots;

const styles = StyleSheet.create({
  dotStyle: {
    width: 8,
    height: 4,
    backgroundColor: '#FE9870',
    borderRadius: 2,
  },
  dotCenter: {
    position: 'absolute',
    width: 24,
    height: 4,
    backgroundColor: '#FE9870',
    marginRight: 8,
    borderRadius: 2,
    alignContent: 'center',
  },
  container: {
    width: widthScreen,
    position: 'absolute',
    top: heightScreen / 2,
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
});
