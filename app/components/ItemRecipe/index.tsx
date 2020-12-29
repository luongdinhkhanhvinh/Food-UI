import React, {memo, useCallback, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';
import InactiveRate from'app/components/InactiveRate';
import SvgCookTime from 'app/svgs/SignUp/SvgCookTime';
import SvgIconCalor from'app/svgs/SignUp/SvgIconCalor';
import ButtonLinear from'app/components/ButtonLinear';
import SvgSub from'app/svgs/SignUp/SvgSub';
import SvgAdd from'app/svgs/SignUp/SvgAdd';
import FONTS from'app/ultis/fonts';
import {widthScreen} from 'app/ultis/layout';
import {recipe} from'app/screens/OnTheMenu/OnTheMenu';
import SvgFeatureRecipe from'app/svgs/SvgFeatureRecipe';

interface ItemRecipeProps {
  name: string;
  numOfAdded: number;
  rate: number;
  numOfReviews: number;
  cal: number;
  cookTime: number;
  item: any;
  onAdd: (item: recipe) => void;
  onSub: (item: recipe) => void;
  feature?: boolean;
}

const ItemRecipe = memo((props: ItemRecipeProps) => {
  const navigation = useNavigation();
  const [numAdded, setNum] = useState(props.numOfAdded);

  const onAdd = useCallback(() => {
    setNum(numAdded + 1);
    props.onAdd(props.item);
  }, [numAdded, props.onAdd]);
  const onSub = useCallback(() => {
    if (numAdded > 0) {
      setNum(numAdded - 1);
      props.onSub(props.item);
    } else {
      return;
    }
  }, [numAdded, props.onSub]);
  const onAddToBox = useCallback(() => {
    setNum(numAdded + 1);
    props.onAdd(props.item);
  }, [numAdded, props.onAdd]);
  const onDetail = useCallback(() => {
    navigation.navigate(ROUTES.RecipeDetail);
  }, [navigation]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onDetail}
      activeOpacity={0.7}>
      {props.feature ? (
        <View style={styles.label}>
          <SvgFeatureRecipe />
        </View>
      ) : null}
      <Image
        source={require('app/assets/SignUp/chicken_recipe.png')}
        style={styles.img}
      />
      <View style={styles.infoView}>
        <Text style={styles.txtName}>{props.name}</Text>
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
              {props.cal} <Text style={styles.txtUnit}>{' cal/serving'}</Text>
            </Text>
          </View>
        </View>
        {numAdded === 0 ? (
          <ButtonLinear
            title={'ADD TO BOX'}
            onPress={onAddToBox}
            style={styles.btnAddToBox}
          />
        ) : (
          <View style={styles.addedView}>
            <ButtonLinear onPress={onSub} style={styles.btnAdd}>
              <SvgSub />
            </ButtonLinear>
            <View style={styles.addedInfo}>
              <Text style={styles.addedNumber}>{numAdded}</Text>
              <Text style={styles.txtAddedUnit}>added</Text>
            </View>
            <ButtonLinear onPress={onAdd} style={styles.btnAdd}>
              <SvgAdd />
            </ButtonLinear>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
});

export default ItemRecipe;

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
  },
  rateView: {
    flexDirection: 'row',
    marginTop: 8,
  },
  recipeTimeCal: {
    flexDirection: 'row',
    marginTop: 18,
    justifyContent: 'space-between',
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
  label: {
    position: 'absolute',
    top: 12,
    right: 12,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
});
