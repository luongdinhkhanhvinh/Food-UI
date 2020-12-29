import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { useSelector } from 'react-redux';
import { navigationRef } from './NavigationService';
import Login from 'app/screens/Login';
// import ThemeController from '../components/ThemeController';
import { StatusBar } from 'react-native';
// import { ILoginState } from 'app/models/reducers/login';
import ROUTES from 'app/ultis/routes';
import Walkthrough from 'app/screens/Walkthrough';
import TabarNavigation from './TabarNavigation';
import ForgotPassword from '../screens/LoginForgotPassword';
import HeaderTitle from 'app/components/HeaderTitle';
import ButtonHeader from 'app/components/ButtonHeader';
import ProfileAddNewAddress from 'app/screens/ProfileAddNewAddress';
import RecoveryPassword from 'app/screens/LoginRecoveryPassword';
import UpdatedPassword from 'app/screens/LoginUpdatedPassword';
import RegisterAccount from 'app/screens/SignUpRegisterAccount';
import SelectPlan from 'app/screens/SignUpSelectPlan';
import ExplorerSearch from 'app/screens/ExplorerSearch';
import OnTheMenu from 'app/screens/OnTheMenu/OnTheMenu';
import SvgFilter from '../svgs/SignUp/SvgFilter';
import RecipeDetail from '../screens/RecipeDetail';
import SvgOptionHeader from 'app/svgs/SvgOptionHeader';
import Filter from 'app/screens/Filter';
import SvgCloseLinear from 'app/svgs/SvgCloseLinear';
import BoxSummary from 'app/screens/BoxSummary';
import AddDeliveryAddress from 'app/screens/AddDeliveryAddress';
import HeaderTitleProgressBar from 'app/components/HeaderTitleProgressBar';
import SelectDeliveryAddress from 'app/screens/SelectDeliveryAddress';
import SvgAdd from 'app/svgs/SvgAdd';
import SeeAllTips from 'app/screens/SeeAllTips';
import PersonalInfo from 'app/screens/CheckoutPersonalInfo';
import PaymentMethod from 'app/screens/PaymentMethod';
import NewsNutritionDetail from 'app/screens/NewsNutritionDetail';
import PayWithCreditCard from 'app/screens/PayWithCreditCard';
import AddCreditCard from 'app/screens/AddNewCreditCard';
import OrderComplete from 'app/screens/OrderComplete';
import ProfileSettings from 'app/screens/ProfileSettings';
import ProfileOrderHistory from 'app/screens/ProfileOrderHistory';
import ProfileOrderHistoryDetail from 'app/screens/ProfileOrderHistoryDetail';
import MyProfile from '../screens/MyProfile';
import SvgEdit from 'app/svgs/SvgEdit';
import MyProfileEdit from 'app/screens/MyProfileEdit';
import SvgSave from 'app/svgs/ProfileEdit/SvgSave';
import NutritionDetail from 'app/screens/NutritionDetail';
import ProfileMyAddress from 'app/screens/ProfileMyAddress';
import ProfileInvite from 'app/screens/ProfileInvite';
import ProfilePaymentMethod from 'app/screens/ProfilePaymentMethod';
import ProfileSaveArticle from 'app/screens/ProfileSaveArticle';
import OrderDetail from 'app/screens/OrderDetail';
import OrderCalendar from 'app/screens/OrderCalendar';
const Stack = createStackNavigator();

// interface IState {
//   loginReducer: ILoginState;
// }

interface IProps {
  theme: Theme;
}

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  // const isLoggedIn = useSelector(
  //   (state: IState) => state.loginReducer.isLoggedIn,
  // );

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.Walkthrough}
          component={Walkthrough}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.Upcoming}
          component={TabarNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTES.Login}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.LoginForgotPassword}
          component={ForgotPassword}
          options={{
            headerTitle: () => <HeaderTitle title={'Forgot Password'} />,
            headerLeft: () => <ButtonHeader left={true} />,
          }}
        />
        <Stack.Screen
          name={ROUTES.ProfileAddNewAddress}
          component={ProfileAddNewAddress}
          options={{
            headerTitle: () => <HeaderTitle title={'New Delivery Address'} />,
            headerLeft: () => <ButtonHeader left={true} />,
          }}
        />
        <Stack.Screen
          name={ROUTES.LoginRecoveryPassword}
          component={RecoveryPassword}
          options={{
            headerTitle: () => <HeaderTitle title={'Recovery Password'} />,
            headerLeft: () => <ButtonHeader left={true} />,
          }}
        />
        <Stack.Screen
          name={ROUTES.LoginUpdatedPassword}
          component={UpdatedPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTES.RegisterAccount}
          component={RegisterAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.SelectPlan}
          component={SelectPlan}
          options={{
            headerStyle: {
              shadowColor: 'transparent',
            },
            headerTitle: () => <HeaderTitle title={'Select Plan'} />,
            headerLeft: () => <ButtonHeader left={true} />,
          }}
        />
        <Stack.Screen
          name={ROUTES.Explorer_Search}
          component={ExplorerSearch}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTES.Explorer_OnTheMenu}
          component={OnTheMenu}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={'On The Menu'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader
                right={true}
                onPress={() => {
                  navigation.navigate(ROUTES.Filter);
                }}>
                <SvgFilter />
              </ButtonHeader>
            ),
          })}
        />
        <Stack.Screen
          name={ROUTES.RecipeDetail}
          component={RecipeDetail}
          options={{
            headerTitle: () => <HeaderTitle title={'On The Menu'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader right={true} onPress={() => {}}>
                <SvgOptionHeader />
              </ButtonHeader>
            ),
          }}
        />
        <Stack.Screen
          name={ROUTES.Filter}
          component={Filter}
          options={({ navigation }) => ({
            headerLeft: () => undefined,
            headerTitle: () => <HeaderTitle title={'Filter'} />,
            headerRight: () => (
              <ButtonHeader
                right={true}
                onPress={() => {
                  navigation.pop();
                }}>
                <SvgCloseLinear />
              </ButtonHeader>
            ),
          })}
        />

        <Stack.Screen
          name={ROUTES.BoxSummary}
          component={BoxSummary}
          options={{
            headerTitle: () => <HeaderTitle title={'Box Summary'} />,
            headerLeft: () => <ButtonHeader left={true} />,
          }}
        />
        <Stack.Screen
          name={ROUTES.AddDeliveryAddress}
          component={AddDeliveryAddress}
          options={({ route }) => ({
            headerTitle: () => (
              <HeaderTitleProgressBar
                title={'New Delivery Address'}
                // @ts-ignore
                isNext={route.params?.isNext}
                // @ts-ignore
                step={route.params?.step}
              />
            ),
            headerLeft: () => <ButtonHeader left={true} />,
          })}
        />
        <Stack.Screen
          name={ROUTES.Checkout_SelectDeliveryAddress}
          component={SelectDeliveryAddress}
          options={({ navigation, route }) => ({
            headerTitle: () => (
              <HeaderTitleProgressBar
                title={'Delivery Address'}
                // @ts-ignore
                isNext={route.params && route.params.isNext}
                // @ts-ignore
                step={route.params?.step}
              />
            ),
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader
                right={true}
                onPress={() => {
                  navigation.navigate(ROUTES.AddDeliveryAddress, { step: 1 });
                }}>
                <SvgAdd />
              </ButtonHeader>
            ),
          })}
        />
        <Stack.Screen
          name={ROUTES.SeeAllTips}
          component={SeeAllTips}
          options={{
            headerTitle: () => <HeaderTitle title={'All Tips'} />,
            headerLeft: () => <ButtonHeader left={true} />,
          }}
        />
        <Stack.Screen
          name={ROUTES.PersonalInformation}
          component={PersonalInfo}
          options={({ route }) => ({
            headerTitle: () => (
              <HeaderTitleProgressBar
                title={'Personal Information'}
                // @ts-ignore
                isNext={route.params?.isNext}
                // @ts-ignore
                step={route.params?.step}
              />
            ),
            headerLeft: () => <ButtonHeader left={true} />,
          })}
        />
        <Stack.Screen
          name={ROUTES.SignUpPaymentMethod}
          component={PaymentMethod}
          options={({ route }) => ({
            headerTitle: () => (
              <HeaderTitleProgressBar
                title={'Payment Method'}
                // @ts-ignore
                isNext={route.params?.isNext}
                // @ts-ignore
                step={route.params?.step}
              />
            ),
            headerLeft: () => <ButtonHeader left={true} />,
          })}
        />
        <Stack.Screen
          name={ROUTES.NewsNutritionDetail}
          component={NewsNutritionDetail}
          options={{
            headerTitle: () => <HeaderTitle title={'Lifestyle'} />,
            headerLeft: () => <ButtonHeader left={true} />,
          }}
        />
        <Stack.Screen
          name={ROUTES.SelectCreditCard}
          component={PayWithCreditCard}
          options={({ navigation, route }) => ({
            headerTitle: () => (
              <HeaderTitleProgressBar
                title={'Pay with Credit Card'}
                // @ts-ignore
                isNext={route.params?.isNext}
                // @ts-ignore
                step={route.params?.step}
              />
            ),
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader
                right={true}
                onPress={() => {
                  navigation.navigate(ROUTES.AddNewCard, { step: 3 });
                }}>
                <SvgAdd />
              </ButtonHeader>
            ),
          })}
        />
        <Stack.Screen
          name={ROUTES.AddNewCard}
          component={AddCreditCard}
          options={({ route }) => ({
            headerTitle: () => (
              <HeaderTitleProgressBar
                title={'Payment Method'}
                // @ts-ignore
                isNext={route.params?.isNext}
                // @ts-ignore
                step={route.params?.step}
              />
            ),
            headerLeft: () => <ButtonHeader left={true} />,
          })}
        />
        <Stack.Screen
          name={ROUTES.ProfileOrderHistory}
          component={ProfileOrderHistory}
          options={{
            headerTitle: () => <HeaderTitle title={'Order History'} />,
            headerLeft: () => <ButtonHeader left={true} />,
          }}
        />
        <Stack.Screen
          name={ROUTES.OrderCompleted}
          component={OrderComplete}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.ProfileSettings}
          component={ProfileSettings}
          options={{
            headerTitle: () => <HeaderTitle title={'Setting'} />,
            headerLeft: () => <ButtonHeader left={true} />,
          }}
        />
        <Stack.Screen
          name={ROUTES.ProfileOrderHistoryDetail}
          component={ProfileOrderHistoryDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTES.MyProfile}
          component={MyProfile}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={'My Profile'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader
                right={true}
                onPress={() => {
                  navigation.navigate(ROUTES.MyProfileEdit);
                }}>
                <SvgEdit />
              </ButtonHeader>
            ),
          })}
        />
        <Stack.Screen
          name={ROUTES.MyProfileEdit}
          component={MyProfileEdit}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={'Edit Profile'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader
                right={true}
                onPress={() => {
                  navigation.goBack();
                }}>
                <SvgSave />
              </ButtonHeader>
            ),
          })}
        />
        <Stack.Screen
          name={ROUTES.NutritionDetail}
          component={NutritionDetail}
          options={({}) => ({
            headerTitle: () => <HeaderTitle title={'Nutrition Detail'} />,
            headerLeft: () => <ButtonHeader left={true} />,
          })}
        />
        <Stack.Screen
          name={ROUTES.ProfileMyAddress}
          component={ProfileMyAddress}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={'Delivery Address'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader
                right={true}
                onPress={() => {
                  navigation.navigate(ROUTES.ProfileAddNewAddress);
                }}>
                <SvgAdd />
              </ButtonHeader>
            ),
          })}
        />
        <Stack.Screen
          name={ROUTES.ProfileInvite}
          component={ProfileInvite}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTES.ProfilePaymentMethod}
          component={ProfilePaymentMethod}
          options={{
            headerTitle: () => <HeaderTitle title={'Payment Method'} />,
            headerLeft: () => <ButtonHeader left={true} />,
          }}
        />
        <Stack.Screen
          name={ROUTES.ProfileSaveArticle}
          component={ProfileSaveArticle}
          options={{
            headerTitle: () => <HeaderTitle title={'Saved Article'} />,
            headerLeft: () => <ButtonHeader left={true} />,
          }}
        />
        <Stack.Screen
          name={ROUTES.OrderDetail}
          component={OrderDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTES.OrderCalendar}
          component={OrderCalendar}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
