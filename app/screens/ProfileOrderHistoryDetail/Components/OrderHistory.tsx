import React, { memo, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import SvgOrderSmaill from "../../../svgs/Login/SvgOrderSmaill"
import SvgOrderSmall2 from "../../../svgs/Login/SvgOrderSmall2"
import SvgOrderSmall3 from "../../../svgs/Login/SvgOrderSmall3"
import SvgOrderSmall4 from "../../../svgs/Login/SvgOrderSmall4"
import { TouchableOpacity } from 'react-native-gesture-handler';
import FONTS from'app/ultis/fonts';

interface PropsOrderDetails {
    numberChoose?: string
    time?: string
    money?: string
    status?: string
}

const OrderHistory = memo((props: PropsOrderDetails) => {
    const navigation = useNavigation();

    let status = ''
    let color = ''
    if (props.status === 'onway') {
        status = "It’s on way",
            color = '#FE9870'
    } else if (props.status === 'cancel') {
        status = "Cancel"
        color = '#FF001F'
    } else if (props.status === 'delivered') {
        status = "Delivered"
        color = '#0EAD69'
    }

    const showOrderHistoryDetail = useCallback(() => {
        navigation.navigate('ProfileOrderHistoryDetail')
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.viewHeader}>
                <View style={styles.flexDirection}>
                    <View style={styles.paddingRight}>
                        <SvgOrderSmaill />
                    </View>
                    <View>
                        <SvgOrderSmall2 />
                    </View>
                </View>
                <View style={styles.flexAndPadding}>
                    <View style={styles.paddingRight}>
                        <SvgOrderSmall3 />
                    </View>
                    <View>
                        <SvgOrderSmall4 />
                    </View>
                </View>
            </View>
            <View style={styles.viewRight}>
                <TouchableOpacity onPress={showOrderHistoryDetail}>
                    <Text style={styles.textHeader}>{props.time}</Text>
                    <Text style={styles.textContent}> {props.numberChoose}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.textFooter}> {props.money}</Text>
                        <Text style={[styles.textOpacity, { color: color }]}>{status}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
})

export default OrderHistory

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        marginTop: 17,
        marginHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 12
    },
    viewHeader: {
        width: '30%',
        padding: 16
    },
    flexDirection: {
        flexDirection: 'row'
    },
    flexAndPadding: {
        flexDirection: 'row',
        paddingTop: 4
    },
    paddingRight: {
        paddingRight: 4
    },
    textHeader: {
        fontFamily: FONTS.Montserrat.Regular,
        fontWeight: '500',
        fontSize: 14,
        paddingTop: 16
    },
    textContent: {
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 14,
        color: '#7D8699',
        paddingTop: 9
    },
    textFooter: {
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 14,
        fontWeight: '500',
        color: '#7D8699'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 9
    },
    textOpacity: {
        textAlign: 'right',
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 14,
        alignItems: 'center'
    },
    viewRight: {
        width: '60%'
    }
})
