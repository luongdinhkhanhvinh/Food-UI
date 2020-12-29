import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from 'app/ultis/colors/index';

interface Props {
  dotNumber?: number;
}

const DotItem = (props: Props) => {
  const renderDots = useCallback(() => {
    let dots = [];
    let dotNumber = props.dotNumber || 0;
    for (let i = 0; i < dotNumber; i++) {
      dots.push(<View style={styles.dotView} />);
    }
    return dots;
  }, [props.dotNumber]);
  return <View style={styles.container}>{renderDots()}</View>;
};
export default DotItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },

  dotView: {
    height: 4,
    width: 4,
    borderRadius: 4,
    backgroundColor: colors.while,
    marginHorizontal: 4,
  },
});
