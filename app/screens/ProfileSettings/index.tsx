import React, {memo} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SvgIconArrowRight from'app/svgs/Login/SvgIconArrowRight';
import RowTextArrow from'app/screens/ProfileSettings/Component/RowTextArrow';
import FONTS from'app/ultis/fonts';

const ProfileSettings = memo(() => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textLanguage}>Language </Text>
      <View style={styles.viewContentLanguage}>
        <Text style={styles.textNomal}>English</Text>
        <TouchableOpacity>
          <Text style={styles.textColor}>Change</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textNotification}>Notification</Text>
      <View style={styles.viewContentNoti}>
        <Text style={styles.textContentNoti}>Application Notifications</Text>
        <Switch value={true} trackColor={{false: '#EFEFEF', true: '#FE9870'}} />
      </View>
      <View style={styles.viewContentNoti}>
        <Text style={styles.textContentNoti}>Email Newsletters</Text>
        <Switch value={true} trackColor={{false: '#EFEFEF', true: '#FE9870'}} />
      </View>
      <View style={styles.viewContentNoti}>
        <Text style={styles.textContentNoti}>Special Offers</Text>
        <Switch value={true} trackColor={{false: '#EFEFEF', true: '#FE9870'}} />
      </View>
      <Text style={styles.textAboutWala}>About Wala </Text>
      <RowTextArrow name={'Privacy of Policy'} />
      <RowTextArrow name={'Term of Service'} />
      <RowTextArrow name={'Send Feedback'} />
      <RowTextArrow name={'Check for Update'} />
      <View style={styles.fotter}>
        <Text style={styles.textProfile}>Wala version 1.0.0.0</Text>
      </View>
    </ScrollView>
  );
});
export default ProfileSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  textLanguage: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 16,
    paddingTop: 32,
  },
  viewContentLanguage: {
    paddingTop: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textNomal: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    color: '#1D1E2C',
  },
  textColor: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    color: '#FE9870',
  },
  textNotification: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 16,
    paddingTop: 41,
  },
  viewContentNoti: {
    paddingTop: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContentNoti: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    color: '#1D1E2C',
  },
  textAboutWala: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 16,
    paddingTop: 43,
  },
  viewContentAboutUs: {
    paddingTop: 23,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContentAbouts: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    color: '#1D1E2C',
  },
  viewContentAboutUs2: {
    paddingTop: 33,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fotter: {
    paddingTop: 85,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textProfile: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 12,
    color: '#7D8699',
  },
});
