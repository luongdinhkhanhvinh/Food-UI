import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';

import ExplorerTab from 'app/screens/Explorer';
import SvgSearch from 'app/svgs/Explorer/SvgSearch';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FONTS from 'app/ultis/fonts';

const Stack = createStackNavigator();

const ExplorerNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.Explorer}
        component={ExplorerTab}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={styles.paddingRight}
              onPress={() => {
                navigation.navigate('Explorer_Search');
              }}>
              <SvgSearch />
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: '500',
            fontFamily: FONTS.Montserrat.Regular,
          },
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default ExplorerNavigation;

const styles = StyleSheet.create({
  paddingRight: {
    paddingRight: 16,
  },
});
