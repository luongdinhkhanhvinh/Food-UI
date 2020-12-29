import React, {memo, useCallback, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import PaymentMethodItem from'app/screens/PaymentMethod/components/PaymentMethodItem';
import SvgPickUp from 'app/svgs/PaymentMethod/SvgPickUp';
import SvgCash from 'app/svgs/PaymentMethod/SvgCash';
import SvgCreditCard from 'app/svgs/PaymentMethod/SvgCreditCard';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import ButtonLinear from'app/components/ButtonLinear';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';

const paymentMethods = [
  {
    id: '1',
    title: 'Pickup Myself',
    content: 'Lorem ipsum dolor sit amet.',
    svg: <SvgPickUp />,
    num: 1,
  },
  {
    id: '2',
    title: 'Cash on Delivery',
    content: 'Sed dictum lacus non quam.',
    svg: <SvgCash />,
    num: 2,
  },
  {
    id: '3',
    title: 'Pay with Credit Card',
    content: 'Vivamus non posuere diam.',
    svg: <SvgCreditCard />,
    num: 3,
  },
];

const PaymentMethod = memo(() => {
  const [isChecked, setChecked] = useState(0);
  const navigation = useNavigation();
  const onSelect = useCallback((num) => {
    setChecked(num);
  }, []);
  const renderItem = useCallback(
    ({item}) => {
      return (
        <PaymentMethodItem
          title={item.title}
          content={item.content}
          onSelect={onSelect}
          num={item.num}
          isChecked={item.num === isChecked}>
          {item.svg}
        </PaymentMethodItem>
      );
    },
    [onSelect, isChecked],
  );
  const renderSeparator = useCallback(() => {
    return <View style={styles.separator} />;
  }, []);

  const onConfirm = useCallback(() => {
    navigation.navigate(ROUTES.SelectCreditCard, {step: 3});
  }, [navigation]);

  let txtBtn = '';
  if (isChecked === 1) {
    txtBtn = 'Select Pickup Myself';
  }
  if (isChecked === 2) {
    txtBtn = 'Select CoD';
  }
  if (isChecked === 3) {
    txtBtn = 'Select Credit Card';
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={paymentMethods}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={styles.contentStyle}
      />
      {txtBtn !== '' ? (
        <ButtonLinear
          title={txtBtn}
          onPress={onConfirm}
          style={styles.btnBtm}
          styleLinear={styles.btnStyle}
        />
      ) : null}
    </View>
  );
});
export default PaymentMethod;

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
  separator: {
    height: 16,
  },
});
