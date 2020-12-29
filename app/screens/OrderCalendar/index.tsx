import React, {memo, useState, useCallback} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SvgOrderSmaill from 'app/svgs/Login/SvgOrderSmaill';
import SvgOrderSmall2 from 'app/svgs/Login/SvgOrderSmall2';
import SvgOrderSmall3 from 'app/svgs/Login/SvgOrderSmall3';
import SvgOrderSmall4 from 'app/svgs/Login/SvgOrderSmall4';
import SvgOrderSmail5 from 'app/svgs/Login/SvgOrderSmail5';
import SvgArrowColor from 'app/svgs/SvgArrowColor';
import PlanOrder from '../UpComing/Component/PlanOrder';
import keyExtractor from 'app/ultis/KeyExtractor';
import FONTS from'app/ultis/fonts';
import colors from 'app/ultis/colors';
import ButtonLinear from'app/components/ButtonLinear';
import Calendar from'app/screens/OrderCalendar/Components/Calendar';

const data = [
  {
    time: 'Fri, 6 Feb 8:00-7:00',
    numberChoose: 4,
    svgNameLeftTop: <SvgOrderSmail5 />,
    svgNameLeftBottom: <SvgOrderSmall2 />,
    svgNameRightTop: <SvgOrderSmall4 />,
    svgNameRightBottom: null,
    money: '$34.48',
  },
];
const data1 = [
  {
    time: 'Fri, 6 Feb 8:00-7:00',
    numberChoose: 4,
    svgNameLeftTop: <SvgOrderSmaill />,
    svgNameLeftBottom: <SvgOrderSmall2 />,
    svgNameRightTop: <SvgOrderSmall4 />,
    svgNameRightBottom: <SvgOrderSmall3 />,
    money: '$34.48',
  },
];
const data2 = [
  {
    time: 'Fri, 6 Feb 8:00-7:00',
    numberChoose: 4,
    svgNameLeftTop: <SvgOrderSmaill />,
    svgNameLeftBottom: <SvgOrderSmall2 />,
    svgNameRightTop: null,
    svgNameRightBottom: null,
    money: '$34.48',
  },
];

const dataDate = [
  {
    day: 16,
    month: 7,
    year: 2020,
    dateString: '2020-07-16',
    data: data,
  },
  {
    day: 18,
    month: 7,
    year: 2020,
    dateString: '2020-07-18',
    data: data1,
  },
  {
    day: 19,
    month: 7,
    year: 2017,
    dateString: '2020-07-19',
    data: data2,
  },
];
const OrderCalendar = memo(() => {
  const _renderItem = useCallback(({item}) => {
    return (
      <PlanOrder
        time={item.time}
        numberChoose={item.numberChoose}
        money={item.money}
        svgNameLeftTop={item.svgNameLeftTop}
        svgNameLeftBottom={item.svgNameLeftBottom}
        svgNameRightTop={item.svgNameRightTop}
        svgNameRightBottom={item.svgNameRightBottom}
      />
    );
  }, []);

  const navigation = useNavigation();
  const onBack = useCallback(() => {
    navigation.navigate('Upcoming');
  }, [navigation]);
  const [markedDates, setMarkedDates] = useState('');
  const [newData, setNewData] = useState('');
  const [isActive, setInActive] = useState(false);

  const dateHasOrder = dataDate.map((item) => {
    return item.dateString;
  });
  return (
    <View style={styles.flex}>
      <View style={styles.header} />
      <TouchableOpacity style={styles.viewHeader} onPress={onBack}>
        <SvgArrowColor />
      </TouchableOpacity>
      <FlatList
        data={newData}
        ListHeaderComponent={
          <Calendar
            dataDate={dataDate}
            setMarkedDates={setMarkedDates}
            setNewData={setNewData}
            setInActive={setInActive}
            markedDates={markedDates}
            dateHasOrder={dateHasOrder}
            isActive={isActive}
          />
        }
        contentContainerStyle={{
          backgroundColor: '#F7F7FB',
        }}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        ListEmptyComponent={
          <View style={styles.viewFooter}>
            <Text style={styles.textFooterBold}>No order yet</Text>
            <Text style={styles.textNormalFooter}>
              Explorer menu and get a cook now.
            </Text>
            <ButtonLinear
              onPress={() => {}}
              title={'Get Cooking'}
              style={styles.btn}
            />
          </View>
        }
      />
    </View>
  );
});

export default OrderCalendar;

const styles = StyleSheet.create({
  textFooterBold: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 16,
  },
  textNormalFooter: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 16,
    paddingTop: 8,
  },
  footer: {
    borderRadius: 25,
    marginHorizontal: 16,
    marginTop: 39,
  },
  touchableOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textFooter: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 70,
  },
  flex: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  viewHeader: {
    height: 44,
    justifyContent: 'center',
    paddingVertical: 13,
    paddingLeft: 16,
    backgroundColor: '#ffff',
  },
  borderRadius: {
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    shadowColor: 'rgba(141, 151, 158, 0.2)',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16,
  },
  viewFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 56,
  },
  btn: {
    width: '65%',
    borderRadius: 25,
    paddingTop: 39,
  },
  header: {
    height: 44,
    backgroundColor: '#ffff',
  },
});
