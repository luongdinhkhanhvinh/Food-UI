import React, { useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import PlanOrder from '../UpComing/Component/PlanOrder';
import Nodata from 'app/components/NoData';
import SvgNodata from 'app/svgs/SvgNodata';
import SvgOrderSmaill from 'app/svgs/Login/SvgOrderSmaill';
import SvgOrderSmall2 from 'app/svgs/Login/SvgOrderSmall2';
import SvgOrderSmall3 from 'app/svgs/Login/SvgOrderSmall3';
import SvgOrderSmall4 from 'app/svgs/Login/SvgOrderSmall4';
import SvgOrderSmail5 from 'app/svgs/Login/SvgOrderSmail5';
import keyExtractor from 'app/ultis/KeyExtractor';

const data = [
  {
    time: 'Fri, 6 Feb 8:00-7:00',
    numberChoose: 4,
    svgNameLeftTop: <SvgOrderSmall3 />,
    svgNameLeftBottom: <SvgOrderSmall2 />,
    svgNameRightTop: <SvgOrderSmall4 />,
    svgNameRightBottom: <SvgOrderSmail5 />,
    money: '$34.48',
  },
  {
    time: 'Tue, 28 Jan 8:00-7:00PM',
    numberChoose: 3,
    svgNameLeftTop: <SvgOrderSmaill />,
    svgNameLeftBottom: <SvgOrderSmall2 />,
    svgNameRightTop: <SvgOrderSmail5 />,
    svgNameRightBottom: null,
    money: '$29.32',
  },
  {
    time: 'Thu, 24 Jan 8:00-7:00PM',
    numberChoose: 3,
    svgNameLeftTop: <SvgOrderSmaill />,
    svgNameLeftBottom: <SvgOrderSmall2 />,
    svgNameRightTop: <SvgOrderSmail5 />,
    svgNameRightBottom: null,
    money: '$29.32',
  },
  {
    time: 'Thu, 18 Jan 8:00-7:00PM',
    numberChoose: 3,
    svgNameLeftTop: <SvgOrderSmaill />,
    svgNameLeftBottom: <SvgOrderSmall2 />,
    svgNameRightTop: <SvgOrderSmail5 />,
    svgNameRightBottom: <SvgOrderSmall3 />,
    money: '$29.32',
  },
  {
    time: 'Tue, 15 Jan 8:00-7:00PM',
    numberChoose: 3,
    svgNameLeftTop: <SvgOrderSmaill />,
    svgNameLeftBottom: <SvgOrderSmall2 />,
    svgNameRightTop: <SvgOrderSmail5 />,
    svgNameRightBottom: null,
    money: '$29.32',
  },
];

const PreviouslyCooked = () => {
  const _renderItemPlanOrder = useCallback(({ item }) => {
    return (
      <PlanOrder
        time={item.time}
        numberChoose={item.numberChoose}
        money={item.money}
        svgNameLeftTop={item.svgNameLeftTop}
        svgNameLeftBottom={item.svgNameLeftBottom}
        svgNameRightTop={item.svgNameRightTop}
        svgNameRightBottom={item.svgNameRightBottom}
      />
    );
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={_renderItemPlanOrder}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      style={styles.container}
      ListEmptyComponent={
        <Nodata
          svgName={<SvgNodata />}
          title={'No cooking yet! '}
          nameButton={'get cooking'}
          content={' Explorer menu and get a first cook.'}
        />
      }
    />
  );
};
export default PreviouslyCooked;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
});
