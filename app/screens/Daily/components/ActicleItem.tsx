import React, {useCallback, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SvgBookMark from 'app/svgs/SvgBookMark';
import SvgOption from 'app/svgs/SvgOption';
import FONTS from'app/ultis/fonts';
import colors from 'app/ultis/colors/index';
import {widthScreen} from 'app/ultis/layout';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';

interface Props {
  id: string;
  img: any;
  title: string;
  tag: string[];
  time: string;
  saved?: boolean;
  noSave?: boolean;
}

const ArticleItem = (props: Props) => {
  const [focus, setFocus] = useState(props.noSave ? false : true);
  const onFocus = useCallback(() => {
    setFocus(!focus);
  }, [focus]);

  const navigation = useNavigation();

  const onNewsNutritionDetail = useCallback(() => {
    navigation.navigate(ROUTES.NewsNutritionDetail);
  }, [navigation]);

  return (
    <TouchableOpacity
      onPress={onNewsNutritionDetail}
      style={styles.articleItem}>
      <Image style={styles.img} source={props.img} />
      <Text style={styles.txtTitle}>{props.title}</Text>
      <View style={styles.tagView}>
        {props.tag.map((item) => {
          return <Text style={styles.txtTag}>{item}</Text>;
        })}
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.txtTime}>{props.time}</Text>
        <View style={styles.setRow}>
          <TouchableOpacity onPress={onFocus} style={styles.svgBookMark}>
            <SvgBookMark onFocus={focus} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.svgOption}>
            <SvgOption />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleItem;

const styles = StyleSheet.create({
  articleItem: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: colors.while,
    marginBottom: 16,
    overflow: 'hidden',
    marginHorizontal: 16,
  },
  txtTitle: {
    marginHorizontal: 16,
    fontFamily: FONTS.Montserrat.Bold,
    fontSize: 18,
    color: colors.title,
    marginTop: 12,
    marginBottom: 8,
  },
  txtTag: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 12,
    color: colors.title,
    fontStyle: 'normal',
    fontWeight: '500',
    marginRight: 4,
  },
  txtTime: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 12,
    color: colors.gray0,
    fontWeight: '500',
  },
  img: {
    width: widthScreen,
    height: 220,
  },
  tagView: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  bottomView: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 6,
    justifyContent: 'space-between',
    marginBottom: 5,
    alignItems: 'center',
  },
  setRow: {
    flexDirection: 'row',
  },
  svgBookMark: {
    marginRight: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgOption: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
