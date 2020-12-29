import React, { memo, useState, useCallback } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthScreen } from 'app/ultis/layout';
import FONTS from 'app/ultis/fonts';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import SvgAdd from 'app/svgs/SignUp/SvgAdd';
import SvgSub from 'app/svgs/SignUp/SvgSub';
import { usePanGestureHandler } from 'react-native-redash';
import useSwipeToShowBtn from '../../../hooks/useSwipeToShowBtn';

const width = 42;

const RecipeSuggest = memo(({ index, image, text, onLayout, onItem }) => {
  const [number, setNumber] = useState(0);

  const onAdd = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  const onSub = useCallback(() => {
    if (number <= 0) {
      return;
    }
    setNumber(number - 1);
  }, [number]);

  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();

  const [translateY] = useSwipeToShowBtn(
    [-width, 0],
    translation,
    velocity,
    state,
    true,
  );

  return (
    <TouchableOpacity
      style={styles.viewContainer}
      activeOpacity={1}
      onPress={onItem}>
      <PanGestureHandler {...gestureHandler} minDist={20}>
        <Animated.View
          style={[styles.container, { transform: [{ translateY }] }]}
          key={index}
          onLayout={onLayout}>
          <Image style={styles.image} source={image} />
          <Text style={styles.txtTitle}>{text}</Text>
        </Animated.View>
      </PanGestureHandler>
      <View style={styles.btnView}>
        <LinearGradient
          style={styles.linearStyle}
          colors={['#0EAD69', '#82D84E']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}>
          {number <= 0 ? (
            <TouchableOpacity style={styles.addToBoxBtn} onPress={onAdd}>
              <Text style={styles.addToBoxTxt}>ADD to box</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.btnMathView}>
              <TouchableOpacity style={styles.btnMath} onPress={onSub}>
                <SvgSub />
              </TouchableOpacity>
              <View style={styles.addedInfo}>
                <Text style={styles.addedNumber}>{number}</Text>
                <Text style={styles.txtAddedUnit}>added</Text>
              </View>
              <TouchableOpacity style={styles.btnMath} onPress={onAdd}>
                <SvgAdd />
              </TouchableOpacity>
            </View>
          )}
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
});

export default RecipeSuggest;

const styles = StyleSheet.create({
  container: {
    width: (widthScreen / 375) * 248,
    borderRadius: 12,
    backgroundColor: '#fff',
    zIndex: 300,
  },
  image: {
    width: (widthScreen / 375) * 248,
    height: (widthScreen / 375) * 179,
  },
  txtTitle: {
    color: '#1D1E2C',
    fontSize: 14,
    lineHeight: 24,
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '600',
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 12,
  },
  addedInfo: {
    flex: 1,
    alignItems: 'center',
  },
  addedNumber: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '600',
    color: '#FFf',
  },
  txtAddedUnit: {
    fontSize: 10,
    marginTop: -2,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#fff',
    lineHeight: 12,
  },
  btnMath: {
    padding: 10,
  },
  viewContainer: {
    marginLeft: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  btnView: {
    position: 'absolute',
    bottom: 0,
    width: (widthScreen / 375) * 248,
  },
  linearStyle: {
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: '#fff',
    height: 54,
  },
  addToBoxBtn: {
    position: 'absolute',
    bottom: 0,
    width: (widthScreen / 375) * 248,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToBoxTxt: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Regular,
    textTransform: 'uppercase',
  },
  btnMathView: {
    position: 'absolute',
    bottom: 0,
    width: (widthScreen / 375) * 248,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
});
