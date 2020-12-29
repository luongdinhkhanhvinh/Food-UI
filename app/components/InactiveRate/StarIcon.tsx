import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import SvgFullRate from 'app/svgs/SignUp/SvgRate';
import SvgHalfRate from 'app/svgs/SignUp/SvgHalfRate';
import SvgEmptyRate from 'app/svgs/SignUp/SvgEmptyRate';

interface StarIconProps {
  fillFull: boolean;
  fillHalf: boolean;
}
const StarIcon = memo((props: StarIconProps) => {
  return (
    <View style={styles.star}>
      {props.fillFull ? (
        <SvgFullRate />
      ) : props.fillHalf ? (
        <SvgHalfRate />
      ) : (
        <SvgEmptyRate />
      )}
    </View>
  );
});

export default StarIcon;

const styles = StyleSheet.create({
  star: {marginLeft: 3},
});
