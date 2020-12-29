import React, { memo, useCallback, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import colors from 'app/ultis/colors';
import CardItem from 'app/screens/ProfilePaymentMethod/components/CardItem';
import FONTS from 'app/ultis/fonts';
import PaymentItem from 'app/screens/ProfilePaymentMethod/components/PaymentItem';
import keyExtractor from 'app/ultis/KeyExtractor';
import SvgApple from 'app/svgs/SvgApple';
import SvgPayPal from 'app/svgs/SvgPayPal';
import SvgPayWithCredit from 'app/svgs/SvgPayWithCredit';
const data = [
  {
    imgCard: require('app/assets/ProfilePaymentMethod/Card1.png'),
    userName: 'Hieu Le Quang',
    imgCardType: require('app/assets/ProfilePaymentMethod/MasterCard.png'),
    expDate: '14/20',
    cvv: '468',
    cardNumber: '5686',
  },
  {
    imgCard: require('app/assets/ProfilePaymentMethod/Card2.png'),
    userName: 'Hieu Le Quang',
    imgCardType: require('app/assets/ProfilePaymentMethod/MasterCard.png'),
    expDate: '14/20',
    cvv: '468',
    cardNumber: '5686',
  },
];

const dataPaymentMethod = [
  {
    number: '0',
    svg: <SvgApple />,
  },
  {
    number: '1',
    svg: <SvgPayPal />,
  },
  {
    number: '2',
    svg: <SvgPayWithCredit />,
  },
];

const ProfilePaymentMethod = memo(() => {
  const [id, setId] = useState(0);

  const renderItem = useCallback(({ item }) => {
    const { imgCard, userName, imgCardType, expDate, cvv, cardNumber } = item;
    return (
      <CardItem
        imgCard={imgCard}
        userName={userName}
        imgCardType={imgCardType}
        expDate={expDate}
        cvv={cvv}
        cardNumber={cardNumber}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={styles.flatListStyle}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
      <Text style={styles.txtNew}>New payment method</Text>
      <View style={styles.paymentMethodView}>
        {dataPaymentMethod.map((item, index) => {
          const { svg, number } = item;
          return (
            <PaymentItem
              onPress={() => setId(index)}
              style={index === id ? styles.active : styles.inActive}
              svg={svg}
              key={number}
            />
          );
        })}
      </View>
    </View>
  );
});

export default ProfilePaymentMethod;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundApp,
    flex: 1,
  },
  flatListStyle: {
    marginTop: 24,
  },
  contentContainerStyle: {
    paddingLeft: 24,
  },
  txtNew: {
    marginTop: 52,
    textAlign: 'center',
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    lineHeight: 17,
    color: colors.title,
    fontWeight: 'normal',
  },
  paymentMethodView: {
    flexDirection: 'row',
    marginTop: 25,
    marginHorizontal: 24,
    justifyContent: 'space-between',
  },
  active: {
    borderColor: colors.orangeLight,
  },
  inActive: {
    borderColor: 'transparent',
  },
  carouselContainer: {
    marginTop: 24,
    paddingLeft: 24,
    backgroundColor: colors.background,
  },
});
