import React, { memo, useCallback, useRef } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { widthScreen } from 'app/ultis/layout';
import HeaderTitle from 'app/components/HeaderTitle';
import Animated, { EasingNode } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';
interface TitleProProps {
  title: string;
  isNext: boolean;
  step: number;
}
const HeaderTitleProgressBar = memo((props: TitleProProps) => {
  const widthStep = useRef(
    new Animated.Value(
      props.isNext
        ? ((props.step - 1) * widthScreen) / 4
        : (props.step * widthScreen) / 4,
    ),
  ).current;
  useFocusEffect(
    useCallback(() => {
      Animated.timing(widthStep, {
        toValue: (props.step * widthScreen) / 4,
        duration: 100,
        easing: EasingNode.linear,
      }).start();
    }, [props, widthStep]),
  );

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <HeaderTitle title={props.title} />
      </View>
      <View style={styles.background}>
        {props.step ? (
          <Animated.View style={[styles.progressBar, { width: widthStep }]} />
        ) : null}
      </View>
    </View>
  );
});

export default HeaderTitleProgressBar;

const styles = StyleSheet.create({
  container: {
    width: widthScreen / 2,
    alignContent: 'center',
    height: Platform.OS === 'ios' ? '100%' : '180%',
  },
  title: {
    flex: 1,
    justifyContent: Platform.OS === 'ios' ? 'center' : 'flex-start',
    alignItems: 'center',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#FFCD02',
    marginLeft: -widthScreen / 4,
  },
  background: {
    backgroundColor: '#F7F7FB',
    width: widthScreen,
  },
});
