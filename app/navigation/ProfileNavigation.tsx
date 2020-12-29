import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from 'app/screens/Profile';
import ROUTES from 'app/config/routes';
const Stack = createStackNavigator();

const ProfileNavigation = memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.Profile}
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
});

export default ProfileNavigation;
