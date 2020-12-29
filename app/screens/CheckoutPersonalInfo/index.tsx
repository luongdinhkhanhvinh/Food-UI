import React, { memo, useCallback } from 'react';
import {Platform, ScrollView, StyleSheet, View} from 'react-native';
import TextInputWala from 'app/components/TextInput';
import ButtonLinear from 'app/components/ButtonLinear';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useNavigation } from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';
import formatPhoneNumber from 'app/ultis/formatPhoneNumber';
import useKeyboard from 'app/hooks/useKeyboard';
import Animated, {cond, greaterThan} from 'react-native-reanimated';

const PersonalInfo = memo(() => {
  const navigation = useNavigation();
  const onConfirm = useCallback(() => {
    navigation.navigate(ROUTES.SignUpPaymentMethod, { isNext: true, step: 3 });
  }, [navigation]);

  const [transX] = useKeyboard();

  const animatedStyle = { height: cond(greaterThan(transX, 0), 120) };
  const containerAnimated = {
    marginBottom: Platform.OS === 'ios' ? transX : 0,
  }
  return (
    <Animated.View style={[styles.container, containerAnimated]}>
      <ScrollView contentContainerStyle={styles.contentStyle}>
        <TextInputWala
          title={'Mr/Mrs'}
          titleStyle={styles.titleInputStyle}
          value={'Mrs'}
          styleView={styles.inputStyle1st}
        />
        <TextInputWala
          title={'first name'}
          styleView={styles.inputStyle}
          titleStyle={styles.titleInputStyle}
          value={'Julia'}
        />
        <TextInputWala
          title={'last name'}
          styleView={styles.inputStyle}
          titleStyle={styles.titleInputStyle}
          value={'Andrews'}
        />
        <TextInputWala
          title={'phone number'}
          styleView={styles.inputStyle}
          phonePad={true}
          titleStyle={styles.titleInputStyle}
          value={formatPhoneNumber('4269800043')}
          isPhoneNum={true}
        />
        <Animated.View style={animatedStyle} />
      </ScrollView>
      <ButtonLinear
        title={'Go To Payment'}
        onPress={onConfirm}
        style={styles.btnBtm}
      />
    </Animated.View>
  );
});
export default PersonalInfo;

const styles = StyleSheet.create({
  btnBtm: {
    paddingHorizontal: 24,
    position: 'absolute',
    bottom: getBottomSpace() + 8,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentStyle: {
    paddingHorizontal: 24,
    paddingTop: 36,
  },
  inputStyle: {
    marginTop: 24,
    padding: 8,
  },
  inputStyle1st: {
    padding: 8,
  },
  titleInputStyle: {},
});
