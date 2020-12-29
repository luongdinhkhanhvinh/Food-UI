import React, {memo, useCallback} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SvgIconRecovery from 'app/svgs/Login/SvgIconRecovery';
import FONTS from'app/ultis/fonts';
import TextInputWala from'app/components/TextInput';
import ButtonLinear from'app/components/ButtonLinear';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';

const RecoveryPassword = memo(() => {
  const navigation = useNavigation();
  const onRecovery = useCallback(() => {
    navigation.navigate(ROUTES.LoginUpdatedPassword);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <SvgIconRecovery />
        <Text style={styles.textContent}>
          Reset code was sent to your email. Please enter the code and create
          new password.
        </Text>
        <TextInputWala
          title={'RESET CODE'}
          styleView={styles.resetCode}
          value={'RCP-@2153'}
        />
      </View>
      <View style={styles.bottomView}>
        <TextInputWala
          title={'NEW PASSWORD'}
          secure={true}
          styleView={styles.passView}
          value={'RCP-@2153'}
        />
        <ButtonLinear
          title={'CHANGE PASSWORD'}
          onPress={onRecovery}
          style={styles.btnRecovery}
        />
      </View>
    </View>
  );
});

export default RecoveryPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  topView: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',
  },
  textContent: {
    fontSize: 13,
    fontFamily: FONTS.Montserrat.Regular,
    textAlign: 'center',
    marginTop: 24,
    lineHeight: 28,
  },
  resetCode: {
    marginTop: 32,
    width: '100%',
    paddingLeft: 8,
  },
  bottomView: {
    width: '100%',
    flex: 1,
  },
  btnRecovery: {
    marginTop: 32,
  },
  passView: {
    paddingLeft: 8,
  },
});
