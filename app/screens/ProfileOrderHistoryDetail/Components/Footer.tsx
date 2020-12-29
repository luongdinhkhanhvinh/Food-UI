import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import FONTS from'app/ultis/fonts';
import RowSelection from'app/components/RowSelection'
import RowText from'app/components/RowText'
import RowAddress from'app/components/RowAddress';
import RowStatus from'app/screens/ProfileOrderHistoryDetail/Components/RowStatus'

interface PropsFooter {
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

const Footer = memo((props: PropsFooter) => {
    const { boxSize, deliveryDate, nameReceiver, address, phoneNumber, instruction, recipesCost, delivery, discount, walaPoint, total } = props
    return (
        <>
            <RowSelection nameTitle={"Box Size"} nameValue={boxSize} noChange={true} />
            <RowStatus nameTitle={"Delivery Date"} nameValue={deliveryDate} />
            <RowAddress
                nameReceiver={"Julia Andrews"}
                address={"7100 Athens Place, Quebec, DC"}
                phoneNumber={"426-980-0043"}
                noChange={true}
            />
            <RowSelection nameTitle={"Delivery Instruction"} nameValue={instruction} noChange={true} />
            <View style={styles.ViewBox}>
                <Text style={styles.textBox}>
                    Order Summary
           </Text>
                <RowText name={"Recipes Cost"} value={recipesCost} texBold={false} />
                <RowText name={"Delivery"} value={delivery} texBold={false} />
                <RowText name={"Discount"} value={discount} texBold={false} />
                <RowText name={"Wala Point"} value={walaPoint} texBold={false} />
                <RowText name={"Total"} value={total} texBold={true} />
            </View>
            <View style={styles.height} />
        </>
    )
})

export default Footer

const styles = StyleSheet.create({
    ViewBox: {
        paddingTop: 41
    },
    textBox: {
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 16,
        fontWeight: "500",
    },
    textBoxSize: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    width: {
        width: '70%',
        paddingTop: 16
    },
    texBold: {
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 16,
        fontWeight: "500",
    },
    textBox1: {
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 14,
        paddingTop: 4
    },
    textColor: {
        paddingTop: 15,
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 14,
        color: '#FE9870',
        paddingRight: 16
    },
    height: {
        height: 150
    }
})
