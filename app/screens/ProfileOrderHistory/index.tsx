import React, {memo, useCallback} from 'react';
import {View, StyleSheet, Dimensions, FlatList} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

import keyExtractor from 'app/ultis/KeyExtractor';
import Nodata from'app/components/NoData';
import SvgNodata from'app/svgs/SvgNodataHistory';
import OrderHistory from'app/screens/ProfileOrderHistory/Component/OrderHistory';
import ButtonLinear from'app/components/ButtonLinear';
import SvgOrderSmaill from'app/svgs/Login/SvgOrderSmaill';
import SvgOrderSmall2 from'app/svgs/Login/SvgOrderSmall2';
import SvgOrderSmall3 from'app/svgs/Login/SvgOrderSmall3';
import SvgOrderSmall4 from'app/svgs/Login/SvgOrderSmall4';
import SvgOrderSmail5 from'app/svgs/Login/SvgOrderSmail5';
import FONTS from'app/ultis/fonts';

const {height} = Dimensions.get('window');

const Nodata1 = null;

const data = [
  {
    time: 'Fri, 6 Feb 8:00-7:00',
    numberChoose: 4,
    money: '$34.48',
    status: 'onway',
    svgNameLeftTop: <SvgOrderSmail5 />,
    svgNameLeftBottom: <SvgOrderSmall2 />,
    svgNameRightTop: <SvgOrderSmall4 />,
    svgNameRightBottom: null,
  },
  {
    time: 'Fri, 1 Feb 8:00-7:00PM',
    numberChoose: 4,
    money: '$29.32',
    status: 'cancel',
    svgNameLeftTop: <SvgOrderSmall2 />,
    svgNameLeftBottom: <SvgOrderSmaill />,
    svgNameRightTop: <SvgOrderSmall4 />,
    svgNameRightBottom: null,
  },
  {
    time: 'Thu, 24 Jan 8:00-7:00PM',
    numberChoose: 4,
    money: '$29.32',
    status: 'delivered',
    svgNameLeftTop: <SvgOrderSmaill />,
    svgNameLeftBottom: <SvgOrderSmall2 />,
    svgNameRightTop: <SvgOrderSmall4 />,
    svgNameRightBottom: <SvgOrderSmall3 />,
  },
  {
    time: 'Thu, 18 Jan 8:00-7:00PM',
    numberChoose: 4,
    money: '$29.32',
    status: 'delivered',
    svgNameLeftTop: <SvgOrderSmaill />,
    svgNameLeftBottom: <SvgOrderSmall2 />,
    svgNameRightTop: <SvgOrderSmall4 />,
    svgNameRightBottom: <SvgOrderSmail5 />,
  },
  {
    time: 'Tue, 15 Jan 8:00-7:00PM',
    numberChoose: 4,
    money: '$29.32',
    status: 'delivered',
    svgNameLeftTop: <SvgOrderSmaill />,
    svgNameLeftBottom: <SvgOrderSmall2 />,
    svgNameRightTop: <SvgOrderSmall4 />,
    svgNameRightBottom: <SvgOrderSmail5 />,
  },
];

const ProfileOrderHistoryDetail = memo(() => {
  const renderItem = useCallback(({item}) => {
    return (
      <OrderHistory
        time={item.time}
        numberChoose={item.numberChoose}
        money={item.money}
        status={item.status}
        svgNameLeftTop={item.svgNameLeftTop}
        svgNameLeftBottom={item.svgNameLeftBottom}
        svgNameRightTop={item.svgNameRightTop}
        svgNameRightBottom={item.svgNameRightBottom}
      />
    );
  }, []);

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={styles.backgroundColor}
        ListEmptyComponent={
          <Nodata
            svgName={<SvgNodata />}
            title={'view all recipes '}
            nameButton={'view all recipes'}
            content={'Explorer menu and get a first cook.'}
          />
        }
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentStyle}
      />
      {!data ? (
        <View />
      ) : (
        <View style={styles.viewButton}>
          <ButtonLinear
            onPress={() => {}}
            title={'Start with new box'}
            style={styles.btn}
          />
        </View>
      )}
    </>
  );
});

export default ProfileOrderHistoryDetail;

const styles = StyleSheet.create({
  contentStyle: {
    paddingTop: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  viewButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    color: '#ffff',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 24,
  },
  header: {
    width: '100%',
    height: height / 3,
  },
  texBold: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 16,
    fontWeight: '500',
  },
  width: {
    width: '70%',
    paddingTop: 16,
  },
  ViewBox: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  textBox: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 16,
    fontWeight: '500',
  },
  textBox1: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    paddingTop: 4,
  },
  textBox2: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 15,
    fontWeight: '500',
  },
  containerServing: {
    paddingLeft: 24,
    paddingVertical: 24,
  },
  img: {
    paddingTop: 16,
  },
  containerOrderDetail: {
    width: '100%',
    flexDirection: 'row',
  },
  nameOrder: {
    alignItems: 'center',
    paddingLeft: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '80%',
  },
  textNameOrder: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    fontWeight: '500',
    paddingRight: 16,
  },
  viewNameOrder: {
    justifyContent: 'center',
    width: '80%',
  },
  textServing: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 12,
    color: '#7D8699',
    paddingTop: 8,
  },
  textBoxSize: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textBoxSize1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
  },
  textColor: {
    paddingTop: 15,
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    color: '#FE9870',
  },
  textNormal: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
  },
  footer: {
    borderRadius: 25,
    marginHorizontal: 16,
    marginTop: 39,
  },
  textFooter: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
    paddingVertical: 16,
  },
  touchableOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textHeaderContent: {
    paddingTop: 32,
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 48,
    textAlign: 'center',
    color: '#ffff',
  },
  backHeader: {
    position: 'absolute',
    paddingTop: 54,
    zIndex: 1,
    left: 16,
  },
  viewHeaderTitel: {
    flexDirection: 'row',
    paddingTop: 54,
    justifyContent: 'center',
  },
  textTitle: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  btn: {
    width: '90%',
    paddingBottom: getBottomSpace() + 8,
  },
  backgroundColor: {
    backgroundColor: '#F7F7FB',
  },
});
