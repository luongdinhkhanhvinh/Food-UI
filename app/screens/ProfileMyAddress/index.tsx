import {memo, useCallback, useState} from 'react';
import {FlatList, StyleSheet, View, LayoutAnimation} from 'react-native';
import React from 'react';
import PanAddressItem from'app/screens/SelectDeliveryAddress/components/PanAddressItem';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import ROUTES from'app/ultis/routes';
import {useNavigation} from '@react-navigation/native';

const addressData = [
  {
    id: '0',
    addressName: 'Home',
    addressDetail: '7100 Athens Place, Quebec, DC',
    default: true,
  },
  {
    id: '1',
    addressName: 'GrandMother Home',
    addressDetail: '4496 Sabina Heights Suite 546',
    default: true,
  },
  {
    id: '2',
    addressName: 'Summer Home',
    addressDetail: '86 Russel Mills Suite 250 ',
    default: true,
  },
  {
    id: '3',
    addressName: 'Parent Home',
    addressDetail: '816 Brown Run Suite 702',
    default: true,
  },
];

const ProfileMyAddress = memo(() => {
  const navigation = useNavigation();
  const [addresses, setList] = useState(addressData);
  const [numCheck, setCheck] = useState('0');
  const onCheck = useCallback((id) => {
    setCheck(id);
  }, []);
  const onDelete = useCallback(
    (id) => {
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
    [addresses],
  );
  const onConfirm = useCallback(() => {
    navigation.navigate(ROUTES.PersonalInformation, {
      isNext: true,
      step: 2,
    });
  }, [navigation]);

  const _renderAddressItem = useCallback(
    ({item}) => {
      return (
        <PanAddressItem
          addressName={item.addressName}
          addressDetail={item.addressDetail}
          default={item.id === numCheck}
          onPress={onCheck}
          num={item.id}
          onDelete={onDelete}
          onEdit={() => {}}
        />
      );
    },
    [onDelete, onCheck, numCheck],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={addresses}
        renderItem={_renderAddressItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
});
export default ProfileMyAddress;

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
