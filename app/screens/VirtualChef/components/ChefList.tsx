import React, {memo, useCallback, useState} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import RecipeSuggest from './RecipeSuggest';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SvgArrowNext from 'app/svgs/SignUp/SvgArrowNext';
import FONTS from 'app/ultis/fonts';

interface ChefListProps {
  list: any[];
  onItem: () => void;
}

const ChefList = memo((props: ChefListProps) => {
  const [heightItem, setHeight] = useState(42.5);
  const onLayout = useCallback((e) => {
    setHeight(e.nativeEvent.layout.height);
  }, []);

  const scrollHeight = {
    height: heightItem + 66,
  };

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={[styles.scroll, scrollHeight]}
        contentContainerStyle={styles.contentContainerStyle}>
        {props.list.map((item, index) => {
          return (
            <RecipeSuggest
              index={index}
              image={item.image}
              text={item.text}
              onLayout={onLayout}
              onItem={props.onItem}
            />
          );
        })}
      </ScrollView>
      <View style={styles.btnContent}>
        <TouchableOpacity style={styles.touchViewAll}>
          <Text style={styles.txtTouch}>View all match</Text>
          <SvgArrowNext color={'#7D8699'} />
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default ChefList;

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 24,
  },
  contentContainerStyle: {
    justifyContent: 'flex-end',
    paddingRight: 16,
    paddingTop: 42,
  },
  btnContent: {
    height: 58,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  touchViewAll: {
    marginBottom: 40,
    marginRight: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  txtTouch: {
    color: '#FE9870',
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Regular,
  },
});
