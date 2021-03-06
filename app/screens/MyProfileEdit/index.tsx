import React, { memo, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import colors from 'app/ultis/colors';
import TextInputWala from 'app/components/TextInput';
import SvgCamera from 'app/svgs/ProfileEdit/SvgCamera';

const data = {
  avatar: require('app/assets/MyProfile/avatar.png'),
  gender: 'Mrs',
  firstName: 'Julia',
  lastName: 'Andrews',
  phoneNumber: '426-980-0043',
};

const MyProfileEdit = memo(() => {
  const [gender, setGender] = useState(data.gender);
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 70 : 40;
  return (
    <ScrollView bounces={false} style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={keyboardVerticalOffset}
        behavior={'position'}>
        <View style={styles.avatarView}>
          <Image source={data.avatar} />
          <TouchableOpacity style={styles.cameraView}>
            <SvgCamera />
          </TouchableOpacity>
        </View>
        <TextInputWala
          title={'Mr/Mrs'}
          value={gender}
          titleStyle={styles.input}
          style={styles.inputStyle}
          styleView={styles.styleView}
        />
        <TextInputWala
          style={styles.inputStyle}
          titleStyle={styles.inputStyle}
          styleView={styles.styleView}
          title={'First Name'}
          value={firstName}
        />
        <TextInputWala
          style={styles.inputStyle}
          titleStyle={styles.inputStyle}
          styleView={styles.styleView}
          title={'Last Name'}
          value={lastName}
        />
        <TextInputWala
          style={styles.inputStyle}
          titleStyle={styles.inputStyle}
          styleView={styles.styleView}
          title={'Phone Number'}
          value={phoneNumber}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
});
export default MyProfileEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.while,
    paddingHorizontal: 24,
  },
  avatarView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 29,
  },
  titleStyle: {
    textTransform: 'capitalize',
  },
  inputStyle: {
    paddingHorizontal: 8,
  },
  input: {
    marginTop: 30,
    paddingHorizontal: 8,
  },
  cameraView: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 24,
  },
  styleView: {
    marginBottom: 24,
  },
});
