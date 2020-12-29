import React, {memo} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SvgOption from 'app/svgs/SvgOption';
import FONTS from'app/ultis/fonts';
import ImageItem from'app/screens/SeeAllTips/components/ImageItem';
import {tips} from'app/screens/SeeAllTips';
import convertListImage from '../../../help/convertListImage';
import {widthScreen} from 'app/ultis/layout';

interface CommentItemProps {
  avatarImg: ImageSourcePropType;
  images: ImageSourcePropType[];
  userName: string;
  timePosted: string;
  content: string;
}

const CommentItem = memo((props: CommentItemProps) => {
  const result = convertListImage(props.images);
  console.log('result', result);
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Image source={props.avatarImg} style={styles.avatar} />
      <View style={styles.content}>
        <View style={styles.nameView}>
          <Text style={styles.txtUserName}>{props.userName}</Text>
          <TouchableOpacity style={styles.btnOption}>
            <SvgOption />
          </TouchableOpacity>
        </View>
        <Text style={styles.txtPostedTime}>{props.timePosted}</Text>
        <Text style={styles.txtPostContent}>{props.content}</Text>
        <ImageItem images={result.images} numImageMore={result.numImagesMore} />
        <View style={styles.line} />
      </View>
    </TouchableOpacity>
  );
});
export default CommentItem;
const styles = StyleSheet.create({
  img: {
    width: 56,
    height: 56,
    marginRight: 8,
    borderRadius: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtUserName: {
    fontSize: 14,
    fontFamily: FONTS.Montserrat.Medium,
    lineHeight: 17,
    color: '#1D1E2C',
    marginTop: 4,
  },
  txtPostedTime: {
    fontSize: 12,
    fontFamily: FONTS.Montserrat.Regular,
    lineHeight: 15,
    color: '#7D8699',
    marginTop: 4,
  },
  txtPostContent: {
    fontSize: 14,
    fontFamily: FONTS.Montserrat.Regular,
    lineHeight: 23,
    color: '#1D1E2C',
    marginTop: 8,
  },
  line: {
    marginTop: 16,
    marginBottom: 24,
    backgroundColor: '#F7F7FB',
    width: '100%',
    height: 1,
  },
  container: {
    flexDirection: 'row',
  },
  btnOption: {
    padding: 4,
  },
});
