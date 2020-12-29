import { memo, useCallback, useState } from 'react';
import { FlatList, StyleSheet, View, LayoutAnimation } from 'react-native';
import React from 'react';
import PanAddressItem from 'app/screens/SelectDeliveryAddress/components/PanAddressItem';
import ButtonLinear from 'app/components/ButtonLinear';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import ROUTES from 'app/ultis/routes';
import { useNavigation } from '@react-navigation/native';

const addressData = [
  {
    id: '0',
    addressName: 'Home',
    addressDetail: '7100 Athens Place, Quebec, DC',
  },
  {
    id: '1',
    addressName: 'GrandMother Home',
    addressDetail: '4496 Sabina Heights Suite 546',
  },
  {
    id: '2',
    addressName: 'Summer Home',
    addressDetail: '86 Russel Mills Suite 250 ',
  },
  {
    id: '3',
    addressName: 'Parent Home',
    addressDetail: '816 Brown Run Suite 702',
  },
];

const SelectDeliveryAddress = memo(() => {
  const navigation = useNavigation();
  const [addresses, setList] = useState(addressData);
  const [numCheck, setCheck] = useState();
  const onCheck = useCallback((id) => {

    setCheck(id);
  }, []);
  const onDelete = useCallback(
    (id) => {
      console.log('id, numCheck', id, numCheck)
      if (id === numCheck) {
        setCheck('-1');
      }
      const index = addresses.findIndex((item) => item.id === id);
      if (index >= 0) {
        addresses.splice(index, 1);
      }
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          200,
          LayoutAnimation.Types.linear,
          LayoutAnimation.Properties.opacity,
        ),
      );
      setList([...addresses]);

    },
    [addresses, numCheck],
  );
  const onConfirm = useCallback(() => {
    navigation.navigate(ROUTES.PersonalInformation, {
      isNext: true,
      step: 2,
    });
  }, [navigation]);

  const _renderAddressItem = useCallback(
    ({ item }) => {
      return (
        <PanAddressItem
          addressName={item.addressName}
          addressDetail={item.addressDetail}
          isCheck={item.id === numCheck}
          onPress={onCheck}
          num={item.id}
          onDelete={onDelete}
          onEdit={() => {}}
        />
      );
    },
    [onDelete, onCheck, numCheck],
  );
  console.log(' numCheck',  numCheck)
  return (
    <View style={styles.container}>
      <FlatList
        data={addresses}
        renderItem={_renderAddressItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
      />
      {numCheck && numCheck !== '-1' ? (
        <ButtonLinear
          title={'Delivery to this Address'}
          onPress={onConfirm}
          style={styles.btnBtm}
        />
      ) : null}
    </View>
  );
});
export default SelectDeliveryAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  btnBtm: {
    paddingHorizontal: 24,
    position: 'absolute',
    bottom: getBottomSpace() + 8,
  },
});
