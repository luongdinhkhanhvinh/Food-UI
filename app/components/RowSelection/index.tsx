import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface PropsRowSelection {
    nameTitle: string
    nameValue: string
    noChange: boolean
}

const RowSelection = memo((props: PropsRowSelection) => {
    return (
        <View style={styles.ViewBox}>
            <Text style={styles.textBox}>
                {props.nameTitle}
            </Text>
            <View style={styles.textBoxSize}>
                <Text style={styles.textBox1}>
                    {props.nameValue}
                </Text>
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

export default RowSelection

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
        alignItems: 'center',
        paddingTop: 15
    },
    textColor: {
        fontFamily: "Montserrat",
        fontSize: 14,
        color: '#FE9870'
    }
})
