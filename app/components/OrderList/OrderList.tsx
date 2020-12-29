import React, {memo, useCallback} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

import SvgFilterSmall from'app/svgs/Explorer/SvgFilterSmall';
import SvgCard from'app/svgs/Explorer/SvgCard';
import ItemList from'app/components/ItemList';
import SvgNodata from'app/svgs/SvgNodataSearch';
import NoData from'app/components/NoData';
import SvgOrderList from'app/svgs/Explorer/SvgOrderList';
import SvgOrderList1 from'app/svgs/Explorer/SvgOrderList1';
import SvgOrderList2 from'app/svgs/Explorer/SvgOrderList2';
import SvgOrderList3 from'app/svgs/Explorer/SvgOrderList3';
import SvgOrderList4 from'app/svgs/Explorer/SvgOrderList4';
import SvgOrderList5 from'app/svgs/Explorer/SvgOrderList5';
import ModalChoose from'app/components/ModalChoose';
import OrderCard from'app/components/OrderCard/OrderCard';

const dataListOrder = [
  {
    id: '0',
    name: 'Sausage Gemelli Bolognese',
    rate: 4.5,
    svgName: <SvgOrderList />,
  },
  {
    id: '1',
    name: 'Za’atar Chicken and Couscous',
    rate: 4.5,
    svgName: <SvgOrderList2 />,
  },
  {
    id: '2',
    name: 'Sweet and Smoky Chicken Breasts',
    rate: 4.5,
    svgName: <SvgOrderList3 />,
  },
  {
    id: '3',
    name: 'Mexican Chicken and Rice Bowl for Dinner',
    rate: 4.5,
    svgName: <SvgOrderList1 />,
  },
  {
    id: '4',
    name: 'Crispy Honey Chicken Cutlets',
    rate: 4.5,
    svgName: <SvgOrderList5 />,
  },
  {
    id: '5',
    name: 'Cheesy Chicken Shepherd’s Pie',
    rate: 4.5,
    svgName: <SvgOrderList4 />,
  },
];

interface PropsOrderList {
  onShowFilter: any;
  onShowList: any;
  onShowCard: any;
  showList: boolean;
  noData: boolean;
}

const OrderList = memo((props: PropsOrderList) => {
  const renderItem = useCallback(({item}) => {
    return (
      <ItemList svgName={item.svgName} rate={item.rate} name={item.name} />
    );
  }, []);
  const renderEmty = useCallback(() => {
    return (
      <NoData
        svgName={<SvgNodata />}
        title={"No recipes found for 'PHOP' "}
        nameButton={''}
        content={
          'Make sure words as spelled correctly, use less specific or diffirent keywords.'
        }
      />
    );
  }, []);
  return (
    <View style={styles.containerSearch}>
      {!props.showList ? (
        <OrderCard
          onShowFilter={props.onShowFilter}
          onShowList={props.onShowList}
        />
      ) : (
        <>
          <FlatList
            data={props.noData ? null : dataListOrder}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
            ListEmptyComponent={renderEmty}
          />
          {props.noData || !dataListOrder ? null : (
            <ModalChoose
              svgLeft={<SvgFilterSmall />}
              svgRight={<SvgCard />}
              nameLeft={'Filter'}
              nameRight={'Card'}
              onPressLeft={props.onShowFilter}
              onPressRight={props.onShowCard}
            />
          )}
        </>
      )}
    </View>
  );
});

export default OrderList;
const styles = StyleSheet.create({
  containerSearch: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  list: {
    paddingBottom: getBottomSpace() + 100,
  },
});
