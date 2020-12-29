import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SvgCalendar from '../../svgs/SignUp/SvgCalendar';
import ItemRecipe from'app/components/ItemRecipe';
import SvgBgAddedRecipe from 'app/svgs/SignUp/SvgBgAddedRecipe';
import ButtonLinear from'app/components/ButtonLinear';
import SvgArrowNext from 'app/svgs/SignUp/SvgArrowNext';
import FONTS from'app/ultis/fonts';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {widthScreen} from 'app/ultis/layout';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';
export interface recipe {
  id: string;
  name: string;
  rate: number;
  cal: number;
  cookTime: number;
  numOfAdded: number;
  numOfReviews: number;
  img: ImageSourcePropType;
}
export const data = [
  {
    id: '0',
    name: 'Chicken Fajitas With Seeded Tortilla Wraps & Salsa',
    rate: 4.5,
    cal: 234,
    cookTime: 15,
    numOfAdded: 0,
    numOfReviews: 1693,
    img: require('app/assets/SignUp/img_recipe.png'),
    feature: true,
  },
  {
    id: '1',
    name: 'Chicken Fajitas With Seeded Tortilla Wraps & Salsa',
    rate: 4.5,
    cal: 234,
    cookTime: 15,
    numOfAdded: 0,
    numOfReviews: 1693,
    img: require('app/assets/SignUp/chicken_recipe.png'),
  },
];

const OnTheMenu = memo(() => {
  const navigation = useNavigation();
  const [list, setList] = useState([]);
  const onNext = useCallback(() => {
    navigation.navigate(ROUTES.BoxSummary);
  }, [navigation]);

  const onAdd = useCallback(
    (item) => {
      if (list.length < 1) {
        let addItem = {...item, numOfAdded: item.numOfAdded + 1};
        setList(list.concat([addItem]));
      } else {
        let isHave = false;
        let listAdd = list;
        for (let i = 0; i < listAdd.length; i++) {
          if (listAdd[i].id === item.id) {
            listAdd[i].numOfAdded = listAdd[i].numOfAdded + 1;

            isHave = true;
            break;
          }
        }

        if (!isHave) {
          let addItem = {...item, numOfAdded: item.numOfAdded + 1};
          setList(list.concat([addItem]));
        } else {
          setList(listAdd);
        }
      }
    },
    [list, setList],
  );
  const onSub = useCallback(
    (item) => {
      if (list.length < 1) {
        return;
      }
      let isHave = false;
      let listSub = list;
      for (let i = 0; i < listSub.length; i++) {
        if (listSub[i].id === item.id) {
          if (listSub[i].numOfAdded === 1) {
            listSub = listSub.filter((ele) => ele.id !== item.id);
          } else {
            listSub[i].numOfAdded = listSub[i].numOfAdded - 1;
          }
          isHave = true;
          break;
        }
      }

      if (!isHave) {
        let subItem = {...item, numOfAdded: item.numOfAdded - 1};
        setList(list.concat([subItem]));
      } else {
        console.log('listSub', listSub);
        setList(listSub);
      }
    },
    [list, setList],
  );
  const _renderItem = useCallback(
    ({item}) => {
      return (
        <ItemRecipe
          name={item.name}
          rate={item.rate}
          cal={item.cal}
          cookTime={item.cookTime}
          numOfAdded={item.numOfAdded}
          numOfReviews={item.numOfReviews}
          item={item}
          onAdd={onAdd}
          onSub={onSub}
          feature={item.feature}
        />
      );
    },
    [onSub, onAdd],
  );
  return (
    <View style={styles.container}>
      <View style={styles.calendarView}>
        <SvgCalendar />
        <Text style={styles.txtDate}>Fri, 5 Feb</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </View>
      <View style={styles.btmView}>
        <SvgBgAddedRecipe>
          {list[0] ? (
            <Image source={list[0].img} style={styles.selectedImg} />
          ) : (
            <Text style={styles.txtRecipePrice}>Add first recipe</Text>
          )}
        </SvgBgAddedRecipe>
        <SvgBgAddedRecipe>
          {list[1] ? (
            <Image source={list[1].img} style={styles.selectedImg} />
          ) : (
            <>
              <Text style={styles.numberOfRecipe}>2</Text>
              <Text style={styles.txtRecipePrice}>$6.25/ser</Text>
            </>
          )}
        </SvgBgAddedRecipe>
        <SvgBgAddedRecipe>
          {list[2] ? (
            <Image source={list[2].img} style={styles.selectedImg} />
          ) : (
            <>
              <Text style={styles.numberOfRecipe}>3</Text>
              <Text style={styles.txtRecipePrice}>$4.88/ser</Text>
            </>
          )}
        </SvgBgAddedRecipe>
        <SvgBgAddedRecipe>
          {list[3] ? (
            <Image source={list[3].img} style={styles.selectedImg} />
          ) : (
            <>
              <Text style={styles.numberOfRecipe}>4</Text>
              <Text style={styles.txtRecipePrice}>$4.31/ser</Text>
            </>
          )}
        </SvgBgAddedRecipe>
        {list.length > 0 ? (
          <ButtonLinear
            title={'Next'}
            onPress={onNext}
            styleLinear={styles.linearStyle}
            style={styles.btnStyle}>
            <SvgArrowNext />
          </ButtonLinear>
        ) : (
          <View style={styles.btnStyle}>
            <Text style={styles.textBtn}>Next</Text>
            <SvgArrowNext />
          </View>
        )}
      </View>
    </View>
  );
});

export default OnTheMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendarView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  txtDate: {
    marginLeft: 8,
    fontSize: 12,
    lineHeight: 15,
    color: '#1D1E2C',
    fontFamily: FONTS.Montserrat.Medium,
  },
  content: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  txtRecipePrice: {
    color: '#7D8699',
    fontSize: 10,
    fontFamily: FONTS.Montserrat.Regular,
    textAlign: 'center',
  },
  numberOfRecipe: {
    color: '#000',
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Medium,
    textAlign: 'center',
    marginBottom: 4,
  },
  btmView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    paddingBottom: getBottomSpace() + 16,
    width: widthScreen,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    paddingTop: 8,
  },
  linearStyle: {
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
  },
  btnStyle: {
    height: 56,
    width: 83,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: getBottomSpace() + 100,
  },
  selectedImg: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  textBtn: {
    color: '#fff',
    fontFamily: FONTS.Montserrat.Bold,
    fontSize: 14,
    textTransform: 'uppercase',
  },
});
