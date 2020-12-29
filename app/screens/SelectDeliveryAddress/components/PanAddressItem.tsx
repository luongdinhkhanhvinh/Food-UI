import React, { memo, useCallback } from 'react';
import Animated from 'react-native-reanimated';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SvgEdit from 'app/svgs/SelectDeliveryAddress/SvgEdit';
import SvgDelete from 'app/svgs/SelectDeliveryAddress/SvgDelete';
import AddressItem from './AddressItem';
import FONTS from 'app/ultis/fonts';
import { usePanGestureHandler } from 'react-native-redash';
import { PanGestureHandler } from 'react-native-gesture-handler';
import useSwipeToShowBtn from '../../../hooks/useSwipeToShowBtn';

interface PanAddressProps {
  addressName: string;
  addressDetail: string;
  isCheck: boolean;
  default?: boolean;
  onPress: (id: string) => void;
  num: string;
  onDelete: (id: string) => void;
  onEdit: () => void;
  children?: any;
}

const widthUndergroundButton = -152;
const snapPoints = [widthUndergroundButton, 0];

const PanAddressItem = memo((props: PanAddressProps) => {
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();

  const onDelete = useCallback(() => {
    props.onDelete && props.onDelete(props.num);
  }, [props.onDelete]);
  const onPress = useCallback((num) => {
    props.onPress(num);
  }, []);
  const [trans] = useSwipeToShowBtn(snapPoints, translation, velocity, state);
  return (
    <View style={styles.container}>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btnEdit}>
          <SvgEdit />
          <Text style={styles.txtBtn}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnDelete} onPress={onDelete}>
          <SvgDelete />
          <Text style={styles.txtBtn}>Delete</Text>
        </TouchableOpacity>
      </View>
      <PanGestureHandler minDist={20} {...gestureHandler}>
        <Animated.View style={{ transform: [{ translateX: trans }] }}>
          <>
            {props.children ? (
              props.children
            ) : (
              <AddressItem
                addressName={props.addressName}
                addressDetail={props.addressDetail}
                isCheck={props.isCheck}
                onPress={onPress}
                num={props.num}
                default={props.default}
              />
            )}
          </>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
});

export default PanAddressItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    marginBottom: 16,
    borderRadius: 12,
  },
  btnView: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    height: '100%',
  },
  btnEdit: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 8,
    paddingLeft: 16,
  },
  btnDelete: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 24,
    paddingLeft: 8,
  },
  txtBtn: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 15,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
    width: 50,
    marginTop: 8,
  },
});
