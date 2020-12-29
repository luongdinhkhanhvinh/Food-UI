import React, {memo, useCallback, useRef, useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import RecipeItem from'app/screens/BoxSummary/components/RecipeItem';
import FONTS from'app/ultis/fonts';
import ButtonLinear from'app/components/ButtonLinear';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import CheckLine from'app/components/CheckLine';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';

const inTheBoxList = [
  {
    id: '0',
    name: 'Chicken Fajitas With Seeded Tortilla Wraps & Salsa',
    img: require('app/assets/BoxSummary/img.png'),
    numServing: 2,
  },
  {
    id: '1',
    img: require('app/assets/BoxSummary/img-1.png'),
    name: 'Harissa Sweet Potato Pita Pockets',
    numServing: 2,
  },
  {
    id: '2',
    img: require('app/assets/BoxSummary/img-2.png'),
    name: 'Sirloin with Chive Butter Sauce',
    numServing: 2,
  },
];

const BoxSummary = memo(() => {
  const [offsetYInput, setOffset] = useState(0);
  const listRef = useRef();
  const navigation = useNavigation();
  const _renderItem = useCallback(({item}) => {
    return (
      <RecipeItem
        img={item.img}
        numServing={item.numServing}
        recipeName={item.name}
      />
    );
  }, []);

  const _renderHeader = useCallback(() => {
    return <Text style={styles.txtTitle}>In The Box</Text>;
  }, []);

  const [isCheck, setCheck] = useState(false);

  const onChange = useCallback(() => {}, []);
  const onConfirm = useCallback(() => {
    navigation.navigate(ROUTES.Checkout_SelectDeliveryAddress, {
      isNext: true,
      step: 1,
    });
  }, [navigation]);
  const onApply = useCallback(() => {}, []);
  const onCheck = useCallback(() => {
    setCheck(!isCheck);
  }, [isCheck]);

  const onLayoutInput = useCallback((event) => {
    const layout = event.nativeEvent.layout;
    console.log('layout', layout);
    setOffset(layout.y);
  }, []);
  const onFocus = useCallback(() => {
    console.log('offsetYInput', offsetYInput);

    listRef.current.scrollToOffset({offset: offsetYInput, animated: true});
  }, [listRef, offsetYInput]);

  const _renderFooter = useCallback(() => {
    return (
      <View style={styles.containerFooter}>
        <Text style={styles.txtTitle}>Box Size</Text>
        <View style={styles.contentTxt}>
          <Text style={styles.txtContent}>Classic Plan - For 2 people</Text>
          <Text
            style={[styles.txtContent, {color: '#FE9870'}]}
            onPress={onChange}>
            Change
          </Text>
        </View>
        <Text style={[styles.txtTitle, {marginTop: 35}]}>Delivery Date</Text>
        <View style={styles.contentTxt}>
          <Text style={styles.txtContent}>8:00 AM - 7:00 PM Thu, 5 Feb</Text>
          <Text
            style={[styles.txtContent, {color: '#FE9870'}]}
            onPress={onChange}>
            Change
          </Text>
        </View>
        <CheckLine
          isCheck={isCheck}
          onCheck={onCheck}
          title={'Use 2500 point (~ $2.5)'}
        />
        <Text style={[styles.txtContent, {marginTop: 33}]}>Discount Code</Text>
        <View style={styles.discount} onLayout={onLayoutInput}>
          <TextInput
            placeholder={'Discount Code'}
            style={styles.txtInput}
            onFocus={onFocus}
            value={'WALAVALENTINE19'}
          />
          <Text
            style={[styles.txtTitle, {color: '#FE9870', marginBottom: 0}]}
            onPress={onApply}>
            APPLY
          </Text>
        </View>
        <Text style={[styles.txtTitle, {marginTop: 40}]}>Order Summary</Text>
        <View style={styles.summary}>
          <Text style={styles.txtContent}>Recipes Cost</Text>
          <Text style={styles.txtContent}>$34.25</Text>
        </View>
        <View style={styles.summary}>
          <Text style={styles.txtContent}>Delivery</Text>
          <Text style={styles.txtContent}>Free</Text>
        </View>
        <View style={styles.summary}>
          <Text style={styles.txtContent}>Discount</Text>
          <Text style={styles.txtContent}>- $4.25</Text>
        </View>
        <View style={styles.summary}>
          <Text style={styles.txtContent}>Wala Point</Text>
          <Text style={styles.txtContent}>- $2.5</Text>
        </View>
        <View style={styles.summary}>
          <Text style={styles.txtTotal}>Total</Text>
          <Text style={styles.txtTotal}>$27.5</Text>
        </View>
      </View>
    );
  }, [onFocus, onApply, onChange, onCheck, isCheck, onLayoutInput]);
  return (
    <View style={styles.container}>
      <FlatList
        ref={listRef}
        data={inTheBoxList}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={_renderHeader}
        ListFooterComponent={_renderFooter}
        contentContainerStyle={styles.listContainer}
      />
      <ButtonLinear
        title={'Confirm Delivery Address'}
        onPress={onConfirm}
        style={styles.btnBtm}
      />
    </View>
  );
});

export default BoxSummary;

const styles = StyleSheet.create({
  txtTitle: {
    marginBottom: 15,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: FONTS.Montserrat.Medium,
    color: '#1D1E2C',
  },
  contentTxt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  txtContent: {
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
  },
  unCheck: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#82D84E',
    backgroundColor: '#E5E5E5',
  },
  txtInput: {
    flex: 1,
    color: '#1D1E2C',
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Medium,
  },
  discount: {
    height: 50,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 17,
  },
  txtTotal: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: FONTS.Montserrat.Medium,
    color: '#1D1E2C',
  },
  btnBtm: {
    paddingHorizontal: 24,
    position: 'absolute',
    bottom: getBottomSpace() + 8,
  },
  listContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: getBottomSpace() + 58,
  },
  check: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerFooter: {
    marginTop: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
