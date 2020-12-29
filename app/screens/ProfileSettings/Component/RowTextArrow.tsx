import React, { memo } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import SvgIconArrowRight from 'app/svgs/Login/SvgIconArrowRight';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FONTS from'app/ultis/fonts';

interface PropsRowTextArrow {
    name: string
}

const RowTextArrow = memo((props: PropsRowTextArrow) => {
    return (
        <TouchableOpacity style={styles.viewContentAboutUs}>
            <Text style={styles.textContentAbouts}>{props.name}</Text>
            <SvgIconArrowRight />
        </TouchableOpacity>
    )
})

export default RowTextArrow
const styles = StyleSheet.create({
    viewContentAboutUs: {
        paddingTop: 33,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContentAbouts: {
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 14,
        color: '#1D1E2C',
    },
})
