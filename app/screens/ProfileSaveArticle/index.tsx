import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import colors from 'app/ultis/colors';
import ArticleItem from'app/screens/Daily/components/ActicleItem';
import keyExtractor from 'app/ultis/KeyExtractor';
import {getBottomSpace} from 'react-native-iphone-x-helper';

const data = [
  {
    id: '0',
    img: require('app/assets/Community/Img.png'),
    title: 'Raspberry Elderflower Mocktail Recipe',
    tag: ['#lifestyle'],
    time: 'Today - 7 mins read',
  },
  {
    id: '1',
    img: require('app/assets/Community/Home.png'),
    title: '3 Homemade Pizza Recipes For Every Meal Of The Day',
    tag: ['#lifestyle', '#lowcarb'],
    time: 'Today - 15 mins read',
  },
  {
    id: '2',
    img: require('app/assets/Community/Love.png'),
    title: '2 Ways To Make The Perfect Love Potion',
    tag: ['#nutrition'],
    time: 'Today - 7 mins read',
  },
];

const ProfileSaveArticle = memo(() => {
  const renderItem = useCallback(({item}) => {
    const {img, title, tag, time, id} = item;
    return (
      <ArticleItem
        id={id}
        img={img}
        title={title}
        tag={tag}
        time={time}
        noSave={false}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});
export default ProfileSaveArticle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundApp,
  },

  contentContainerStyle: {
    paddingTop: 16,
    paddingBottom: getBottomSpace() + 16,
  },
});
