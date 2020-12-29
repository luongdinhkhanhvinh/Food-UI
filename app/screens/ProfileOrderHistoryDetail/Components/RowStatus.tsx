import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface PropsRowSelection {
    nameTitle: string
    nameValue: string
}

const RowStatus = memo((props: PropsRowSelection) => {
    return (
        <View style={styles.ViewBox}>
            <Text style={styles.textBox}>
                {props.nameTitle}
            </Text>
            <View style={styles.textBoxSize}>
                <Text style={styles.textBox1}>
                    {props.nameValue}
                </Text>
                <Text style={styles.textColor}>
                    Delivered
                        </Text>

            </View>
        </View>
    )
})

export default RowStatus

const styles = StyleSheet.create({
    ViewBox: {
        paddingTop: 41,
        paddingRight: 24
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
    textBoxSize: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textColor: {
        paddingTop: 15,
        fontFamily: "Montserrat",
        fontSize: 14,
        color: '#0EAD69'
    }
})
