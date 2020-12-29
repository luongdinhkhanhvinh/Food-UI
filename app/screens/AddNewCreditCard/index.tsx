import { memo, useCallback, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView, Platform,
} from 'react-native';
import React from 'react';
import { widthScreen } from 'app/ultis/layout';
import SvgMasterCard from 'app/svgs/PayWithCreditCard/SvgMasterCard';
import FONTS from 'app/ultis/fonts';
import TextInputWala from 'app/components/TextInput';
import ButtonLinear from 'app/components/ButtonLinear';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Animated from 'react-native-reanimated';
import FullCardNumber from 'app/screens/AddNewCreditCard/components/FullCardName';
import formatCardNum from 'app/ultis/formatCardNum';
import { useNavigation } from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';
import useKeyboard from 'app/hooks/useKeyboard';

const AddCreditCard = memo(() => {
  const navigation = useNavigation();
  const [text, setText] = useState('4645568689744');
  const onTextChange = useCallback((input) => {
    setText(input);
  }, []);

  const onConfirm = useCallback(() => {
    navigation.setParams({ step: null });
    navigation.navigate(ROUTES.OrderCompleted);
  }, [navigation]);

  const [transX] = useKeyboard();

  const animatedStyle = {
    paddingBottom: Platform.OS === 'ios' ? transX : 0,
  };

  return (
    <Animated.View style={[styles.mainContainer, animatedStyle]}>
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={[styles.container]}
        bounces={false}>
        <ImageBackground
          source={require('app/assets/bgCard.png')}
          style={styles.card}>
          <View style={styles.flexRow}>
            <View>
              <Text style={styles.textBlur}>Card holder</Text>
              <Text style={styles.txtInfo}>Hieu Le Quang</Text>
            </View>
            <SvgMasterCard />
          </View>
          <View style={styles.cardNumber}>
            <FullCardNumber text={text} />
          </View>
          <View style={styles.flexRow}>
            <View>
              <Text style={styles.textBlur}>exp date</Text>
              <Text style={styles.txtInfo}>14/20</Text>
            </View>
            <View>
              <Text style={styles.textBlur}>CVV</Text>
              <Text style={styles.txtInfo}>468</Text>
            </View>
          </View>
        </ImageBackground>
        <TextInputWala
          title={'Card Number'}
          styleView={styles.inputView}
          titleStyle={styles.txtInput}
          style={styles.inputStyle}
          phonePad={true}
          isCardNum={true}
          onTextChange={onTextChange}
          value={formatCardNum(text)}
        />
      </ScrollView>
      <View style={styles.btnContainer}>
        <ButtonLinear
          title={'Done'}
          onPress={onConfirm}
          style={styles.btnBtm}
        />
      </View>
    </Animated.View>
  );
});
export default AddCreditCard;

const styles = StyleSheet.create({
  textBlur: {
    fontSize: 12,
    lineHeight: 12,
    color: '#ffffff80',
    textTransform: 'uppercase',
    fontFamily: FONTS.Montserrat.Medium,
  },
  txtInfo: {
    marginTop: 5,
    fontSize: 16,
    lineHeight: 20,
    color: '#ffffff',
    fontFamily: FONTS.Montserrat.Medium,
  },
  txtCardNumber: {
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 2,
    color: '#fff',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: (widthScreen / 375) * 327,
    height: (widthScreen / 375) * 200,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
    borderRadius: 15,
  },
  btnBtm: {
    position: 'absolute',
    bottom: getBottomSpace() + 8,
    left: 24,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: getBottomSpace() + 100,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardNumber: {
    flex: 1,
    justifyContent: 'center',
  },
  inputView: {
    marginTop: 48,
  },
  txtInput: {
    marginLeft: 8,
  },
  inputStyle: {
    paddingLeft: 8,
  },
  btnContainer: {
    paddingHorizontal: 24,
  },
});
