import React, {memo, useCallback} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from 'app/ultis/colors';
import {heightScreen, widthScreen} from 'app/ultis/layout';
import FONTS from'app/ultis/fonts';
import SvgBackArrow from 'app/svgs/ProfileInvite/SvgBackArrow';
import SvgFacebook from 'app/svgs/ProfileInvite/SvgFaceBook';
import SvgInstagram from 'app/svgs/ProfileInvite/SvgInstagram';
import SvgTwitter from 'app/svgs/ProfileInvite/SvgTwitter';
import SvgEmail from 'app/svgs/ProfileInvite/SvgEmail';
import {useNavigation} from '@react-navigation/native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';

const data = {
  point: '2,500',
  linkInvite: 'wala.co/rel/22354',
};

const ProfileInvite = memo(() => {
  const navigation = useNavigation();
  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ScrollView
      bounces={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}>
      <ImageBackground
        style={styles.imgBackGround}
        source={require('app/assets/Profile/bg.png')}>
        <Text style={styles.txtWalaPoints}>Wala Points</Text>
        <Text style={styles.txtEarnPoint}>Earning Point</Text>
        <Text style={styles.txtPoints}>{data.point}</Text>
      </ImageBackground>
      <TouchableOpacity onPress={onGoBack} style={styles.svgArrowBack}>
        <SvgBackArrow />
      </TouchableOpacity>
      <Text style={styles.txtInvite}>
        {'Invite your friend and family, earning 500 point\n'}per email sign up.
      </Text>
      <View style={styles.linkInviteView}>
        <Text style={styles.txtLinkInvite}>{data.linkInvite}</Text>
        <TouchableOpacity style={styles.copyView}>
          <Text style={styles.txtCopy}>Copy</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.txtShareVia}>Share via</Text>
      <View style={styles.ShareViaView}>
        <TouchableOpacity>
          <SvgFacebook />
        </TouchableOpacity>
        <TouchableOpacity>
          <SvgInstagram />
        </TouchableOpacity>
        <TouchableOpacity>
          <SvgTwitter />
        </TouchableOpacity>
        <TouchableOpacity>
          <SvgEmail />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
});

export default ProfileInvite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.while,
  },
  imgBackGround: {
    width: widthScreen,
    height: 270,
  },
  txtWalaPoints: {
    fontFamily: FONTS.Montserrat.Medium,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: colors.while,
    marginTop: getStatusBarHeight() + 20,
    fontWeight: '600',
  },
  txtEarnPoint: {
    fontFamily: FONTS.Montserrat.Medium,
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color: colors.while,
    marginTop: 51,
    fontWeight: '600',
  },
  txtPoints: {
    fontFamily: FONTS.DINCondensed.Bold,
    fontSize: 48,
    lineHeight: 58,
    textAlign: 'center',
    color: colors.while,
    marginTop: 51,
  },
  svgArrowBack: {
    position: 'absolute',
    top: getStatusBarHeight(),
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtInvite: {
    marginTop: 36,
    textAlign: 'center',
    fontWeight: 'normal',
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    lineHeight: 28,
    color: colors.title,
  },
  linkInviteView: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: 327,
    backgroundColor: colors.while,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderColor,
    marginTop: 24,
  },
  txtLinkInvite: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '600',
    fontSize: 14,
    color: colors.title,
    marginVertical: 16,
    marginLeft: 16,
  },
  copyView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 70,
    marginRight: 16,
  },
  txtCopy: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 14,
    color: colors.orangeLight,
    textTransform: 'uppercase',
  },
  txtShareVia: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    lineHeight: 28,
    color: colors.title,
    textAlign: 'center',
    marginTop: 56,
  },
  ShareViaView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthScreen / 6,
    marginTop: 24,
  },
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 24,
  },
});
