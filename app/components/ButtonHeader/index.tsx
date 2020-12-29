import React, {memo, useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SvgArrowBack from'app/svgs/SvgArrowBack';

interface ButtonHeader {
  children?: any;
  left?: boolean;
  right?: boolean;
  onPress?: () => void;
}

const ButtonHeader = memo((props: ButtonHeader) => {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    if (props.onPress) {
      props.onPress();
    } else {
      navigation.goBack();
    }
  }, [navigation, props]);
  const btnStyle = {
    marginLeft: props.left ? 16 : 0,
    marginRight: props.right ? 10 : 0,
    padding: 8,
  };
  return (
    <TouchableOpacity style={btnStyle} onPress={onPress}>
      {props.children ? props.children : <SvgArrowBack />}
    </TouchableOpacity>
  );
});
export default ButtonHeader;
