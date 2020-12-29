import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import FONTS from'app/ultis/fonts';
import colors from 'app/ultis/colors/index';

interface Props {
  img: any;
  title: string;
}

const NurtureItem = (props: Props) => {
  return (
    <TouchableOpacity>
      <ImageBackground style={styles.nurtureItem} source={props.img}>
        <Text style={styles.txtTitle}>{props.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default NurtureItem;

const styles = StyleSheet.create({
  nurtureItem: {
    marginRight: 16,
    width: 128,
    height: 167,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 12,
  },
  txtTitle: {
    fontFamily: FONTS.Montserrat.Bold,
    fontSize: 16,
    color: colors.while,
    textTransform: 'uppercase',
    marginTop: 16,
    marginLeft: 16,
  },
});
