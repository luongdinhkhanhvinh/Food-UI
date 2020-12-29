import React, { memo, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { heightScreen, widthScreen } from 'app/ultis/layout';
import CircleSlider from '../../../components/CircleSlider';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const size = 204;
interface TimeCircleProgressProps {
  index: number;
  onPress: (item: any) => void;
}

const TimeCircleProgress = memo((props: TimeCircleProgressProps) => {
  const onChange = useCallback(
    (mins) => {
      console.log('mins', mins);
      props.onPress({
        text: 'Max ' + mins.toString() + ' mins',
        type: 'text',
      });
    },
    [props.onPress],
  );

  return (
    <View style={styles.container}>
      <CircleSlider
        value={20}
        dialWidth={12}
        dialRadius={(size - 12) / 2}
        meterColor={'#FE9870'}
        strokeWidth={0}
        xCenter={widthScreen / 2}
        yCenter={heightScreen - getBottomSpace() - 180 - size / 2}
        onTakeValue={onChange}
      />
    </View>
  );
});
export default TimeCircleProgress;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: widthScreen,
    bottom: 40,
    alignItems: 'center',
  },
  panView: {
    marginLeft: -20,
    marginTop: -20,
  },
  clockView: {
    position: 'absolute',
    bottom: 0,
    // left: 0,
    zIndex: -100,
  },
  background: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
  },
});
