import React, {memo, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import ItemOrderDetails from './Component/ItemOrderDetails';
import PlanOrder from '../UpComing/Component/PlanOrder';
import OrderCompleteDetail from './Component/OrderCompleteDetail';
import SvgOrderSmaill from 'app/svgs/Login/SvgOrderSmaill';
import SvgOrderSmall2 from 'app/svgs/Login/SvgOrderSmall2';
import SvgOrderSmall3 from 'app/svgs/Login/SvgOrderSmall3';
import SvgOrderSmall4 from 'app/svgs/Login/SvgOrderSmall4';
import SvgOrderSmail5 from 'app/svgs/Login/SvgOrderSmail5';
import SvgIconArrowRight from 'app/svgs/Login/SvgIconArrowRight';
import keyExtractor from 'app/ultis/KeyExtractor';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {widthScreen} from 'app/ultis/layout';
import FONTS from'app/ultis/fonts';
import SvgFeatureRecipe from 'app/svgs/SvgFeatureRecipe';
import ROUTES from 'app/ultis/routes';

const data = [
  {
    id: 0,
    source: require('app/assets/UpComing/OrderHeader.png'),
  },
  {
    id: 1,
    source: require('app/assets/UpComing/OrderHeader.png'),
  },
  {
    id: 2,
    source: require('app/assets/UpComing/OrderHeader.png'),
  },
  {
    id: 3,
    source: require('app/assets/UpComing/OrderHeader.png'),
  },
];

const dataOrderDelivery = [
  {
    img: require('app/assets/UpComing/img_recipe.png'),
    nameOrder: 'Chicken Fajitas With Seeded Tortilla Wraps & Salsa',
    rate: 4.5,
    reviews: 4.5,
    time: 15,
    cal: 234,
  },
  {
    img: require('app/assets/UpComing/img_recipe.png'),
    nameOrder: 'Chicken Fajitas With Seeded Tortilla Wraps & Salsa',
    rate: 4.5,
    reviews: 4.5,
    time: 15,
    cal: 234,
  },
  {
    img: require('app/assets/UpComing/img_recipe.png'),
    nameOrder: 'Chicken Fajitas With Seeded Tortilla Wraps & Salsa',
    rate: 4.5,
    reviews: 4.5,
    time: 15,
    cal: 234,
  },
];

const OrderPlan = [
  {
    id: 0,
    time: 'Fri, 6 Feb 8:00-7:00',
    numberChoose: 4,
    money: '$34.48',
    svgNameLeftTop: <SvgOrderSmaill />,
    svgNameLeftBottom: <SvgOrderSmall2 />,
    svgNameRightTop: <SvgOrderSmall3 />,
    svgNameRightBottom: <SvgOrderSmall4 />,
  },
  {
    id: 1,
    time: 'Fri, 6 Feb 8:00-7:00',
    numberChoose: 4,
    money: '$34.48',
    svgNameLeftTop: <SvgOrderSmaill />,
    svgNameLeftBottom: <SvgOrderSmall2 />,
    svgNameRightTop: <SvgOrderSmall3 />,
    svgNameRightBottom: <SvgOrderSmall4 />,
  },
];

const OrderComplete = [
  {
    time: 'Fri, 6 Feb 8:00-7:00',
    numberChoose: '4 recipes chosen',
    svgNameLeftTop: <SvgOrderSmaill />,
    svgNameLeftBottom: <SvgOrderSmall2 />,
    svgNameRightTop: null,
    svgNameRightBottom: null,
  },
  {
    time: 'Fri, 6 Feb 8:00-7:00',
    numberChoose: '4 recipes chosen',
    svgNameLeftTop: <SvgOrderSmaill />,
    svgNameLeftBottom: <SvgOrderSmall2 />,
    svgNameRightTop: <SvgOrderSmail5 />,
    svgNameRightBottom: null,
  },
];

const UpComing = memo(() => {
  const navigation = useNavigation();
  const showOrderDetail = useCallback(() => {
    navigation.navigate(ROUTES.RecipeDetail, {
      IsExplorer: true,
    });
  }, [navigation]);
  const _renderItemPlanOrder = useCallback(({item}) => {
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

  const _renderItemOrderCompelete = useCallback(({item}) => {
    return (
      <OrderCompleteDetail
        time={item.time}
        numberChoose={item.numberChoose}
        svgNameLeftTop={item.svgNameLeftTop}
        svgNameLeftBottom={item.svgNameLeftBottom}
        svgNameRightTop={item.svgNameRightTop}
        svgNameRightBottom={item.svgNameRightBottom}
      />
    );
  }, []);

  const _renderItemOrderDelivery = useCallback(
    ({item}) => {
      return (
        <ItemOrderDetails
          img={item.img}
          nameOrder={item.nameOrder}
          rate={item.rate}
          reviews={item.reviews}
          time={item.time}
          cal={item.cal}
          onPress={showOrderDetail}
        />
      );
    },
    [showOrderDetail],
  );

  const renderHeader = useCallback(() => {
    return (
      <View>
        <Swiper
          style={{ height: widthScreen / 375 * 200 }}
          dotColor={'rgba(255, 254, 250, 0.5)'}
          activeDotColor={'#ffff'}>
          {data.map((item, index) => {
            return (
              <Image
                style={{ width: widthScreen, height: widthScreen / 375 * 200 }}
                source={item.source}
                key={index}
              />
            );
          })}
        </Swiper>
        <View style={styles.label}>
          <SvgFeatureRecipe />
        </View>
        <Text style={styles.textUpcomingDelivery}>Upcoming Delivery</Text>
        <View style={styles.viewOrderDetail}>
          <Text style={styles.textTimeOrderDetai}>Thu, 5 Feb 8:00-7:00</Text>
          <TouchableOpacity style={styles.flexDirection}>
            <Text style={styles.textColor}> View Detail</Text>
            <SvgIconArrowRight />
          </TouchableOpacity>
        </View>
        <FlatList
          data={dataOrderDelivery}
          renderItem={_renderItemOrderDelivery}
          showsHorizontalScrollIndicator={false}
          keyExtractor={keyExtractor}
          horizontal={true}
          style={styles.viewScrollView}
        />
        <Text style={styles.textDelivery}>Delivery Schedule</Text>
        <View style={styles.viewPlan}>
          <Text style={styles.textPlan}>You have 6 next plan</Text>
          <TouchableOpacity style={styles.flexDirection}>
            <Text style={styles.textColor}> View All</Text>
            <SvgIconArrowRight />
          </TouchableOpacity>
        </View>
      </View>
    );
  }, [_renderItemOrderDelivery]);

  const renderFooter = useCallback(() => {
    return (
      <View>
        <Text style={styles.textDelivery}>Uncomplete Orders</Text>
        <View style={styles.viewPlan}>
          <Text style={styles.textPlan}>You have 2 order</Text>
        </View>
        <FlatList
          data={OrderComplete}
          renderItem={_renderItemOrderCompelete}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
        />
      </View>
    );
  }, [_renderItemOrderCompelete]);

  return (
    <View style={styles.flex}>
      <FlatList
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        data={OrderPlan}
        renderItem={_renderItemPlanOrder}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        contentContainerStyle={{paddingBottom: 24, backgroundColor: '#F7F7FB'}}
        bounces={false}
      />
    </View>
  );
});

export default UpComing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  flex: {
    flex: 1,
  },
  textUpcomingDelivery: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 16,
    color: '#1D1E2C',
    fontWeight: '500',
    paddingTop: 24,
    paddingLeft: 16,
  },
  viewOrderDetail: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 7,
    paddingRight: 20,
    paddingLeft: 16,
  },
  textTimeOrderDetai: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#FE9870',
    fontSize: 14,
    fontFamily: 'Montserrat',
  },
  viewScrollView: {
    flexWrap: 'wrap',
    paddingLeft: 16,
    paddingTop: 17,
  },
  textDelivery: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 16,
    color: '#1D1E2C',
    fontWeight: '500',
    paddingTop: 40,
    paddingLeft: 16,
  },
  viewPlan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
    paddingRight: 20,
    paddingLeft: 16,
  },
  textPlan: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    marginBottom: 17,
  },
  height: {
    height: 50,
  },
  label: {
    position: 'absolute',
    top: 24,
    right: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
