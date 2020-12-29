import React from 'react';
import {ImageBackground, StyleSheet, View, Text, Image} from 'react-native';
import FONTS from'app/ultis/fonts';
import colors from 'app/ultis/colors';
import DotItem from'app/screens/ProfilePaymentMethod/components/DotItem';

interface Props {
  imgCard?: any;
  userName?: string;
  imgCardType?: any;
  cardNumber?: string;
  expDate?: string;
  cvv?: string;
}

const CardItem = (props: Props) => {
  return (
    <View style={styles.cardItem}>
      <ImageBackground style={styles.imgCard} source={props.imgCard}>
        <View style={styles.setRow}>
          <View>
            <Text style={styles.txtCardHolder}>Card holder</Text>
            <Text style={styles.txtUserName}>{props.userName}</Text>
          </View>
          <Image style={styles.imgCardType} source={props.imgCardType} />
        </View>
        <View style={styles.dotsView}>
          <DotItem dotNumber={4} />
          <DotItem dotNumber={4} />
          <DotItem dotNumber={4} />
          {props.cardNumber ? (
            <Text style={styles.txtNumber}>{props.cardNumber}</Text>
          ) : (
            <DotItem dotNumber={4} />
          )}
        </View>
        <View style={styles.bottomView}>
          <View style={styles.expDateView}>
            <Text style={styles.expDate}>exp date</Text>
            <Text style={styles.txtExpDate}>{props.expDate}</Text>
          </View>
          <View style={styles.cvvView}>
            <Text style={styles.CVV}>cvv</Text>
            <Text style={styles.txtCVV}>{props.cvv}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  cardItem: {
    borderRadius: 12,
    width: 329,
    marginRight: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  imgCard: {
    width: 329,
    height: 200,
    resizeMode: 'contain',
  },
  txtCardHolder: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 12,
    color: colors.while,
    opacity: 0.8,
    textTransform: 'uppercase',
    marginTop: 24,
    marginLeft: 24,
  },
  txtUserName: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: colors.while,
    marginTop: 5,
    marginLeft: 24,
  },
  imgCardType: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
  expDateView: {
    marginLeft: 24,
  },
  expDate: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 12,
    color: colors.while,
    opacity: 0.8,
    textTransform: 'uppercase',
  },
  txtExpDate: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: colors.while,
    textTransform: 'uppercase',
    marginTop: 5,
  },
  cvvView: {
    marginRight: 52,
  },
  CVV: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 12,
    color: colors.while,
    opacity: 0.8,
    textTransform: 'uppercase',
  },
  txtCVV: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: colors.while,
    textTransform: 'uppercase',
    marginTop: 5,
  },
  txtNumber: {
    fontFamily: FONTS.DINCondensed.Bold,
    fontSize: 28,
    lineHeight: 34,
    color: colors.while,
  },
  dotsView: {
    flexDirection: 'row',
    marginHorizontal: 27,
    marginTop: 39,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  setRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
});
