import React, { memo } from 'react';
import ROUTES from 'app/ultis/routes';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SvgTabbarUpcoming from 'app/svgs/Tabbar/SvgTabbarUpcoming';
import SvgTabbarExploer from 'app/svgs/Tabbar/SvgTabbarExploer';
import SvgTabbarChef from 'app/svgs/Tabbar/SvgTabbarChef';
import SvgTabbarCommunity from 'app/svgs/Tabbar/SvgTabbarCommunity';
import SvgTabarProfile from 'app/svgs/Tabbar/SvgTabarProfile';
import ExplorerNavigation from 'app/navigation/ExplorerNavigation';
import CommunityNavigation from 'app/navigation/CommunityNavigation';
import ProfileNavigation from 'app/navigation/ProfileNavigation';
import UpCoMingNavigation from 'app/navigation/UpCoMingNavigation';
import FONTS from 'app/ultis/fonts';
import colors from 'app/ultis/colors';
import StackVirtualChef from 'app/screens/VirtualChef';

const Tab = createBottomTabNavigator();

const TabarNavigation = memo(() => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#0EAD69',
        inactiveTintColor: '#939393',
        showLabel: true,
        labelStyle: styles.labelStyle,
        style: styles.backgroundColor,
      }}>
      <Tab.Screen
        name={'Upcomings'}
        component={UpCoMingNavigation}
        options={{
          tabBarIcon: ({ color }) => <SvgTabbarUpcoming color={color} />,
          title: 'Upcoming',
        }}
      />
      <Tab.Screen
        name={ROUTES.Explorer}
        component={ExplorerNavigation}
        options={{
          tabBarIcon: ({ color }) => <SvgTabbarExploer color={color} />,
          title: 'Explorer',
        }}
      />
      <Tab.Screen
        name={ROUTES.VirtualChef}
        component={StackVirtualChef}
        options={{
          tabBarIcon: ({ color }) => <SvgTabbarChef color={color} />,
          title: 'Virtual Chef',
        }}
      />
      <Tab.Screen
        name={ROUTES.Community}
        component={CommunityNavigation}
        options={{
          tabBarIcon: ({ color }) => <SvgTabbarCommunity color={color} />,
          title: 'Community',
        }}
      />
      <Tab.Screen
        name={ROUTES.Profile}
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <>
              <SvgTabarProfile color={color} />
              <View style={styles.numberNotificationView}>
                <Text style={styles.numberNotification}>3</Text>
              </View>
            </>
          ),
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
});

export default TabarNavigation;

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 10,
  },
  numberNotificationView: {
    position: 'absolute',
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    top: 2,
  },
  numberNotification: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 12,
    color: colors.while,
  },
  backgroundColor: {
    backgroundColor: '#ffff',
  },
});
