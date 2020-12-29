import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, LayoutAnimation, View} from 'react-native';
import FONTS from'app/ultis/fonts';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import Nodata from'app/components/NoData';
import SvgNodata from 'app/svgs/SvgNodata';
import ItemSaved from'app/screens/SavedRecipes/Component/ItemSaved';
import OrderList from'app/screens/SavedRecipes/Component/OrderList';
import ModalChoose from'app/components/ModalChoose';
import SvgFilterSmall from 'app/svgs/Explorer/SvgFilterSmall';
import SvgList from 'app/svgs/Explorer/SvgList';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';

export const data = [
  {
    id: '0',
    name: 'Chicken Fajitas With Seeded Tortilla Wraps & Salsa',
    rate: 4.5,
    cal: 234,
    cookTime: 15,
    numOfAdded: 0,
    numOfReviews: 1693,
    img: require('app/assets/SignUp/chicken_recipe.png'),
  },
  {
    id: '1',
    name: 'Chicken Fajitas With Seeded Tortilla Wraps & Salsa',
    rate: 4.5,
    cal: 234,
    cookTime: 15,
    numOfAdded: 0,
    numOfReviews: 1693,
    img: require('app/assets/SignUp/chicken_recipe.png'),
  },
  {
    id: '2',
    name: 'Chicken Fajitas With Seeded Tortilla Wraps & Salsa',
    rate: 4.5,
    cal: 234,
    cookTime: 15,
    numOfAdded: 0,
    numOfReviews: 1693,
    img: require('app/assets/SignUp/chicken_recipe.png'),
  },
];

const SavedRecipes = () => {
  const navigation = useNavigation();
  const [showList, setShowList] = useState(false);

  const onShowFilter = useCallback(() => {
    navigation.navigate(ROUTES.Filter);
  }, []);
  const onShowCard = useCallback(() => {
    setShowList(false);
  }, []);
  const onShowList = useCallback(() => {
    setShowList(true);
  }, []);
  const [newData, setNewData] = useState(data);
  const onDelete = useCallback(
    (id) => {
      let list = newData.filter((item) => item.id !== id);
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          200,
          LayoutAnimation.Types.linear,
          LayoutAnimation.Properties.opacity,
        ),
      );
      setNewData(list);
    },
    [newData],
  );

  const _renderItem = useCallback(
    ({item}) => {
      return (
        <ItemSaved
          id={item.id}
          name={item.name}
          rate={item.rate}
          cal={item.cal}
          cookTime={item.cookTime}
          numOfAdded={item.numOfAdded}
          numOfReviews={item.numOfReviews}
          item={item}
          onDelete={onDelete}
        />
      );
    },
    [onDelete],
  );
  return (
    <View style={styles.container}>
      {showList ? (
        <OrderList onShowCard={onShowCard} onShowFilter={onShowFilter} />
      ) : (
        <>
          <View style={styles.content}>
            <FlatList
              data={newData}
              renderItem={_renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.list}
              ListEmptyComponent={
                <Nodata
                  svgName={<SvgNodata />}
                  title={'view all recipes '}
                  nameButton={'get cooking'}
                  content={' Explorer menu and get a first cook.'}
                />
              }
            />
          </View>
          {newData.length !== 0 ? (
            <ModalChoose
              svgLeft={<SvgFilterSmall />}
              nameLeft={'Filter'}
              svgRight={<SvgList />}
              nameRight={'List'}
              onPressRight={onShowList}
              onPressLeft={onShowFilter}
            />
          ) : null}
        </>
      )}
    </View>
  );
};

export default SavedRecipes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: getBottomSpace() + 70,
  },
});
