import React, {memo, useCallback} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {data} from'app/screens/OnTheMenu/OnTheMenu';
import InactiveRate from'app/components/InactiveRate';
import RecipeProps from'app/screens/RecipeDetail/components/RecipeProps';
import SvgCookTimeBig from 'app/svgs/RecipeDetail/SvgCookTimeBig';
import SvgGlobal from 'app/svgs/RecipeDetail/SvgGlobal';
import SvgServing from 'app/svgs/RecipeDetail/SvgServing';
import SvgCaloriesBig from 'app/svgs/RecipeDetail/SvgCaloriesBig';
import SvgArrowNext from 'app/svgs/SignUp/SvgArrowNext';
import FONTS from'app/ultis/fonts';
import {widthScreen} from 'app/ultis/layout';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';
import Swiper from 'react-native-swiper';
import SvgFeatureRecipe from'app/svgs/SvgFeatureRecipe';

const RecipeHeaderInfo = memo(() => {
  const item = data[0];
  const navigation = useNavigation();
  const onDetail = useCallback(() => {
    navigation.navigate(ROUTES.NutritionDetail);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Swiper
        horizontal={true}
        dotColor={'#FFFFFF50'}
        activeDotColor={'#fff'}
        height={(widthScreen / 375) * 272}
        loop={false}>
        <View style={styles.slider}>
          <Image source={item.img} style={styles.img} />
          <View style={styles.label}>
            <SvgFeatureRecipe />
          </View>
        </View>
        <View style={styles.slider}>
          <Image source={item.img} style={styles.img} />
          <View style={styles.label}>
            <SvgFeatureRecipe />
          </View>
        </View>
        <View style={styles.slider}>
          <Image source={item.img} style={styles.img} />
          <View style={styles.label}>
            <SvgFeatureRecipe />
          </View>
        </View>
      </Swiper>

      <View style={styles.rate}>
        <Text style={styles.txtName}>{item.name}</Text>
        <View style={styles.star}>
          <InactiveRate rate={4.5} />
          <Text style={styles.txtNumber}>
            {` ${item.numOfReviews}`}
            <Text style={styles.txtUnit}>{' reviews'}</Text>
          </Text>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.recipeTimeCal}>
            <RecipeProps num={item.cookTime} unit={'mins'}>
              <SvgCookTimeBig />
            </RecipeProps>
            <RecipeProps unit={'Mexico Cuisine'}>
              <SvgGlobal />
            </RecipeProps>
          </View>
          <View style={styles.recipeTimeCal}>
            <RecipeProps num={2} unit={'serving'}>
              <SvgServing />
            </RecipeProps>
            <RecipeProps num={item.cal} unit={'cal/serving*'}>
              <SvgCaloriesBig />
            </RecipeProps>
          </View>
        </View>
        <View style={styles.detailView}>
          <TouchableOpacity style={styles.btnText} onPress={onDetail}>
            <Text style={styles.txtBtn}>View Details</Text>
            <SvgArrowNext color={'#7D8699'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

export default RecipeHeaderInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  recipeTimeCal: {
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtNumber: {
    marginLeft: 8,
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Medium,
    color: '#1D1E2C',
  },
  txtUnit: {
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
  },
  txtName: {
    fontSize: 28,
    fontFamily: FONTS.Montserrat.Bold,
    color: '#1D1E2C',
    lineHeight: 36,
  },
  img: {
    flex: 1,
    width: widthScreen,
    height: (widthScreen / 375) * 272,
  },
  slider: {
    flex: 1,
    width: widthScreen,
    height: (widthScreen / 375) * 272,
  },
  rate: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F7F7FB',
    paddingHorizontal: 24,
  },
  star: {
    flexDirection: 'row',
    marginTop: 12,
  },
  detailView: {
    alignItems: 'flex-end',
  },
  btnText: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    marginTop: 8,
    marginRight: 10,
  },
  txtBtn: {
    fontSize: 12,
    fontFamily: FONTS.Montserrat.Regular,
    lineHeight: 15,
    color: '#FE9870',
    marginRight: 10,
  },
  label: {
    position: 'absolute',
    top: 12,
    right: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
