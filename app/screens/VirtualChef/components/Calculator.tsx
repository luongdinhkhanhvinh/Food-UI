import React, {memo} from 'react';
import {Text, View} from 'react-native';

const Calculator = memo(() => {
  return (
    <View style={{width: '90%', height: 200, backgroundColor: 'red'}}>
      <Text>View Calculator</Text>
    </View>
  );
});

export default Calculator;
