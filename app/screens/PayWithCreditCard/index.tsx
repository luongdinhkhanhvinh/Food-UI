import React, { memo, useCallback, useState } from 'react';
import { FlatList, LayoutAnimation, StyleSheet, Text, View } from 'react-native';
import PaymentMethodItem from'app/screens/PaymentMethod/components/PaymentMethodItem';
import SvgMasterCard from 'app/svgs/PayWithCreditCard/SvgMasterCard';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import SvgVisa from 'app/svgs/PayWithCreditCard/SvgVisa';
import SvgAmex from 'app/svgs/PayWithCreditCard/SvgAmex';
import SvgNoCreditCard from 'app/svgs/PaymentMethod/SvgNoCreditCard';
import { heightScreen } from 'app/ultis/layout';
import FONTS from'app/ultis/fonts';
import { useHeaderHeight } from '@react-navigation/stack';
import ButtonLinear from'app/components/ButtonLinear';
import PanAddressItem from'app/screens/SelectDeliveryAddress/components/PanAddressItem';
import { useNavigation } from '@react-navigation/native';
import ROUTES from'app/ultis/routes';

const creditCards = [
  {
    id: '1',
    title: 'Master Card',
    cardNumber: 'xxxx - xxxx - xxxx - 5689',
    num: 1,
    svg: <SvgMasterCard />,
  },
  {
    id: '2',
    title: 'Visa Master',
    cardNumber: 'xxxx - xxxx - xxxx - 6497',
    num: 2,
    svg: <SvgVisa />,
  },
  {
    id: '3',
    title: 'Master Card',
    cardNumber: 'xxxx - xxxx - xxxx - 8973',
    num: 3,
    svg: <SvgMasterCard />,
  },
  {
    id: '4',
    title: 'American Express',
    cardNumber: 'xxxx - xxxx - xxxx - 1346',
    num: 4,
    svg: <SvgAmex />,
  },
];

const PayWithCreditCard = memo(() => {
  const headerHeight = useHeaderHeight();
  const navigation = useNavigation();
  const stylesEmpty = { height: heightScreen - headerHeight };
  const [isChecked, setChecked] = useState();
  const [credits, setList] = useState(creditCards);
  const onDelete = useCallback(
    (id) => {
      if (id === isChecked) {
        setChecked('-1');
      }
      const index = credits.findIndex((item) => item.id === id);
      if (index >= 0) {
        credits.splice(index, 1);
      }
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          200,
          LayoutAnimation.Types.linear,
          LayoutAnimation.Properties.opacity,
        ),
      );

      setList([...credits]);
    },
    [credits, isChecked],
  );

  const onSelect = useCallback((num) => {
    setChecked(num);
  }, []);

  const onConfirm = useCallback(() => {
    navigation.setParams({ step: null });
    navigation.navigate(ROUTES.OrderCompleted);
  }, [navigation]);

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <PanAddressItem
          addressName={item.addressName}
          addressDetail={item.addressDetail}
          isCheck={item.id === isChecked}
          num={item.id}
          onDelete={onDelete}
          onEdit={() => {}}>
          <PaymentMethodItem
            title={item.title}
            content={item.cardNumber}
            isChecked={item.id === isChecked}
            num={item.id}
            onSelect={onSelect}
            isCredit={true}>
            {item.svg}
          </PaymentMethodItem>
        </PanAddressItem>
      );
    },
    [onDelete, isChecked, onSelect],
  );

  const onAddCard = useCallback(() => {
    navigation.navigate(ROUTES.AddNewCard, { step: 3 });
  }, [navigation]);

  const renderEmpty = useCallback(() => {
    return (
      <View style={[styles.emptyContainer, stylesEmpty]}>
        <View style={styles.emptyView}>
          <SvgNoCreditCard />
          <Text style={styles.txtNoCard}>No Card yet,</Text>
          <Text style={styles.txtAdd}>start adding now!</Text>
        </View>
        <View style={styles.btnView}>
          <ButtonLinear
            title={'Add new'}
            onPress={onAddCard}
            style={styles.btnEmptyStyle}
          />
        </View>
      </View>
    );
  }, [onAddCard, stylesEmpty]);

  return (
    <View style={styles.container}>
      <FlatList
        data={credits}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={styles.contentStyle}
      />
      {isChecked && isChecked !== '-1' ? (
        <ButtonLinear
          title={'Completed Order for $27.5'}
          onPress={onConfirm}
          style={styles.btnBtm}
        />
      ) : null}
    </View>
  );
});
export default PayWithCreditCard;

const styles = StyleSheet.create({
  btnBtm: {
    position: 'absolute',
    marginHorizontal: 16,
    bottom: getBottomSpace() + 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7FB',
    paddingHorizontal: 16,
  },
  contentStyle: {
    paddingTop: 16,
    paddingBottom: getBottomSpace() + 70,
  },
  btnStyle: {
    width: '100%',
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 24,
  },
  txtNoCard: {
    fontSize: 16,
    lineHeight: 28,
    fontFamily: FONTS.Montserrat.Medium,
    color: '#1D1E2C',
    marginTop: 64,
    textAlign: 'center',
  },
  txtAdd: {
    fontSize: 12,
    lineHeight: 28,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
    textAlign: 'center',
  },
  btnView: {
    flex: 1,
  },
  btnEmptyStyle: {
    width: 240,
  },
  separator: {
    height: 16,
  },
});
