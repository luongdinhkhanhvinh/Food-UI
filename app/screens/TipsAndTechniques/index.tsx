import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from 'app/ultis/colors';

const TipsAndTechniques = memo(() => {
  return <View style={styles.container} />;
});

export default TipsAndTechniques;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
