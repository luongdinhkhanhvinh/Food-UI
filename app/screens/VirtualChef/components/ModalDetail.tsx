import React, {memo, useCallback, useState} from 'react';
import {
  View,
  Modal,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {widthScreen, heightScreen} from 'app/ultis/layout';
import FONTS from 'app/ultis/fonts';
import RecipeProps from 'app/screens/RecipeDetail/components/RecipeProps';
import InactiveRate from 'app/components/InactiveRate';
import {data} from 'app/screens/OnTheMenu/OnTheMenu';
import SvgCookTime from 'app/svgs/SignUp/SvgCookTime';
import SvgCalories from 'app/svgs/Login/SvgCalories';
import SvgServingSmall from 'app/svgs/SvgServingSmall';
import SvgGlobalSmall from 'app/svgs/SvgGlobalSmall';
import ButtonLinear from 'app/components/ButtonLinear';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';
import SvgSub from 'app/svgs/SignUp/SvgSub';
import SvgAdd from 'app/svgs/SignUp/SvgAdd';
interface ModalProps {
  item?: any;
  isVisibale: boolean;
  onClose: () => void;
}
const ModalDetail = memo((props: ModalProps) => {
  const {isVisibale, onClose} = props;
  const item = data[0];
  const navigation = useNavigation();
  const onDetail = useCallback(() => {
    navigation.navigate(ROUTES.RecipeDetail);
    onClose();
  }, [navigation]);

  const [number, setNumber] = useState(0);

  const onAdd = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  const onSub = useCallback(() => {
    if (number <= 0) {
      return;
    }
    setNumber(number - 1);
  }, [number]);

  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={isVisibale}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeArea} onPress={onClose} />
          <View style={styles.detailView}>
            <Image
              source={require('app/assets/SignUp/img_recipe.png')}
              style={styles.image}
            />
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
                    <SvgCookTime />
                  </RecipeProps>
                  <RecipeProps unit={'Mexico Cuisine'}>
                    <SvgGlobalSmall />
                  </RecipeProps>
                </View>
                <View style={styles.recipeTimeCal}>
                  <RecipeProps num={item.cal} unit={'cal/serving'}>
                    <SvgCalories />
                  </RecipeProps>
                  <RecipeProps num={2} unit={'serving'}>
                    <SvgServingSmall />
                  </RecipeProps>
                </View>
              </View>
              {number <= 0 ? (
                <ButtonLinear
                  title={'Add to box'}
                  style={styles.btnStyle}
                  onPress={onAdd}
                />
              ) : (
                <View style={styles.addedView}>
                  <ButtonLinear onPress={onSub} style={styles.btnAdd}>
                    <SvgSub />
                  </ButtonLinear>
                  <View style={styles.addedInfo}>
                    <Text style={styles.addedNumber}>{number}</Text>
                    <Text style={styles.txtAddedUnit}>added</Text>
                  </View>
                  <ButtonLinear onPress={onAdd} style={styles.btnAdd}>
                    <SvgAdd />
                  </ButtonLinear>
                </View>
              )}
              <TouchableOpacity style={styles.touchableText} onPress={onDetail}>
                <Text style={styles.txtViewDetail}>View Detail</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
});

export default ModalDetail;
const styles = StyleSheet.create({
  container: {
    width: widthScreen,
    justifyContent: 'center',
    alignItems: 'center',
    height: heightScreen,
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
    fontSize: 18,
    fontFamily: FONTS.Montserrat.Bold,
    color: '#1D1E2C',
    lineHeight: 24,
  },
  rate: {
    paddingTop: 12,
    paddingBottom: 16,
    paddingHorizontal: 24,
  },
  star: {
    flexDirection: 'row',
    marginTop: 8,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(29, 30, 44, 0.8)',
  },
  detailView: {
    borderRadius: 12,
    backgroundColor: '#fff',
    width: (widthScreen / 375) * 343,
  },
  image: {
    width: (widthScreen / 375) * 343,
    height: (widthScreen / 375) * 248,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  touchableText: {
    marginTop: 24,
    alignSelf: 'center',
  },
  txtViewDetail: {
    color: '#FE9870',
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Regular,
  },
  closeArea: {
    width: widthScreen,
    height: heightScreen,
    position: 'absolute',
  },
  btnStyle: {
    marginTop: 24,
  },
  addedView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
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
  txtAddedUnit: {
    fontSize: 12,
    marginTop: -6,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
  },
  btnAdd: {
    width: widthScreen / 4.5,
  },
});
