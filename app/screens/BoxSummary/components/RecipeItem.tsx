import React, {memo} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SvgOption from 'app/svgs/SvgOption';
import FONTS from'app/ultis/fonts';
import {widthScreen} from 'app/ultis/layout';
interface RIProps {
  img: ImageSourcePropType;
  recipeName: string;
  numServing: number;
}
const RecipeItem = memo((props: RIProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={props.img} style={styles.img} />
      <View style={styles.info}>
        <View style={styles.flexRow}>
          <Text style={styles.txtName}>{props.recipeName}</Text>
          <TouchableOpacity style={styles.btnOption}>
            <SvgOption />
          </TouchableOpacity>
        </View>
        <Text style={styles.txtNumServing}>{props.numServing} serving</Text>
      </View>
    </TouchableOpacity>
  );
});

export default RecipeItem;
const styles = StyleSheet.create({
  img: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: widthScreen - 48,
    marginBottom: 16,
  },
  info: {
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 16,
  },
  flexRow: {
    flexDirection: 'row',
  },
  txtName: {
    color: '#1D1E2C',
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Medium,
    flex: 1,
  },
  btnOption: {
    padding: 4,
    marginLeft: 16,
  },
  txtNumServing: {
    color: '#7D8699',
    fontSize: 12,
    lineHeight: 15,
    fontFamily: FONTS.Montserrat.Regular,
  },
});
