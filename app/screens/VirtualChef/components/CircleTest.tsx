import React, { memo, useState, useCallback } from 'react';
import Svg, { Path } from 'react-native-svg';
import Animated, { Value, useCode, call } from 'react-native-reanimated';
import { clamp } from 'react-native-redash';
import FONTS from 'app/ultis/fonts';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const size = 204;
const strokeWidth = 14;
const radius = (size - strokeWidth) / 2;
const circumference = radius * 2 * Math.PI;
const AnimatedPath = Animated.createAnimatedComponent(Path);

const { sin, cos, PI, floor } = Math;

const cx = size / 2;
const cy = size / 2;
const x1 = cx - radius * cos(PI / 2);
const y1 = -radius * sin(PI / 2) + cy;
const x2 = cx - radius * cos(0);
const y2 = -radius * sin(0) + cy;
const d = `M ${x1} ${y1} A ${radius} ${radius} 0 1 1 ${x2} ${y2} A ${radius} ${radius} 0 0 1 ${x1} ${y1}`;
interface CircleTestProps {
  progress: typeof Value;
  onChange: (mins: number) => void;
}
const { multiply } = Animated;

const CircleTest = memo((props: CircleTestProps) => {
  const { onChange, progress } = props;
  const [alpha, setAlpha] = useState(0);
  useCode(() => {
    return call([progress], (progress) => {
      setAlpha(progress / PI);
    });
  }, [progress, onChange]);

  const lockProgress = clamp(progress, 0, PI * 2);

  const strokeDashoffset = multiply(lockProgress, radius);
  const onPress = useCallback(() => {
    console.log('theta', progress / PI);
    onChange(floor(60 - alpha * 30));
  }, [alpha]);

  return (
    <View>
      <Svg width={size} height={size}>
        <AnimatedPath
          stroke={'#FE9870'}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          {...{ d, strokeWidth, strokeDashoffset }}
        />
        <View style={styles.txtContainer}>
          <Text style={styles.txtTime}>{floor(60 - alpha * 30)}</Text>
        </View>
      </Svg>
      <View style={styles.btnView}>
        <TouchableOpacity onPress={onPress}>
          <LinearGradient
            style={styles.linear}
            colors={['#0EAD69', '#82D84E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <Text style={styles.txtBtn}>Confirm</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
});
export default CircleTest;

const styles = StyleSheet.create({
  txtContainer: {
    width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTime: {
    fontSize: 48,
    fontFamily: FONTS.DINCondensed.Bold,
    marginTop: 4,
    textAlign: 'center',
  },
  btnView: {
    width: '100%',
    alignItems: 'center',
  },
  linear: {
    marginTop: 24,
    width: 100,
    borderRadius: 21,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  txtBtn: {
    color: '#fff',
    fontFamily: FONTS.Montserrat.SemiBold,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
