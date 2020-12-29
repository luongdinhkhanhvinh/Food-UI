import React, {memo, useCallback, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonLinear from'app/components/ButtonLinear';
import {heightScreen} from'app/ultis/layout';
import {useHeaderHeight} from '@react-navigation/stack';
import FONTS from'app/ultis/fonts';

interface PropsNoData {
  svgName: any;
  title: string;
  content: string;
  nameButton: string;
}

const Nodata = memo((props: PropsNoData) => {
  const headerHeight = useHeaderHeight();
  const stylesEmpty = {height: heightScreen - headerHeight - 200};

  return (
    <View style={styles.container}>
      <View style={[styles.noDataContainer, stylesEmpty]}>
        {props.svgName}
        <Text style={styles.headerNodata}>{props.title} </Text>
        <Text style={styles.contentNodata}>{props.content}</Text>
        {props.nameButton ? (
          <ButtonLinear
            onPress={() => {}}
            title={props.nameButton}
            style={styles.btn}
          />
        ) : null}
      </View>
    </View>
  );
});

export default Nodata;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7FB',
    flex: 1,
  },
  btn: {
    paddingTop: 24,
    width: '70%',
  },
  noDataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerNodata: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 16,
    paddingTop: 64,
  },
  contentNodata: {
    paddingTop: 24,
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 24,
  },
});
