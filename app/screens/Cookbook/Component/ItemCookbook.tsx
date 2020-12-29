import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import FONTS from'app/ultis/fonts';


interface PropsItem {
    svgName?: any;
    name?: string
}

const ItemCookbook = memo((props: PropsItem) => {
    let svgName = props.svgName
    return (
        <TouchableOpacity style={styles.containerItem} onPress={() => { }}>
            {svgName}
            <Text style={styles.textItem}>{props.name}</Text>
        </TouchableOpacity>
    )
})
export default ItemCookbook

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#fff',
        marginTop: 16,
        borderRadius: 8,
        height: 98,
        width: 99,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(141, 151, 158, 0.2)',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.56,
        shadowRadius: 16
    },
    textItem: {
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 12,
        paddingTop: 2
    }
})
