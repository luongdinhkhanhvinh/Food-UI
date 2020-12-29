import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';
import SvgIconInfo from'app/svgs/SignUp/SvgIconInfo';
import ItemSelect from'app/screens/SignUpSelectPlan/components/ItemSelect';
import SvgIcon2People from'app/svgs/SignUp/SvgIcon2People';
import SvgIcon4People from'app/svgs/SignUp/SvgIcon4People';
import SvgClassicPlan from'app/svgs/SignUp/SvgClassicPlan';
import SvgVegetariran from'app/svgs/SignUp/SvgVegetariran';
import ItemBill from './components/ItemBill';
import SvgLine from'app/svgs/SignUp/SvgLine';
import ButtonLinear from'app/components/ButtonLinear';
import FONTS from'app/ultis/fonts';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {widthScreen} from 'app/ultis/layout';

const SelectPlan = memo(() => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  const [plan, setPlan] = useState(0);
  const [isContinue, setContinue] = useState(false);

  const onSelect = useCallback((num) => {
    setSelected(num);
  }, []);
  const onPressContinue = useCallback(() => {
    navigation.navigate(ROUTES.Explorer_OnTheMenu);
  }, [navigation]);
  const onPlanSelect = useCallback((num) => {
    setPlan(num);
  }, []);
  const onInfo = useCallback(() => {}, []);
  console.log('selected', selected);
  useEffect(() => {
    if (plan !== 0 && selected !== 0) {
      setContinue(true);
    } else setContinue(false);
  }, [plan, selected]);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={[styles.titleView, {marginTop: 24}]}>
          <Text style={styles.txtTitle}>How many people do you cook for?</Text>
          <TouchableOpacity onPress={onInfo}>
            <SvgIconInfo />
          </TouchableOpacity>
        </View>
        <View style={styles.selectView}>
          <ItemSelect
            title={'2-Person'}
            onPress={onSelect}
            num={1}
            isChoose={selected === 1}>
            <SvgIcon2People />
          </ItemSelect>
          <ItemSelect
            title={'Family Box'}
            onPress={onSelect}
            num={2}
            isChoose={selected === 2}>
            <SvgIcon4People />
          </ItemSelect>
        </View>
        <View style={[styles.titleView, {marginTop: 24}]}>
          <Text style={styles.txtTitle}>
            Which plan best fits your lifestyle?
          </Text>
          <TouchableOpacity onPress={onInfo}>
            <SvgIconInfo />
          </TouchableOpacity>
        </View>
        <View style={styles.selectView}>
          <ItemSelect
            title={'Classic Plan'}
            onPress={onPlanSelect}
            num={1}
            isChoose={plan === 1}>
            <SvgClassicPlan />
          </ItemSelect>
          <ItemSelect
            title={'Vegetariran'}
            onPress={onPlanSelect}
            num={2}
            isChoose={plan === 2}>
            <SvgVegetariran />
          </ItemSelect>
        </View>
        <Text style={styles.txtPrices}>Prices</Text>
        <Text style={styles.txtExplain}>
          The 2-Person Box comes with perfect dinner for two persons.
        </Text>
        <View style={styles.billView}>
          <ItemBill />
          <SvgLine />
          <ItemBill />
          <SvgLine />
          <ItemBill />
        </View>
      </ScrollView>
      {isContinue ? (
        <View style={styles.btnView}>
          <ButtonLinear
            title={'START WITH NEW BOX'}
            onPress={onPressContinue}
          />
        </View>
      ) : null}
    </View>
  );
});

export default SelectPlan;

const styles = StyleSheet.create({
  txtTitle: {
    color: '#1D1E2C',
    fontSize: 14,
    fontFamily: FONTS.Montserrat.Regular,
    marginRight: 4,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  selectView: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  container: {
    backgroundColor: '#F7F7FB',
    paddingHorizontal: 24,
    justifyContent: 'center',
    flex: 1,
  },
  txtPrices: {
    color: '#1D1E2C',
    fontSize: 20,
    lineHeight: 24,
    fontFamily: FONTS.Montserrat.Medium,
    marginBottom: 4,
  },
  txtExplain: {
    color: '#1D1E2C',
    fontSize: 14,
    lineHeight: 24,
    fontFamily: FONTS.Montserrat.Regular,
  },
  billView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: 16,
    paddingBottom: getBottomSpace() + 120,
  },
  btnView: {
    position: 'absolute',
    bottom: 0,
    width: widthScreen,
    alignItems: 'center',
    paddingBottom: getBottomSpace() + 16,
    paddingHorizontal: 24,
  },
});
