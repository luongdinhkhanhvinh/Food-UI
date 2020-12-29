import {memo, useCallback} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FONTS from'app/ultis/fonts';
import arrayNutrition from '../../help/arrayNutrition';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import SvgArrowHeader from 'app/svgs/SvgArrowHeader';

const nutritionDetail = [
  {
    id: '0',
    name: 'Energy',
    value: '1883 kJ',
  },
  {
    id: '11',
    name: 'Calories',
    value: '450 cals',
  },
  {
    id: '1',
    name: 'Fat',
    value: '15 g',
    details: [
      {id: '2', name: 'Saturated fat', value: '4 g', isDetail: true},
      {id: '3', name: 'Unsaturated fat', value: '6 g', isDetail: true},
    ],
  },
  {
    id: '4',
    name: 'Carbs',
    value: '35 g',
    details: [
      {id: '5', name: 'Fiber', value: '6 g', isDetail: true},
      {id: '6', name: 'Sugars', value: '6 g', isDetail: true},
    ],
  },
  {id: '7', name: 'Protein', value: '40 g'},
  {
    id: '8',
    name: 'Others',
    value: '10.4 g',
    details: [
      {id: '9', name: 'Cholesterol', value: '130 mg', isDetail: true},
      {id: '10', name: 'Sodium', value: '520 mg', isDetail: true},
    ],
  },
];
const NutritionDetail = memo(() => {
  const nutrition = arrayNutrition(nutritionDetail);
  const _renderItem = useCallback(({item}) => {
    let styleName;
    let styleMeasure;
    let styleUnit;
    if (item.isDetail) {
      styleName = styles.txtNameSmall;
      styleMeasure = styles.txtMeasureSmall;
      styleUnit = styles.unitSmall;
    } else {
      styleName = styles.txtName;
      styleMeasure = styles.txtMeasure;
      styleUnit = styles.unit;
    }
    return (
      <View style={styleUnit}>
        <Text style={styleName}>{item.name}</Text>
        <Text style={styleMeasure}>{item.value} </Text>
      </View>
    );
  }, []);
  const _renderFooter = useCallback(() => {
    return (
      <Text style={styles.txtExplain}>
        Due to the different suppliers we purchase our products from,
        nutritional facts per meal can vary from the website to what is received
        in the delivered box, depending on your region.
      </Text>
    );
  }, []);
  const _renderHeader = useCallback(() => {
    return <Text style={styles.measure}>/ per serving</Text>;
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={nutrition}
        renderItem={_renderItem}
        ListHeaderComponent={_renderHeader}
        ListFooterComponent={_renderFooter}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentFlatList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
});
export default NutritionDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 24,
  },
  measure: {
    color: '#1D1E2C',
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'right',
    marginTop: 24,
  },
  unit: {
    flexDirection: 'row',
    marginTop: 23,
  },
  txtName: {
    color: '#1D1E2C',
    flex: 1,
    fontFamily: FONTS.Montserrat.Medium,
    fontSize: 16,
    lineHeight: 20,
  },
  txtMeasure: {
    color: '#1D1E2C',
    flex: 1,
    fontFamily: FONTS.Montserrat.Medium,
    fontSize: 16,
    textAlign: 'right',
    lineHeight: 20,
  },
  unitSmall: {
    flexDirection: 'row',
    marginTop: 15,
  },
  txtNameSmall: {
    color: '#1D1E2C',
    flex: 1,
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    lineHeight: 17,
  },
  txtMeasureSmall: {
    color: '#1D1E2C',
    flex: 1,
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    textAlign: 'right',
    lineHeight: 17,
  },
  txtExplain: {
    color: '#7D8699',
    fontSize: 12,
    lineHeight: 21,
    fontFamily: FONTS.Montserrat.Regular,
    marginTop: 25,
  },
  contentFlatList: {
    paddingBottom: getBottomSpace() + 24,
  },
});
