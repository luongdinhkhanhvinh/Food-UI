import React, { memo, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FONTS from'app/ultis/fonts';

const itemOrderDetail = {
    boxSize: "Classic Plan - For 2",
    deliveryDate: "8:00 AM - 7:00 PM Th",
    nameReceiver: "Julia Andrews",
    address: "7100 Athens Place, Q",
    phoneNumber: "426-980-0043",
    instruction: 'Front Potch',
    recipesCost: 34.25,
    delivery: 'Free',
    discount: -4.25,
    walaPoint: - 2.5,
    total: 27.5
}

interface PropsOrderDetails {
    numberChoose?: number
    time?: string
    money?: string
    status?: string
    svgNameLeftTop: any
    svgNameLeftBottom: any
    svgNameRightTop: any
    svgNameRightBottom: any
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
        navigation.navigate('ProfileOrderHistoryDetail', {
            itemOrderDetail: itemOrderDetail
        })
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.viewHeader}>
                <View style={styles.flexDirection}>
                    <View style={styles.paddingRight}>
                        {props.svgNameLeftTop ? props.svgNameLeftTop : <View style={styles.dashBorder}></View>}
                    </View>
                    {props.svgNameLeftBottom ? props.svgNameLeftBottom : <View style={styles.dashBorder}></View>}
                </View>
                <View style={styles.flexAndPadding}>
                    <View style={styles.paddingRight}>
                        {props.svgNameRightTop ? props.svgNameRightTop : <View style={styles.dashBorder}></View>}
                    </View>
                    {props.svgNameRightBottom ? props.svgNameRightBottom :
                        <View style={styles.dashBorder}>
                        </View>}
                </View>
            </View>
            <View style={styles.viewRight}>
                <TouchableOpacity onPress={showOrderHistoryDetail}>
                    <Text style={styles.textHeader}>{props.time}</Text>
                    <Text style={styles.textContent}> {`${props.numberChoose} recipes chosen`}</Text>
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
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: -5,
            height: -5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 20,
    },
    viewHeader: {
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
        paddingTop: 9
    },
    textFooter: {
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 14,
        fontWeight: '500'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 9
    },
    textOpacity: {
        textAlign: 'center',
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 14,
        alignItems: 'center',
        paddingRight: 16
    },
    viewRight: {
        flex: 1
    },
    dashBorder: {
        height: 32,
        width: 32,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderStyle: 'dashed',
        borderRadius: 8
    }
})
