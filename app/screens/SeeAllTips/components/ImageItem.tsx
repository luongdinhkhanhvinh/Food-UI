import React, {memo} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FONTS from'app/ultis/fonts';

interface ImageItemProps {
  images: any[];
  numImageMore: number;
}

const ImageItem = memo((props: ImageItemProps) => {
  return (
    <View style={styles.imgView}>
      {props.images.map((item, index) => {
        return (
          <TouchableOpacity key={index}>
            <Image source={item} style={styles.img} />
            {index === props.images.length - 1 && props.numImageMore > 0 ? (
              <View style={styles.showMore}>
                <Text style={styles.numImageMore}>+{props.numImageMore}</Text>
              </View>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
});

export default ImageItem;

const styles = StyleSheet.create({
  img: {
    width: 56,
    height: 56,
    marginRight: 8,
    borderRadius: 8,
  },
  showMore: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#1D1E2C50',
    left: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numImageMore: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: FONTS.Montserrat.Bold,
    lineHeight: 17,
  },
  imgView: {
    flexDirection: 'row',
    marginTop: 8,
  },
});
