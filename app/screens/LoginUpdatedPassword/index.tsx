import React, {memo, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SvgIconSuccess from'app/svgs/Login/SvgIconSuccess';
import FONTS from'app/ultis/fonts';
import ButtonLinear from'app/components/ButtonLinear';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';

const UpdatedPassword = memo(() => {
  const navigation = useNavigation();
  const onLogin = useCallback(() => {
    navigation.navigate(ROUTES.SelectPlan);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <SvgIconSuccess />
        <Text style={styles.txtContent}>
          You have successfully change password. Please use new password when
          logging in.
        </Text>
      </View>
      <View style={styles.bottomView}>
        <ButtonLinear
          title={'LOGIN NOW'}
          onPress={onLogin}
          style={styles.btnLogin}
        />
      </View>
    </View>
  );
});

export default UpdatedPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  topView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  txtContent: {
    fontSize: 14,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
    marginTop: 64,
    lineHeight: 28,
    textAlign: 'center',
  },
  bottomView: {
    flex: 1,
  },
  btnLogin: {
    width: 200,
    marginTop: 24,
  },
});
