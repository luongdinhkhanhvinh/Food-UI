import React, {memo, useCallback, useState} from 'react';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {StyleSheet, Text, View} from 'react-native';
import ButtonLinear from'app/components/ButtonLinear';
import {widthScreen} from 'app/ultis/layout';
import SvgSub from'app/svgs/SignUp/SvgSub';
import SvgAdd from'app/svgs/SignUp/SvgAdd';
import FONTS from'app/ultis/fonts';
import SvgBookMark from'app/svgs/Explorer/SvgBookMark';

interface PropsBottomBtnView {
  IsExplorer: boolean;
}

const BottomBtnView = memo((props: PropsBottomBtnView) => {
  const [numAdded, setNum] = useState(0);

  const onAdd = useCallback(() => {
    setNum(numAdded + 1);
  }, [numAdded]);
  const onSub = useCallback(() => {
    if (numAdded > 0) {
      setNum(numAdded - 1);
    } else {
      return;
    }
  }, [numAdded]);
  const onAddToBox = useCallback(() => {
    setNum(numAdded + 1);
  }, [numAdded]);
  return props.IsExplorer ? (
    <View style={styles.container2}>
      <View style={styles.viewFooter}>
        <View style={styles.viewSvg}>
          <SvgBookMark />
        </View>
        <ButtonLinear
          onPress={onAddToBox}
          title={'get cooking'}
          style={styles.btnExplorer}
        />
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      {numAdded === 0 ? (
        <ButtonLinear
          onPress={onAddToBox}
          title={'add to box'}
          style={styles.btn}
        />
      ) : (
        <View style={styles.addedView}>
          <ButtonLinear onPress={onSub} style={styles.btnAdd}>
            <SvgSub />
          </ButtonLinear>
          <View style={styles.addedInfo}>
            <Text style={styles.addedNumber}>{numAdded}</Text>
            <Text style={styles.txtAddedUnit}>added</Text>
          </View>
          <ButtonLinear onPress={onAdd} style={styles.btnAdd}>
            <SvgAdd />
          </ButtonLinear>
        </View>
      )}
    </View>
  );
});
export default BottomBtnView;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    paddingTop: 16,
    width: widthScreen,
    backgroundColor: '#fff',
    paddingBottom: getBottomSpace() + 8,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  container2: {
    position: 'absolute',
    bottom: 0,
    width: widthScreen,
    backgroundColor: '#fff',
    paddingBottom: getBottomSpace() + 8,
    shadowColor: '#000',
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  btnExplorer: {
    width: '80%',
    borderRadius: 25,
    right: 16,
    position: 'absolute',
    paddingTop: 16,
  },
  btn: {
    width: '100%',
    borderRadius: 25,
  },
  addedView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnAdd: {
    width: widthScreen / 4.5,
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
  viewFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  viewSvg: {
    backgroundColor: '#E5E5E5',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
  },
});
