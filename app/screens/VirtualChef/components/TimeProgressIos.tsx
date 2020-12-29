import React, { memo, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, {
  Value,
  add,
  sub,
  cond,
  greaterOrEq,
} from 'react-native-reanimated';
import {
  vec,
  onGestureEvent,
  withOffset,
  translate,
  canvas2Polar,
  clamp,
  polar2Canvas,
} from 'react-native-redash';
import SvgPinSlider from 'app/svgs/VirtualChef/SvgPinSlider';
import SvgClock from 'app/svgs/VirtualChef/SvgClock';
import CircleTest from 'app/screens/VirtualChef/components/CircleTest';
import { widthScreen } from 'app/ultis/layout';

const size = 204;
const FIRST = {
  x: size / 2,
  y: 0,
};
const CENTER = {
  x: size / 2,
  y: size / 2,
};
const { PI } = Math;

interface TimeProgressIosProps {
  index: number;
  onPress: (item: any) => void;
}

const TimeProgressIos = memo((props: TimeProgressIosProps) => {
  const translation = vec.createValue(0, 0);
  const state = new Value(State.UNDETERMINED);
  const gestureHandler = onGestureEvent({
    translationX: translation.x,
    translationY: translation.y,
    state,
  });
  const translationWithOffset = {
    x: withOffset(translation.x, state),
    y: withOffset(translation.y, state),
  };
  // console.log('index time', props.index);
  const trx = vec.add(translationWithOffset, FIRST);
  const { theta, radius } = canvas2Polar(trx, CENTER);

  const alpha = theta;

  const progress = cond(
    greaterOrEq(alpha, PI / 2),
    sub(alpha, PI / 2),
    add((3 * PI) / 2, alpha),
  );
  const polarTranslation = {
    theta: alpha,
    radius: clamp(radius, (size - 12) / 2, (size - 12) / 2),
  };

  const onChange = useCallback(
    (mins) => {
      props.onPress({
        text: 'Max ' + mins.toString() + ' mins',
        type: 'text',
      });
    },
    [props.onPress],
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}>
        <PanGestureHandler {...gestureHandler}>
          <Animated.View
            style={[
              styles.panView,
              { transform: translate(polar2Canvas(polarTranslation, CENTER)) },
            ]}>
            <SvgPinSlider />
          </Animated.View>
        </PanGestureHandler>
        <View style={styles.clockView}>
          <View style={styles.background}>
            <SvgClock />
          </View>
          <CircleTest progress={progress} onChange={onChange} />
        </View>
      </View>
    </View>
  );
});
export default TimeProgressIos;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: widthScreen,
    bottom: 100,
    alignItems: 'center',
  },
  panView: {
    marginLeft: -20,
    marginTop: -20,
  },
  clockView: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -100,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
