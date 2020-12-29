import React, {memo, useCallback, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';
import InactiveRate from'app/components/InactiveRate';
import SvgCookTime from'app/svgs/SignUp/SvgCookTime';
import SvgIconCalor from'app/svgs/SignUp/SvgIconCalor';
import FONTS from'app/ultis/fonts';
import SvgBookMark from'app/svgs/Explorer/SvgBookMark';
import {widthScreen} from 'app/ultis/layout';

interface ItemRecipeProps {
  name: string;
  numOfAdded: number;
  rate: number;
  numOfReviews: number;
  cal: number;
  cookTime: number;
  item: any;
}

const ItemNoButoonAdd = memo((props: ItemRecipeProps) => {
  const navigation = useNavigation();
  const [isActive, showActive] = useState(false);
  const onDetail = useCallback(() => {
    navigation.navigate(ROUTES.RecipeDetail, {
      IsExplorer: true,
    });
  }, [navigation]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onDetail}
      activeOpacity={0.7}>
      <Image
        source={require('app/assets/SignUp/chicken_recipe.png')}
        style={styles.img}
      />
      <View style={styles.infoView}>
        <View style={styles.viewName}>
          <Text style={styles.txtName}>{props.name}</Text>
          <TouchableOpacity
            onPress={() => {
              showActive(!isActive);
            }}>
            <SvgBookMark isActive={isActive} />
          </TouchableOpacity>
        </View>
        <View style={styles.rateView}>
          <InactiveRate rate={props.rate} />
          <Text style={styles.txtNumber}>
            {props.numOfReviews}
            <Text style={styles.txtUnit}>{' reviews'}</Text>
          </Text>
        </View>
        <View style={styles.recipeTimeCal}>
          <View style={styles.flexRow}>
            <SvgCookTime />
            <Text style={styles.txtNumber}>
              {props.cookTime} <Text style={styles.txtUnit}>mins</Text>
            </Text>
          </View>
          <View style={styles.flexRow}>
            <SvgIconCalor />
            <Text style={styles.txtNumber}>
              <Text style={styles.txtUnit}>{`${props.cal} cal/serving`}</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default ItemNoButoonAdd;

const styles = StyleSheet.create({
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
  addedView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingBottom: 24,
    shadowColor: '#000',
    marginTop: 16,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  img: {
    width: widthScreen - 32,
    height: ((widthScreen - 32) / 343) * 248,
  },
  infoView: {
    paddingHorizontal: 16,
  },
  txtName: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: FONTS.Montserrat.Bold,
    color: '#1D1E2C',
    marginTop: 12,
    paddingRight: 8,
    width: '80%',
  },
  rateView: {
    flexDirection: 'row',
    marginTop: 8,
  },
  recipeTimeCal: {
    flexDirection: 'row',
    marginTop: 18,
    justifyContent: 'space-between',
    paddingRight: 52,
  },
  flexRow: {
    flexDirection: 'row',
  },
  btnAdd: {
    width: widthScreen / 4.5,
  },
  txtAddedUnit: {
    fontSize: 12,
    marginTop: -6,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
  },
  addedInfo: {
    flex: 1,
    alignItems: 'center',
  },
  addedNumber: {
    fontSize: 32,
    fontFamily: FONTS.Montserrat.Bold,
    color: '#1D1E2C',
  },
  btnAddToBox: {
    marginTop: 16,
  },
  btnSubDisable: {
    width: widthScreen / 4.5,
    backgroundColor: '#E5E5E5',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  viewName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
