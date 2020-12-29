import React, { memo, useCallback } from 'react';
import {FlatList, Platform, StyleSheet, TextInput} from 'react-native';
import CommentItem from 'app/screens/SeeAllTips/components/CommentItem';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import FONTS from 'app/ultis/fonts';
import SvgPhoto from 'app/svgs/SeeAllTips/SvgPhoto';
import SvgCamera from 'app/svgs/SeeAllTips/SvgCamera';
import SvgSend from 'app/svgs/SeeAllTips/SvgSend';
import Animated from 'react-native-reanimated';
import useKeyboard from '../../hooks/useKeyboard';
export const tips = [
  {
    id: '0',
    avatarImg: require('app/assets/SeeAllTips/img_avatar_1.png'),
    userName: 'Lula Woods',
    timePosted: '2 mins ago',
    content:
      'Wrap a small bowl in a paper towel (to keep it from slipping) and set upside-down inside a big bowl. A bundt pan works great for this too, if you have it.',
    images: [
      require('app/assets/SeeAllTips/img.png'),
      require('app/assets/SeeAllTips/img-1.png'),
      require('app/assets/SeeAllTips/img-2.png'),
      require('app/assets/SeeAllTips/img-3.png'),
      require('app/assets/SeeAllTips/img-3.png'),
      require('app/assets/SeeAllTips/img-3.png'),
      require('app/assets/SeeAllTips/img-3.png'),
      require('app/assets/SeeAllTips/img-3.png'),
    ],
  },
  {
    id: '1',
    avatarImg: require('app/assets/SeeAllTips/img_avatar_2.png'),
    userName: 'Adelaide Henry',
    timePosted: 'Yesterday',
    content:
      'Sounds weird, but it works! Soak the pasta in water in a sealed bag for a couple hours or overnight. Then you can cook it super super fast in boiling water or just add it straight to a hot sauce in a pan and let it finish cooking there.',
    images: [],
  },
  {
    id: '2',
    avatarImg: require('app/assets/SeeAllTips/img_avatar_3.png'),
    userName: 'Hattie Gill',
    timePosted: '11/14/2019',
    content:
      'Sounds weird, but it works! Soak the pasta in water in a sealed bag for a couple hours or overnight. Then you can cook it super super fast in boiling water or just add it straight to a hot sauce in a pan and let it finish cooking there.',
    images: [
      require('app/assets/SeeAllTips/img.png'),
      require('app/assets/SeeAllTips/img-1.png'),
      require('app/assets/SeeAllTips/img-2.png'),
    ],
  },
];

const SeeAllTips = memo(() => {
  const _renderItem = useCallback(({ item }) => {
    return (
      <CommentItem
        images={item.images}
        content={item.content}
        timePosted={item.timePosted}
        userName={item.userName}
        avatarImg={item.avatarImg}
      />
    );
  }, []);
  const onSend = useCallback(() => {}, []);
  const onPhoto = useCallback(() => {}, []);
  const onCamera = useCallback(() => {}, []);

  const [transX] = useKeyboard();

  const btnStyle = {
    bottom: 0,
  };
  const viewAnimated = {
    marginBottom: Platform.OS === "ios"? transX : 0,
  };

  return (
    <Animated.View style={[styles.container, viewAnimated]}>
      <FlatList
        data={tips}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.listContent]}
      />
      <Animated.View style={[styles.writeComment, btnStyle]}>
        <TextInput
          placeholder={'Type somthing...'}
          placeholderTextColor={'#7D8699'}
          style={styles.txtInput}
        />
        <SvgCamera onPress={onCamera} />
        <SvgPhoto onPress={onPhoto} />
        <SvgSend onPress={onSend} />
      </Animated.View>
    </Animated.View>
  );
});
export default SeeAllTips;

const styles = StyleSheet.create({
  listContent: {
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: getBottomSpace() + 56 + 18,
  },
  writeComment: {
    position: 'absolute',
    height: getBottomSpace() + (18 + 56),
    paddingBottom: getBottomSpace() + 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 2,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  txtInput: {
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Regular,
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
