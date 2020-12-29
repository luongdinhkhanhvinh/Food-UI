import React, {memo, useCallback} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthScreen} from 'app/ultis/layout';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {useNavigation} from '@react-navigation/native';
import SvgLogo from 'app/svgs/Login/SvgLogo';
import ROUTES from 'app/ultis/routes';
import TextInputWala from'app/components/TextInput';
import ButtonLinear from'app/components/ButtonLinear';
import FONTS from'app/ultis/fonts';
import {isLargeScreen} from'app/screens/Login';

const RegisterAccount = memo(() => {
  const navigation = useNavigation();

  const onLogin = useCallback(() => {
    navigation.navigate(ROUTES.Login);
  }, [navigation]);
  const onSignUp = useCallback(() => {
    navigation.navigate(ROUTES.SelectPlan);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <SvgLogo />
        <Text style={styles.textWelcome}>Welcome to Wala!</Text>
        <TextInputWala
          title={'EMAIL'}
          styleView={styles.inputStyle}
          value={'julian68@gmail.com'}
        />
        <TextInputWala
          title={'PASSWORD'}
          secure={true}
          styleView={styles.inputStyle}
          value={'julian68@gmail.com'}
        />
      </View>
      <View style={styles.btmView}>
        <ButtonLinear
          title={'Sign Up'}
          style={styles.btnStyle}
          onPress={onSignUp}
        />
        <View style={styles.accountAsk}>
          <Text style={[styles.textGuide, {color: '#1D1E2C', fontSize: 14}]}>
            Have an account?
          </Text>
          <TouchableOpacity style={styles.touchShow} onPress={onLogin}>
            <Text style={[styles.textGuide, {color: '#FE9870', fontSize: 14}]}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btmContent}>
          <Text style={[styles.textGuide, {color: '#7D8699'}]}>
            By placing order, I agree to Wala
          </Text>
          <TouchableOpacity>
            <Text style={[styles.textGuide, {color: '#FE9870'}]}>
              Terms and Conditions.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image source={require('app/assets/SignUp/bg.png')} style={styles.imageBg} />
    </View>
  );
});

export default RegisterAccount;

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
    fontSize: 12,
    lineHeight: 24,
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
  btmContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingBottom: 96,
  },
  accountAsk: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
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
  inputStyle: {
    paddingLeft: 8,
  },
});
