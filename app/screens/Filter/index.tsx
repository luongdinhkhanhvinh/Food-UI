import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TagItem from'app/screens/Filter/components/TagItem';
import FONTS from'app/ultis/fonts';
import FilterCriteria from'app/screens/Filter/components/FilterCriteria';
import ButtonLinear from'app/components/ButtonLinear';
import {getBottomSpace} from 'react-native-iphone-x-helper';

const filterList = [
  {
    id: '0',
    name: 'Category',
    tags: [
      'All Recipes',
      '10-Min Meals',
      'Family',
      'World Food',
      'Classics',
      'Healthy Choices',
      'Indulge',
    ],
  },
  {
    id: '1',
    name: 'Recipe Type',
    tags: ['All Recipes', 'Meat', 'Fish', 'Vegetarian', 'Plant-Based'],
  },

  {
    id: '2',
    name: 'Cook Time',
    tags: ['Any Length', '10 minutes', '20 mins or less', '30 mins or less'],
  },
  {
    id: '3',
    name: 'Calories',
    isChange: true,
  },
];
const Filter = memo(() => {
  const onShowMore = useCallback(() => {}, []);
  const _renderItem = useCallback(({item}) => {
    return (
      <FilterCriteria
        data={item.tags}
        name={item.name}
        isChange={item.isChange}
      />
    );
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={filterList}
        renderItem={_renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <ButtonLinear
        title={'show 10+ recipes'}
        onPress={onShowMore}
        style={styles.btnBtm}
      />
    </View>
  );
});
export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btnBtm: {
    paddingHorizontal: 24,
    position: 'absolute',
    bottom: getBottomSpace() + 8,
  },
  listContainer: {
    paddingTop: 24,
    paddingBottom: getBottomSpace() + 58,
  },
});
