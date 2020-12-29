import React, {memo} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import FONTS from'app/ultis/fonts';

interface PropsChoose {
  svgLeft: any;
  nameLeft: string;
  svgRight: any;
  nameRight: any;
  onPressRight: () => void;
  onPressLeft: () => void;
}

const ModalChoose = memo((props: PropsChoose) => {
  return (
    <View style={styles.viewFooter}>
      <View style={styles.viewContainerFooter}>
        <TouchableOpacity
          style={styles.touchOpacityFooter}
          onPress={props.onPressLeft}>
          <Text style={styles.textContentFooter}>{props.nameLeft}</Text>
          {props.svgLeft}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchOpacityFooterRight}
          onPress={props.onPressRight}
          activeOpacity={0.5}>
          <Text style={styles.textContentFooter}>{props.nameRight}</Text>
          {props.svgRight}
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default ModalChoose;

const styles = StyleSheet.create({
  viewFooter: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainerFooter: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  touchOpacityFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    borderRightWidth: 1,
    borderRightColor: '#E5E5E5',
    paddingHorizontal: 16,
  },
  textContentFooter: {
    paddingVertical: 12,
    fontSize: 14,
    fontWeight: '500',
    paddingRight: 8,
    fontFamily: FONTS.Montserrat.Regular,
  },
  touchOpacityFooterRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderRightWidth: 1,
    borderRightColor: '#E5E5E5',
    paddingHorizontal: 16,
  },
});
