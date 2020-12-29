import React, { memo, useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FONTS from'app/ultis/fonts';
import SvgArrowHeader from 'app/svgs/SvgArrowHeader'
import { widthScreen } from'app/ultis/layout';
import ROUTES from'app/ultis/routes';
import OrderServing from'app/screens/ProfileOrderHistoryDetail/Components/OrderServing'
import ButtonLinear from'app/components/ButtonLinear';
import { getBottomSpace } from 'react-native-iphone-x-helper';

interface PropsOrderDeatails {
    route: any
}

const ProfileOrderHistoryDetail = memo((props: PropsOrderDeatails) => {
    const navigation = useNavigation();
    const onClose = useCallback(() => {
        navigation.navigate(ROUTES.ProfileOrderHistory)
    }, [])
    const { boxSize, deliveryDate, nameReceiver, address, phoneNumber, instruction, recipesCost, delivery, discount, walaPoint, total } = props.route?.params?.itemOrderDetail
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground
                    style={styles.imgBackGround}
                    source={require('app/assets/Profile/bg.png')}
                >
                    <TouchableOpacity style={styles.backHeader} onPress={onClose}>
                        <SvgArrowHeader />
                    </TouchableOpacity>
                    <View style={styles.viewHeaderTitel}>
                        <Text style={styles.textTitle}>Order Detail</Text>
                    </View>
                    <Text style={styles.textHeader}>Thu, 5 Feb 8:00-7:00</Text>
                    <Text style={styles.textHeaderContent}>$34.48</Text>
                </ImageBackground>
            </View>
            <OrderServing
                boxSize={boxSize}
                deliveryDate={deliveryDate}
                nameReceiver={nameReceiver}
                address={address}
                phoneNumber={phoneNumber}
                instruction={instruction}
                recipesCost={recipesCost}
                delivery={delivery}
                discount={discount}
                walaPoint={walaPoint}
                total={total}
            />
            <ButtonLinear
                onPress={() => { }}
                title={'Reorder this box'}
                style={styles.btn}
            />
        </View >
    )
})

export default ProfileOrderHistoryDetail


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7FB'
    },
    textHeader: {
        fontFamily: "Montserrat",
        fontWeight: '500',
        color: '#ffff',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 51
    },
    header: {
        width: "100%"
    },
    ViewBox: {
        paddingTop: 24,
        paddingHorizontal: 24
    },
    textBox: {
        fontFamily: "Montserrat",
        fontSize: 16,
        fontWeight: "500",
    },
    footer: {
        borderRadius: 25,
        marginHorizontal: 16,
        marginTop: 39
    },
    textFooter: {
        fontFamily: "Montserrat",
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
        color: "#FFFFFF",
        paddingVertical: 16
    },
    touchableOpacity: {
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'row'
    },
    textHeaderContent: {
        paddingTop: 47,
        fontFamily: FONTS.DINCondensed.Bold,
        fontSize: 48,
        textAlign: 'center',
        color: "#ffff"
    },
    backHeader: {
        position: 'absolute',
        paddingTop: 54,
        zIndex: 1,
        paddingLeft: 16
    },
    viewHeaderTitel: {
        flexDirection: 'row',
        paddingTop: 54,
        justifyContent: 'center'
    },
    textTitle: {
        fontFamily: "Montserrat",
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'center',
        color: "#FFFFFF",
    },
    imgBackGround: {
        width: widthScreen,
        height: 270,
    },
    viewBottom: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btn: {
        paddingHorizontal: 24,
        position: 'absolute',
        width: widthScreen,
        bottom: getBottomSpace()
    },
})
