import React, { memo, useCallback } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import SvgDots from 'app/svgs/SvgDots'
import FONTS from'app/ultis/fonts';
import keyExtractor from'app/ultis/KeyExtractor';
import Footer from'app/screens/ProfileOrderHistoryDetail/Components/Footer'

const data = [
    {
        source: require("app/assets/OrderDetails/img.png"),
        nameOrder: "Chicken Fajitas With Seeded Tortilla Wraps & Salsa",
        numberServing: 3
    },
    {
        source: require("app/assets/OrderDetails/img1.png"),
        nameOrder: "Harissa Sweet Potato Pita Pockets",
        numberServing: 2
    },
    {
        source: require("app/assets/OrderDetails/img2.png"),
        nameOrder: "Sirloin with Chive Butter Sauce",
        numberServing: 2
    },
    {
        source: require("app/assets/OrderDetails/img2.png"),
        nameOrder: "Oven-Baked Apricot Chicken Legs",
        numberServing: 1
    }
]

interface PropsOrderServing {
    boxSize: string
    deliveryDate: string
    nameReceiver: string
    address: string
    phoneNumber: string
    instruction: string
    recipesCost: number
    delivery: string
    discount: number
    walaPoint: number
    total: number
}

const OrderServing = memo((props: PropsOrderServing) => {
    const { boxSize, deliveryDate, nameReceiver, address, phoneNumber, instruction, recipesCost, delivery, discount, walaPoint, total } = props
    const _renderItem = useCallback(({ item }) => {
        return <View style={styles.containerOrderDetail}>
            <View style={styles.img}>
                <Image
                    source={item.source} />
            </View>
            <View style={styles.nameOrder}>
                <View style={styles.viewNameOrder}>
                    <Text style={styles.textNameOrder}>{item.nameOrder}</Text>
                    <Text style={styles.textServing}>{`${item.numberServing} serving`}</Text>
                </View>
            </View>
        </View>
    }, [])
    return (
        <FlatList
            ListHeaderComponent={
                <Header />
            }
            data={data}
            renderItem={_renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={keyExtractor}
            style={styles.containerServing}
            ListFooterComponent={
                <Footer
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
            }
        />
    )
})

const Header = memo(() => {
    return (
        <Text style={styles.textBox}>
            Recipes Box
        </Text>
    )
})


export default OrderServing

const styles = StyleSheet.create({
    containerOrderDetail: {
        flexDirection: 'row'
    },
    img: {
        paddingTop: 16
    },
    nameOrder: {
        alignItems: "center",
        paddingLeft: 16,
        justifyContent: "space-between",
        flexDirection: 'row',
        width: "80%"
    },
    viewNameOrder: {
        justifyContent: 'center',
        width: '80%',
        paddingTop: 8
    },
    textNameOrder: {
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 14,
        fontWeight: '500',
        paddingRight: 16,
    },
    textServing: {
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 12,
        color: '#7D8699',
        paddingTop: 9
    },
    containerServing: {
        paddingLeft: 24,
        paddingVertical: 24
    },
    textBox: {
        fontFamily: "Montserrat",
        fontSize: 16,
        fontWeight: "500",
    },
    textBox1: {
        fontFamily: "Montserrat",
        fontSize: 14,
        paddingTop: 4
    },
    height: {
        height: 50
    },

})
