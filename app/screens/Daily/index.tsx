import React, { memo, useCallback } from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';
import NurtureItem from '../Daily/components/NurtureItem';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import ArticleItem from '../Daily/components/ActicleItem';
import colors from 'app/ultis/colors';
import FONTS from 'app/ultis/fonts';
import keyExtractor from 'app/ultis/KeyExtractor';

const data = [
  {
    img: require('app/assets/Community/LowCarb.png'),
    title: 'Low\nCard',
  },
  {
    img: require('app/assets/Community/HighProtein.png'),
    title: 'High\nProtein',
  },
  {
    img: require('app/assets/Community/Vegetarian.png'),
    title: 'Vegetarian',
  },
];

const data1 = [
  {
    id: '0',
    img: require('app/assets/Community/Img.png'),
    title: 'Valentine’s Day Breakfast Ideas For The Whole Family',
    tag: ['#nutrition', '#lowcarb'],
    time: 'Today - 7 mins read',
  },
  {
    id: '1',
    img: require('app/assets/Community/Img.png'),
    title: 'Valentine’s Day Breakfast Ideas For The Whole Family',
    tag: ['#nutrition', '#lowcarb'],
    time: 'Today - 7 mins read',
  },
];

const Daily = memo(() => {
  const renderItem = useCallback(({ item }) => {
    const { img, title } = item;
    return <NurtureItem img={img} title={title} />;
  }, []);

  const renderItem1 = useCallback(({ item }) => {
    const { img, title, tag, time, id } = item;
    return (
      <ArticleItem
        id={id}
        img={img}
        title={title}
        tag={tag}
        time={time}
        noSave={true}
      />
    );
  }, []);

  const listHeaderComponent = () => {
    return (
      <>
        <Text style={styles.txtMayYouLike}>May you like</Text>
        <FlatList
          contentContainerStyle={styles.contentContainerStyleFlatList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
        <Text style={styles.txtHottest}>Hottest Article</Text>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={listHeaderComponent}
        showsVerticalScrollIndicator={false}
        data={data1}
        renderItem={renderItem1}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

export default Daily;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundApp,
  },
  txtMayYouLike: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '600',
    fontSize: 16,
    color: colors.title,
    marginLeft: 15,
    marginBottom: 15,
  },
  contentContainerStyleFlatList: {
    paddingLeft: 16,
  },
  txtHottest: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '600',
    color: colors.title,
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 15,
    marginTop: 34,
  },
  contentContainerStyle: {
    paddingTop: 24,
    paddingBottom: getBottomSpace() + 24,
  },
});
