import React, { memo, useCallback } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import RecipeHeaderInfo from'app/screens/RecipeDetail/components/RecipeHeaderInfo';
import InactiveRate from'app/components/InactiveRate';
import ButtonColor from'app/components/ButtonColor';
import Step from './components/Step';
import BottomBtnView from'app/components/BottomBtnView';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import FONTS from'app/ultis/fonts';
import { data } from'app/screens/OnTheMenu/OnTheMenu';
import Material from './components/Material';
import { useNavigation } from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';
import RecipeProps from './components/RecipeProps';
const material = [
  {
    id: '0',
    name: '1 large British chicken breast fillet',
    img: require('app/assets/SignUp/chicken.png'),
  },
  {
    id: '1',
    name: '1 little gem lettuce',
    img: require('app/assets/SignUp/gem_lettuce.png'),
  },
  {
    id: '2',
    name: '1 red onion',
    img: require('app/assets/SignUp/red_onion.png'),
  },
  {
    id: '3',
    name: '1 red pepper',
    img: require('app/assets/SignUp/red_pepper.png'),
  },
  {
    id: '4',
    name: '2 tsp ground cumin',
    img: require('app/assets/SignUp/cumin.png'),
  },
  {
    id: '5',
    name: '1 lime',
    img: require('app/assets/SignUp/lime.png'),
  },
  {
    id: '6',
    name: '80g natural yoghurt†',
    img: require('app/assets/SignUp/yoghurt.png'),
  },
  {
    id: '7',
    name: '2 tsp smoked paprika',
    img: require('app/assets/SignUp/paprika.png'),
  },
  {
    id: '8',
    name: '1 tomato',
    img: require('app/assets/SignUp/tomato.png'),
  },
  {
    id: '9',
    name: '5g coriander',
    img: require('app/assets/SignUp/coriander.png'),
  },
  {
    id: '10',
    name: '1 tsp ground coriander',
    img: require('app/assets/SignUp/ground_coriander.png'),
  },
];

const materialPantry = [
  {
    id: '11',
    name: '30g dried cranberries',
    img: require('app/assets/SignUp/cranberries.png'),
  },
  {
    id: '12',
    name: '1 bag of blanched almonds†',
    img: require('app/assets/SignUp/almonds.png'),
  },
];

const RecipeDetail = memo((props) => {
  const item = data[0];
  const navigation = useNavigation();
  const onSeeAllTips = useCallback(() => {
    navigation.navigate(ROUTES.SeeAllTips);
  }, [navigation]);
  // eslint-disable-next-line no-shadow
  const _renderItem = useCallback((item) => {
    return <Material img={item.img} name={item.name} key={item.id} />;
  }, []);
  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <RecipeHeaderInfo />
        <View style={styles.introduction}>
          <Text style={styles.txtTitle}>Introductions</Text>
          <Text style={styles.txtContent}>
            Strips of chicken breast fillet are marinated in soy sauce, fresh
            chilli and classic Chinese hoisin sauce and then quickly stir fried.{' '}
            <Text style={styles.txtMore} onPress={() => { }}>
              {' More...'}
            </Text>
          </Text>
          <View style={styles.line} />
        </View>
        <View style={styles.ingredients}>
          <Text style={styles.txtTitle}>Ingredients</Text>
          <Text style={styles.txtProps}>In the box</Text>
          <Text style={[styles.txtContent, { marginTop: 7 }]}>
            Ingredients for 2 people (double for 4)
          </Text>
          <View style={styles.list}>{material.map(_renderItem)}</View>
          <Text style={styles.txtProps}>From your pantry</Text>
          <View style={styles.list}>{materialPantry.map(_renderItem)}</View>
          <View style={[styles.line, { marginTop: 12 }]} />
          <Text style={styles.txtTitle}>Allergens</Text>
          <Text style={styles.txtProps}>Gluten, Sesame, Soya, Sulphites</Text>
          <Text style={[styles.txtContent, { color: '#7D8699' }]}>
            Produced in a facility that processes milk, eggs, fish, shellfish,
            tree nuts, peanuts, wheat, and soybean.
          </Text>
          <View style={[styles.line, { marginTop: 12 }]} />
          <Text style={styles.txtTitle}>Tips from Home Chefs</Text>
          <View style={styles.rate}>
            <InactiveRate rate={4.5} />
            <Text style={styles.txtNumber}>
              {` ${item.numOfReviews}`}
              <Text style={styles.txtUnit}>{' reviews'}</Text>
            </Text>
          </View>
          <Text style={styles.txtContent}>
            Read helpful tips from other BA customers who have cooked the same
            recipe, or post your own.
          </Text>

          <ButtonColor title={'see all tips'} onPress={onSeeAllTips} />
          <View style={styles.line} />
          <Text style={styles.txtTitle}>Instructions</Text>
          <Step />
        </View>
      </ScrollView>
      <BottomBtnView IsExplorer={props.route.params?.IsExplorer} />
    </View>
  );
});

export default RecipeDetail;

const styles = StyleSheet.create({
  container: {
    paddingBottom: getBottomSpace() + 120,
    backgroundColor: '#fff',
  },
  txtTitle: {
    fontSize: 20,
    fontFamily: FONTS.Montserrat.Medium,
    color: '#1D1E2C',
  },
  txtContent: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 28,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
  },
  txtMore: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 28,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#FE9870',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#F7F7FB',
    marginTop: 24,
    marginBottom: 40,
  },
  txtProps: {
    color: '#1D1E2C',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: FONTS.Montserrat.Medium,
    marginTop: 16,
  },
  txtUnit: {
    fontSize: 14,
    lineHeight: 28,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
  },
  txtName: {
    fontSize: 28,
    fontFamily: FONTS.Montserrat.Bold,
    color: '#1D1E2C',
    lineHeight: 36,
  },
  txtNumber: {
    marginLeft: 8,
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Medium,
    color: '#1D1E2C',
  },
  introduction: {
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  ingredients: {
    paddingHorizontal: 24,
  },
  list: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  rate: {
    flexDirection: 'row',
    marginTop: 12,
  },
});
