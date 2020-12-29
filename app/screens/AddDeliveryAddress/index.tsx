import React, { memo, useCallback, useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import TextInputWala from 'app/components/TextInput';
import FONTS from 'app/ultis/fonts';
import CheckLine from 'app/components/CheckLine';
import ButtonLinear from 'app/components/ButtonLinear';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { widthScreen } from 'app/ultis/layout';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';
import useKeyboard from 'app/hooks/useKeyboard';

const AddDeliveryAddress = memo(() => {
  const [isCheck, setCheck] = useState(false);
  const onCheck = useCallback(() => {
    setCheck(!isCheck);
  }, [isCheck]);
  const navigation = useNavigation();
  const onConfirm = useCallback(() => {
    navigation.navigate(ROUTES.PersonalInformation);
  }, [navigation]);

  const [transX] = useKeyboard();

  const animatedStyle = {
    paddingBottom: Platform.OS === 'ios' ? transX : 0,
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <ScrollView
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={[styles.txtTitle, { marginTop: 24 }]}>Delivery Name</Text>
        <View>
          <TextInputWala
            title={'address name'}
            titleStyle={styles.inputStyle}
            style={styles.inputStyle}
            value={'Home'}
          />
        </View>
        <Text style={[styles.txtTitle, { marginTop: 40 }]}>
          Delivery Address
        </Text>
        <View>
          <TextInputWala
            title={'Organization'}
            titleStyle={styles.inputStyle}
            style={styles.inputStyle}
            btnTitle={'Optional'}
            marginTop={1}
            styleView={{ marginBottom: 24 }}
            value={'MEGASYSTEMS INC'}
          />
        </View>
        <View>
          <TextInputWala
            title={'Address Line 1'}
            titleStyle={styles.inputStyle}
            style={styles.inputStyle}
            marginTop={1}
            styleView={{ marginBottom: 24 }}
            value={'7100 Athens Place'}
          />
        </View>
        <View>
          <TextInputWala
            title={'Street'}
            titleStyle={styles.inputStyle}
            style={styles.inputStyle}
            marginTop={1}
            styleView={{ marginBottom: 24 }}
            value={'DC 20521-7100'}
          />
        </View>
        <View>
          <TextInputWala
            title={'Town'}
            titleStyle={styles.inputStyle}
            style={styles.inputStyle}
            marginTop={1}
            styleView={{ marginBottom: 24 }}
            value={'Quebec Place'}
          />
        </View>
        <View>
          <TextInputWala
            title={'County'}
            titleStyle={styles.inputStyle}
            style={styles.inputStyle}
            marginTop={1}
            styleView={{ marginBottom: 24 }}
            value={'Washington'}
          />
        </View>
        <Text style={[styles.txtTitle, { marginTop: 24 }]}>
          Delivery Instructions
        </Text>
        <View>
          <TextInputWala
            title={'Delivery Instructions'}
            titleStyle={styles.inputStyle}
            style={styles.inputStyle}
            value={'Front Potch'}
          />
        </View>
        <CheckLine
          isCheck={isCheck}
          onCheck={onCheck}
          title={'Make this my default address'}
          style={styles.checkline}
        />
      </ScrollView>
      <ButtonLinear
        title={'Personal Information'}
        onPress={onConfirm}
        style={styles.btnBtm}
      />
    </Animated.View>
  );
});
export default AddDeliveryAddress;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  txtTitle: {
    marginBottom: 23,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: FONTS.Montserrat.Medium,
    color: '#1D1E2C',
  },
  inputStyle: {
    paddingHorizontal: 8,
  },
  btnBtm: {
    paddingHorizontal: 24,
    position: 'absolute',
    width: widthScreen,
    bottom: getBottomSpace() + 8,
  },
  listContainer: {
    paddingBottom: getBottomSpace() + 78,
  },
  checkline: {
    marginTop: 24,
  },
});
