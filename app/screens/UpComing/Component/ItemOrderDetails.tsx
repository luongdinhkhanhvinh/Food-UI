import React, {memo, useCallback} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import SvgClock from 'app/svgs/Login/SvgClock';
import SvgCaloriess from 'app/svgs/Login/SvgCalories';
import InactiveRate from'app/components/InactiveRate';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FONTS from'app/ultis/fonts';

interface PropsOrderDetails {
  img: any;
  nameOrder: string;
  rate: number;
  reviews: number;
  time: number;
  cal: number;
  onPress: () => void;
}

const ItemOrderDetails = memo((props: PropsOrderDetails) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image style={styles.img} source={props.img} />
      <Text style={styles.textNameOrder}>{props.nameOrder}</Text>
      <View style={styles.viewRate}>
        <InactiveRate rate={props.rate} />
        <Text style={styles.textReview}>{`${props.reviews} reviews`}</Text>
      </View>
      <View style={styles.viewFooter}>
        <View style={styles.flexDirection}>
          <SvgClock />
          <Text style={styles.textBold}> {props.time}</Text>
          <Text style={styles.textNormal}> mins </Text>
        </View>
        <View style={styles.flexDirection}>
          <SvgCaloriess />
          <Text style={styles.textBold}> {props.cal} </Text>
          <Text style={styles.textNormal}> cal/serving</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default ItemOrderDetails;

const styles = StyleSheet.create({
  container: {
    width: 248,
    backgroundColor: '#FFFFFF',
    marginRight: 16,
    borderRadius: 12,
    shadowColor: 'rgba(141, 151, 158, 0.2)',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.56,
    shadowRadius: 18,
  },
  img: {
    width: 248,
    height: 179,
  },
  textNameOrder: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 8,
    paddingLeft: 16,
  },
  viewRate: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingLeft: 16,
  },
  textReview: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 12,
    fontWeight: '500',
    paddingLeft: 8,
  },
  viewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  textBold: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 12,
    fontWeight: '500',
    paddingLeft: 4,
  },
  textNormal: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 12,
    fontWeight: '400',
  },
});
