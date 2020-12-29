import React, {memo, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FONTS from'app/ultis/fonts';
import ROUTES from 'app/ultis/routes';
import {useNavigation} from '@react-navigation/native';

interface PropsOrderDetails {
  numberChoose?: number;
  time?: string;
  money?: string;
  svgNameLeftTop: any;
  svgNameLeftBottom: any;
  svgNameRightTop: any;
  svgNameRightBottom: any;
}

const itemOrderDetail = {
  boxSize: 'Classic Plan - For 2',
  deliveryDate: '8:00 AM - 7:00 PM Th',
  nameReceiver: 'Julia Andrews',
  address: '7100 Athens Place, Q',
  phoneNumber: '426-980-0043',
  instruction: 'Front Potch',
  recipesCost: 34.25,
  delivery: 'Free',
  discount: -4.25,
  walaPoint: -2.5,
  total: 27.5,
};

const PlanOrder = memo((props: PropsOrderDetails) => {
  const navigation = useNavigation();

  const showOrderDetail = useCallback(() => {
    navigation.navigate(ROUTES.OrderDetail, {itemOrderDetail: itemOrderDetail});
  }, [navigation]);
  return (
    <TouchableOpacity style={styles.container} onPress={showOrderDetail}>
      <View style={styles.viewHeader}>
        <View style={styles.flexDirection}>
          <View style={styles.paddingRight}>
            {props.svgNameLeftTop ? (
              props.svgNameLeftTop
            ) : (
              <View style={styles.dashBorder}></View>
            )}
          </View>
          <View>
            {props.svgNameLeftBottom ? (
              props.svgNameLeftBottom
            ) : (
              <View style={styles.dashBorder}></View>
            )}
          </View>
        </View>
        <View style={styles.flexAndPadding}>
          <View style={styles.paddingRight}>
            {props.svgNameRightTop ? (
              props.svgNameRightTop
            ) : (
              <View style={styles.dashBorder}></View>
            )}
          </View>
          {props.svgNameRightBottom ? (
            props.svgNameRightBottom
          ) : (
            <View style={styles.dashBorder}></View>
          )}
        </View>
      </View>
      <View>
        <Text style={styles.textHeader}>{props.time}</Text>
        <Text style={styles.textContent}>
          {' '}
          {`${props.numberChoose} recipes chosen`}
        </Text>
        <Text style={styles.textFooter}> {props.money}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default PlanOrder;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginBottom: 17,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 12,
    shadowColor: 'rgba(141, 151, 158, 0.8)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  viewHeader: {
    padding: 16,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  flexAndPadding: {
    flexDirection: 'row',
    paddingTop: 4,
  },
  paddingRight: {
    paddingRight: 4,
  },
  textHeader: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 14,
    paddingTop: 16,
  },
  textContent: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    color: '#7D8699',
    paddingTop: 9,
  },
  textFooter: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    fontWeight: '500',
    color: '#7D8699',
    paddingTop: 9,
  },
  dashBorder: {
    height: 32,
    width: 32,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderStyle: 'dashed',
    borderRadius: 8,
  },
});
