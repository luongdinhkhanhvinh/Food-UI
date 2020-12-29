import React, {memo, useCallback, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView, StyleSheet} from 'react-native';
import FONTS from'app/ultis/fonts';
import colors from 'app/ultis/colors';
import SvgReport from'app/svgs/NewsNutritionDetail/SvgReport';
import SvgComment from'app/svgs/NewsNutritionDetail/SvgComment';
import SvgShare from'app/svgs/NewsNutritionDetail/SvgShare';
import {widthScreen} from 'app/ultis/layout';
import SvgBookMark from'app/svgs/NewsNutritionDetail/SvgBookMark';

const data = {
  title: 'Valentine’s Day Breakfast Ideas For The Whole Family',
  avatar: require('app/assets/NewsNutritionDetail/Author.png'),
  nameAuthor: 'Birdie Copeland',
  time: 'Today - 7 mins read',
  img: require('app/assets/NewsNutritionDetail/Heart.png'),
  description:
    'Nothing makes a morning person like a\nheart-shaped meal, so rise and shine with these easy-as-can-be dishes.',
  description1:
    'The heart-happy celebration falls on a Wednesday this year, so naturally, morning time will call for super speed. Whether it’s a school day for little ones or a workday for not-so-little ones, trust these quick and simple labors of love to keep ’em full until lunchtime.',
};

const NewsNutritionDetail = memo(() => {
  const [focus, setFocus] = useState(false);
  const onFocus = useCallback(() => {
    setFocus(!focus);
  }, [focus]);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <Text style={styles.txtTitle}>{data.title}</Text>
        <View style={styles.authorView}>
          <Image source={data.avatar} />
          <Text style={styles.txtNameAuthor}>{data.nameAuthor}</Text>
          <Text style={styles.txtTime}>{data.time}</Text>
        </View>
        <Text style={styles.txtDescription}>{data.description}</Text>
        <Image style={styles.img} source={data.img} />
        <Text style={styles.txtDescription1}>{data.description1}</Text>
      </ScrollView>
      <View style={styles.actionView}>
        <TouchableOpacity style={styles.svgView}>
          <SvgReport />
        </TouchableOpacity>
        <TouchableOpacity style={styles.svgView}>
          <SvgComment />
        </TouchableOpacity>
        <TouchableOpacity style={styles.svgView}>
          <SvgShare />
        </TouchableOpacity>
        <TouchableOpacity style={styles.svgView} onPress={onFocus}>
          <SvgBookMark color={focus} />
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default NewsNutritionDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.while,
    paddingHorizontal: 24,
  },
  contentContainerStyle: {
    paddingTop: 24,
    paddingBottom: 100,
  },
  txtTitle: {
    fontFamily: FONTS.Montserrat.Bold,
    fontSize: 28,
    color: colors.title,
  },
  txtNameAuthor: {
    marginLeft: 8,
    marginRight: 14,
    fontFamily: FONTS.Montserrat.Medium,
    fontSize: 12,
    color: colors.title,
    fontWeight: '600',
  },
  txtTime: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 12,
    color: colors.gray0,
    fontWeight: '500',
  },
  txtDescription: {
    fontFamily: FONTS.PlayfairDisplay.Regular,
    fontSize: 16,
    color: colors.gray0,
    marginTop: 24,
    lineHeight: 28,
  },
  txtDescription1: {
    fontFamily: FONTS.PlayfairDisplay.Regular,
    fontSize: 16,
    color: colors.title,
    marginTop: 24,
    lineHeight: 28,
  },
  authorView: {
    flexDirection: 'row',
    marginTop: 16,
  },
  img: {
    marginTop: 24,
    width: widthScreen / 1.14,
    borderRadius: 24,
    overflow: 'hidden',
  },
  actionView: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 74,
    width: widthScreen,
    paddingHorizontal: 14,
    backgroundColor: colors.while,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  svgView: {
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
