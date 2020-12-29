import React, {memo, useCallback, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SvgLogo from 'app/svgs/Login/SvgLogo';
import FONTS from'app/ultis/fonts';
import ButtonLinear from'app/components/ButtonLinear';
import {heightScreen, widthScreen} from 'app/ultis/layout';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';
import TextInputWala from'app/components/TextInput';

const Login = memo(() => {
  const navigation = useNavigation();

  const onForgot = useCallback(() => {
    navigation.navigate(ROUTES.LoginForgotPassword);
  }, [navigation]);
  const onSignUp = useCallback(() => {
    navigation.navigate(ROUTES.RegisterAccount);
  }, [navigation]);

  const onLogin = useCallback(() => {
    navigation.navigate(ROUTES.SelectPlan);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <SvgLogo />
        <Text style={styles.textWelcome}>Welcome Back!</Text>
        <TextInputWala
          title={'EMAIL'}
          styleView={styles.inputView}
          value={'lehieuds@gmail.com'}
        />
        <TextInputWala
          title={'PASSWORD'}
          secure={true}
          styleView={styles.inputView}
          value={'lehieuds@gmail.com'}
        />
      </View>
      <View style={styles.btmView}>
        <ButtonLinear
          title={'LOG IN'}
          style={styles.btnStyle}
          onPress={onLogin}
        />
        <TouchableOpacity style={styles.btnForgotPW} onPress={onForgot}>
          <Text style={[styles.textGuide, {color: '#FE9870'}]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <View style={styles.accountAsk}>
          <Text style={[styles.textGuide, {color: '#1D1E2C'}]}>
            Don't have an account?
          </Text>
          <TouchableOpacity style={styles.touchShow} onPress={onSignUp}>
            <Text style={[styles.textGuide, {color: '#FE9870'}]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require('app/assets/Login/LoginBg.png')}
        style={styles.imageBg}
      />
    </View>
  );
});

export default Login;

export const isLargeScreen = heightScreen > 812;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 32,
    justifyContent: 'center',
    paddingBottom: getBottomSpace(),
  },
  textField: {
    fontSize: 12,
    fontFamily: FONTS.Montserrat.Medium,
    color: '#7D8699',
    marginBottom: 12,
  },
  textShowPassword: {
    fontSize: 12,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#7D8699',
    marginBottom: 12,
  },
  textWelcome: {
    fontSize: 16,
    fontFamily: FONTS.Montserrat.Medium,
    color: '#1D1E2C',
    marginBottom: isLargeScreen ? 48 : 24,
    marginTop: isLargeScreen ? 24 : 12,
  },
  textGuide: {
    fontSize: 14,
    lineHeight: 28,
    fontFamily: FONTS.Montserrat.Regular,
  },
  imageBg: {
    position: 'absolute',
    bottom: 0,
    width: widthScreen,
    height: (widthScreen / 400) * 375,
    resizeMode: 'stretch',
    zIndex: -10,
  },
  accountAsk: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingBottom: 64,
  },
  btnStyle: {
    marginTop: 32,
  },
  btnForgotPW: {
    marginTop: 24,
  },
  inputView: {
    width: '100%',
  },
  passwordView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    justifyContent: 'space-between',
  },
  touchShow: {
    padding: 4,
  },
  topView: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    width: '100%',
  },
  btmView: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  inputView: {
    paddingLeft: 8,
  },
});
