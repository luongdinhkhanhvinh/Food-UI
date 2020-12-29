import React, {memo, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SvgIconForgotPW from'app/svgs/Login/SvgIconForgotPW';
import FONTS from'app/ultis/fonts';
import ButtonLinear from'app/components/ButtonLinear';
import TextInputWala from'app/components/TextInput';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';
import {widthScreen} from 'app/ultis/layout';

const ForgotPassword = memo(() => {
  const navigation = useNavigation();
  const onSend = useCallback(() => {
    navigation.navigate(ROUTES.LoginRecoveryPassword);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <SvgIconForgotPW />
        <Text style={styles.textContent}>
          Please enter your email below to receive your password reset
          instructions.
        </Text>
        <View style={styles.email}>
          <TextInputWala
            title={'EMAIL'}
            styleView={styles.inputStyle}
            value={'lehieuds@gmail.com'}
          />
        </View>
      </View>
      <View style={styles.bottomView}>
        <ButtonLinear
          title={'SEND REQUEST'}
          style={styles.btnStyle}
          onPress={onSend}
        />
      </View>
    </View>
  );
});

export default ForgotPassword;

const styles = StyleSheet.create({
  textField: {
    fontSize: 12,
    fontFamily: FONTS.Montserrat.Medium,
    color: '#7D8699',
    marginBottom: 12,
    marginTop: 32,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputView: {
    flex: widthScreen > 375 ? 1 : 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
  },
  textContent: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 13,
    color: '#1D1E2C',
    lineHeight: 28,
    textAlign: 'center',
    paddingHorizontal: 16,
    marginTop: 24,
  },
  email: {
    width: '100%',
  },
  bottomView: {
    flex: widthScreen > 375 ? 1 : 3,
    paddingHorizontal: 24,
  },
  btnStyle: {
    marginTop: 32,
  },
  inputStyle: {
    marginTop: 32,
    paddingLeft: 8,
  },
});
