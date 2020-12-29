import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ROUTES from 'app/ultis/routes';
import OrderComplete from 'app/screens/OrderComplete';
import Upcoming from 'app/screens/UpComing/index';
import { StyleSheet } from 'react-native';
import SvgIconDate from 'app/svgs/Login/SvgIconDate';

import FONTS from 'app/ultis/fonts';

const Stack = createStackNavigator();

const UpCoMingNavigation = memo(() => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.Upcoming}
        component={Upcoming}
        options={{
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: FONTS.Montserrat.Regular,
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                style={styles.paddingRight}
                onPress={() => {
                  navigation.navigate('OrderCalendar');
                }}>
                <SvgIconDate />
              </TouchableOpacity>
            );
          },
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name={ROUTES.OrderCompleted}
        component={OrderComplete}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
});

export default UpCoMingNavigation;

const styles = StyleSheet.create({
  paddingRight: {
    paddingRight: 10,
  },
});
