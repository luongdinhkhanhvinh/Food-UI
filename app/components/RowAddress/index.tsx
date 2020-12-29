import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FONTS from'app/ultis/fonts';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface PropsRowAddress {
    nameReceiver: string
    address: string
    phoneNumber: string
    noChange: boolean
}

const RowAddress = memo((props: PropsRowAddress) => {
    return (
        <View style={styles.ViewBox}>
            <Text style={styles.textBox}>
                Delivery Information
               </Text>
            <View style={styles.textBoxSize}>
                <View style={styles.width}>
                    <Text style={styles.texBold}>{props.nameReceiver}</Text>
                    <Text style={styles.textBox1}>
                        {props.address}
                    </Text>
                    <Text style={styles.textBox1}>{props.phoneNumber}</Text>
                </View>
                {
                    !props.noChange ?
                        <TouchableOpacity>
                            <Text style={styles.textColor}>
                                Change
                </Text>
                        </TouchableOpacity>
                        : null
                }
            </View>
        </View>
    )
})

export default RowAddress

const styles = StyleSheet.create({
    ViewBox: {
        paddingTop: 41
    },
    textBox1: {
        fontFamily: "Montserrat",
        fontSize: 14,
        paddingTop: 4
    },
    textBox: {
        fontFamily: "Montserrat",
        fontSize: 16,
        fontWeight: "500",
    },
    texBold: {
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 16,
        fontWeight: "500",
    },
    textColor: {
        paddingTop: 15,
        fontFamily: "Montserrat",
        fontSize: 14,
        color: '#FE9870'
    },
    textBoxSize: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 24
    },
    width: {
        width: '70%',
        paddingTop: 16
    }
})
