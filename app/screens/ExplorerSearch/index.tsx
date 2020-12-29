import React, {memo, useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Text,
  Platform,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import SvgSearch from 'app/svgs/SvgSearch';
import SvgClose from 'app/svgs/SvgClose';
import FONTS from'app/ultis/fonts';
import ROUTES from 'app/ultis/routes';
import keyExtractor from 'app/ultis/KeyExtractor';
import OrderList from'app/components/OrderList/OrderList';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const data = [{name: 'pork'}, {name: 'fish'}, {name: 'mexico'}];

const ExplorerSearch = memo(() => {
  const navigation = useNavigation();
  const [newData, setNewData] = useState(data);
  const [showList, setShowList] = useState(true);

  const [textSearch, setTextSearch] = useState('phoq');

  const onChangeText = useCallback((text) => {
    setTextSearch(text);
    console.log('textSearch', textSearch);
  }, []);

  const clearTextInput = useCallback(() => {
    setTextSearch('');
  }, []);

  const onCancel = useCallback(() => {
    navigation.navigate('Explorer');
  }, []);

  const onClear = useCallback(() => {
    setNewData(data.pop() || '');
  }, []);

  const onShowFilter = useCallback(() => {
    navigation.navigate(ROUTES.Filter);
  }, []);
  const onShowCard = useCallback(() => {
    setShowList(false);
  }, [setShowList]);
  const onShowList = useCallback(() => {
    setShowList(true);
  }, [setShowList]);
  const renderItem = useCallback(({item}) => {
    return (
      <View style={styles.viewContenTDetail}>
        <SvgSearch noColor={true} />
        <Text style={styles.textDetail}>{item.name}</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <View style={styles.viewSearch}>
          <View style={styles.paddingLeft}>
            <SvgSearch noColor={true} />
          </View>
          <TextInput
            style={styles.textInput}
            value={textSearch}
            onChange={onChangeText}
            autoCapitalize={'none'}
          />
          <TouchableOpacity
            onPress={clearTextInput}
            style={styles.paddingRight}>
            <SvgClose />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onCancel} style={styles.paddingLeft}>
          <Text style={styles.textCancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
      {textSearch.length !== 0 ? (
        textSearch === 'phoq' ? (
          <OrderList
            onShowFilter={onShowFilter}
            onShowList={onShowList}
            onShowCard={onShowCard}
            showList={showList}
            noData={true}
          />
        ) : (
          <OrderList
            onShowFilter={onShowFilter}
            onShowList={onShowList}
            onShowCard={onShowCard}
            showList={showList}
            noData={false}
          />
        )
      ) : (
        <>
          <View style={styles.viewContentDetail}>
            <Text style={styles.textBold}>Recent searches</Text>
            <TouchableOpacity onPress={onClear}>
              <Text style={styles.textColor}>Clear search history</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={newData}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </>
      )}
    </View>
  );
});

export default ExplorerSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  paddingLeft: {
    paddingLeft: 16,
  },
  paddingRight: {
    // paddingRight: 32,
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:
      Platform.OS === 'ios' ? getStatusBarHeight() + 24 : getStatusBarHeight(),
    backgroundColor: '#ffff',
    paddingBottom: 16,
    paddingHorizontal: 24,
    width: '100%',
    justifyContent: 'space-between',
  },
  viewSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textCancel: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    color: '#1D1E2C',
  },
  textDetail: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    paddingLeft: 16,
  },
  viewContenTDetail: {
    flexDirection: 'row',
    paddingLeft: 24,
    paddingTop: 24,
  },
  viewContentDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  textInput: {
    height: 48,
    paddingHorizontal: 16,
    fontSize: 14,
    fontFamily: FONTS.Montserrat.Regular,
    paddingVertical: 16,
    flex: 1,
  },
  textBold: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 16,
  },
  textColor: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 16,
    color: '#FE9870',
  },
});
