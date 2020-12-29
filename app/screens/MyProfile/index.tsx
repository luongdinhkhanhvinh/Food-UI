import React, {memo, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from 'app/ultis/colors';
import TextInputWala from'app/components/TextInput';

const data = {
  avatar: require('app/assets/MyProfile/avatar.png'),
  userName: 'Julia Andrews',
  email: 'julia68@gmail.com',
  phoneNumber: '426-980-0043',
  password: '●●●●●●●●●●',
};

const MyProfile = memo(() => {
  const [fullName, setFullName] = useState(data.userName);
  const [email, setEmail] = useState(data.email);
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);
  const [password, setPassword] = useState(data.password);
  return (
    <View style={styles.container}>
      <View style={styles.avatarView}>
        <Image style={styles.avatar} source={data.avatar} />
        <TextInputWala
          titleStyle={styles.titleStyle}
          title={'Full Name'}
          editable={false}
          value={fullName}
        />
      </View>
      <TextInputWala
        styleView={styles.inputStyle}
        titleStyle={styles.titleStyle}
        title={'Email'}
        editable={false}
        value={email}
      />
      <TextInputWala
        styleView={styles.inputStyle}
        titleStyle={styles.titleStyle}
        title={'Phone Number'}
        editable={false}
        value={phoneNumber}
      />
      <TextInputWala
        styleView={styles.inputStyle}
        titleStyle={styles.titleStyle}
        title={'Password'}
        editable={false}
        value={password}
      />
    </View>
  );
});
export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.while,
  },
  avatar: {
    marginHorizontal: 24,
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
    marginTop: 30,
    marginLeft: 24,
  },
});
