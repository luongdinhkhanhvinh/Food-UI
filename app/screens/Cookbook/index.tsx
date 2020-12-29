import React, {memo} from 'react';
import {StyleSheet, Text, View, ScrollView, YellowBox} from 'react-native';

import ItemCookbook from '../Cookbook/Component/ItemCookbook';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import SvgIconArrowRight from 'app/svgs/Login/SvgIconArrowRight';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SvgSpring from 'app/svgs/Cookbook/SvgSpring';
import SvgSummer from 'app/svgs/Cookbook/SvgSummer';
import SvgAmumu from 'app/svgs/Cookbook/SvgAutumn';
import SvgWinter from 'app/svgs/Cookbook/SvgWinter';
import SvgBeef from 'app/svgs/Cookbook/SvgBeef';
import SvgFish from 'app/svgs/Cookbook/SvgFish';
import SvgLamb from 'app/svgs/Cookbook/SvgLamb';
import SvgPork from 'app/svgs/Cookbook/SvgPork';
import Svgpoultry from 'app/svgs/Cookbook/Svgpoultry';
import SvgVegetable from 'app/svgs/Cookbook/SvgVegetable';
import SvgShellFish from 'app/svgs/Cookbook/SvgShellFish';
import FONTS from'app/ultis/fonts';

const dataSeson = [
  {name: 'Spring', svgName: <SvgSpring />},
  {name: 'Summer', svgName: <SvgSummer />},
  {name: 'Autumn', svgName: <SvgAmumu />},
  {name: 'Winter', svgName: <SvgWinter />},
];
const dataMain = [
  {name: 'Beef', svgName: <SvgBeef />},
  {name: 'Fish', svgName: <SvgFish />},
  {name: 'Lamb', svgName: <SvgLamb />},
  {name: 'Pork', svgName: <SvgPork />},
  {name: 'Poultry', svgName: <Svgpoultry />},
  {name: 'Shellfish', svgName: <SvgShellFish />},
  {name: 'Vegetarian', svgName: <SvgVegetable />},
];
const Contry = [{name: 'African'}, {name: 'American'}, {name: 'Asia'}];
console.disableYellowBox = true;
const Cookbook = memo(() => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.flex}>
        <Text style={styles.textHeader}>Main Ingredients</Text>
        <View style={styles.viewContent}>
          {dataMain.map((item, index) => {
            return (
              <ItemCookbook
                svgName={item.svgName}
                name={item.name}
                key={index}
              />
            );
          })}
        </View>
        <Text style={styles.textHeader}>Season</Text>
        <View style={styles.viewContent}>
          {dataSeson.map((item, index) => {
            return (
              <ItemCookbook
                svgName={item.svgName}
                name={item.name}
                key={index}
              />
            );
          })}
        </View>
        <Text style={styles.textHeader}>Cuisine</Text>
        <View style={styles.footer}>
          {Contry.map((item, index) => {
            return <Country name={item.name} key={index} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
});
export default Cookbook;

interface PropsCountry {
  name?: string;
}
const Country = memo((props: PropsCountry) => {
  return (
    <>
      <TouchableOpacity style={styles.containerCountry}>
        <Text style={styles.textNameCountry}>{props.name}</Text>
        <SvgIconArrowRight />
      </TouchableOpacity>
      <View style={styles.line} />
    </>
  );
});

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#F7F7FB',
  },
  textHeader: {
    fontFamily: FONTS.Montserrat.Regular,
    paddingTop: 40,
    fontSize: 16,
    fontWeight: '500',
  },
  viewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 24,
  },
  footer: {
    marginTop: 16,
    backgroundColor: '#fff',
    shadowColor: 'rgba(141, 151, 158, 0.2)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    borderRadius: 8,
  },
  containerCountry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  textNameCountry: {
    paddingVertical: 16,
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
  },
  line: {
    height: 1,
    marginLeft: 16,
    backgroundColor: '#F7F7FB',
  },
});
