import React, { memo, useCallback, useRef, useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import TextInputWala from 'app/components/TextInput';
import FONTS from 'app/ultis/fonts';
import CheckLine from 'app/components/CheckLine';
import ButtonLinear from 'app/components/ButtonLinear';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { widthScreen } from 'app/ultis/layout';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import useKeyboard from 'app/hooks/useKeyboard';

const ProfileAddNewAddress = memo(() => {
  const [isCheck, setCheck] = useState(false);
  const [addressName, setAddressName] = useState('Apartment');
  const [organization, setOrganization] = useState('MEGASYSTEMS INC');
  const [address, setAddress] = useState('7100 Athens Place');
  const [street, setStreet] = useState('DC 20521-7100');
  const [town, setTown] = useState('Quebec Place');
  const [county, setCounty] = useState('Washington');
  const [deliveryInstructions, setDeliveryInstructions] = useState(
    'Front Potch',
  );
  const navigation = useNavigation();

  const scrollRef = useRef();
  const onCheck = useCallback(() => {
    setCheck(!isCheck);
  }, [isCheck]);
  const onConfirm = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const [transX] = useKeyboard();

  const animatedStyle = { marginBottom: Platform.OS === 'ios' ? transX : 0 };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <ScrollView
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        // @ts-ignore
        ref={scrollRef}>
        <Text style={[styles.txtTitle, { marginTop: 24 }]}>Delivery Name</Text>
        <View>
          <TextInputWala
            title={'address name'}
            value={addressName}
            titleStyle={styles.inputStyle}
            style={styles.inputStyle}
          />
        </View>
        <Text style={[styles.txtTitle, { marginTop: 40 }]}>
          Delivery Address
        </Text>
        <View>
          <TextInputWala
            title={'Organization'}
            value={organization}
            titleStyle={styles.inputStyle}
            style={styles.inputStyle}
            btnTitle={'Optional'}
            marginTop={1}
            styleView={{ marginBottom: 24 }}
          />
        </View>
        <View>
          <TextInputWala
            title={'Address Line 1'}
            value={address}
            titleStyle={styles.inputStyle}
            style={styles.inputStyle}
            marginTop={1}
            styleView={{ marginBottom: 24 }}
          />
        </View>
        <View>
          <TextInputWala
            title={'Street'}
            value={street}
            titleStyle={styles.inputStyle}
            style={styles.inputStyle}
            marginTop={1}
            styleView={{ marginBottom: 24 }}
          />
        </View>
        <View>
          <TextInputWala
            title={'Town'}
            value={town}
            titleStyle={styles.inputStyle}
            style={styles.inputStyle}
            marginTop={1}
            styleView={{ marginBottom: 24 }}
          />
        </View>
        <View>
          <TextInputWala
            title={'County'}
            value={county}
            titleStyle={styles.inputStyle}
            style={styles.inputStyle}
            marginTop={1}
            styleView={{ marginBottom: 24 }}
          />
        </View>
        <Text style={[styles.txtTitle, { marginTop: 24 }]}>
          Delivery Instructions
        </Text>
        <View>
          <TextInputWala
            title={'Delivery Instructions'}
            value={deliveryInstructions}
            titleStyle={styles.inputStyle}
            style={styles.inputStyle}
          />
        </View>
        <CheckLine
          isCheck={isCheck}
          onCheck={onCheck}
          title={'Make this my default address'}
          style={styles.checkLine}
        />
      </ScrollView>
      <ButtonLinear title={'Save'} onPress={onConfirm} style={styles.btnBtm} />
    </Animated.View>
  );
});
export default ProfileAddNewAddress;

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
  checkLine: {
    marginTop: 24,
  },
});
