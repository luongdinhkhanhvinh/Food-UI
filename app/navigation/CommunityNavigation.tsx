import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderTitle from 'app/components/HeaderTitle';
import ROUTES from 'app/ultis/routes';
import ButtonHeader from 'app/components/ButtonHeader';
import SvgSearch from 'app/svgs/SvgSearch';
import NewsNutritionList from 'app/screens/NewsNutritionList';
import NutritionDetail from 'app/screens/NutritionDetail';
import CommunityTab from 'app/screens/Community';

const Stack = createStackNavigator();

const CommunityNavigation = memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.CommunityTab}
        component={CommunityTab}
        options={{
          headerStyle: {
            shadowColor: 'transparent',
          },
          headerTitle: () => <HeaderTitle title={'Community'} />,
          headerRight: () => (
            <ButtonHeader right={true} onPress={() => {}}>
              <SvgSearch />
            </ButtonHeader>
          ),
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name={ROUTES.NewsNutritionList}
        component={NewsNutritionList}
        options={{
          headerTitle: () => <HeaderTitle title={'Lifestyle'} />,
          headerLeft: () => <ButtonHeader left={true} />,
        }}
      />
      <Stack.Screen
        name={ROUTES.NutritionDetail}
        component={NutritionDetail}
        options={{
          headerTitle: () => <HeaderTitle title={'Nutrition Detail'} />,
          headerLeft: () => <ButtonHeader left={true} />,
        }}
      />
    </Stack.Navigator>
  );
});

export default CommunityNavigation;
