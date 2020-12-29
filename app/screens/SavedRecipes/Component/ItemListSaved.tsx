import React, { memo, useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import InactiveRate from'app/components/InactiveRate';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SvgBookMark from'app/svgs/Explorer/SvgBookMark'
import FONTS from'app/ultis/fonts';
import ROUTES from 'app/ultis/routes';

interface PropsItemList {
    svgName: any,
    name: string,
    rate: number,
    onDelete: any,
    id: number
}

const ItemListSaved = memo((props: PropsItemList) => {
    const navigation = useNavigation();
    const [isActive, showActive] = useState(true)

    const onDetail = useCallback(() => {
        navigation.navigate(ROUTES.RecipeDetail, {
            IsExplorer: true
        });
    }, [navigation]);

    const isShowActive = useCallback(() => {
        props.onDelete && props.onDelete(props.id)
    }, [props.onDelete])
    return (
        <TouchableOpacity style={styles.container} onPress={onDetail}>
            <View style={styles.heightSvg}>
                {props.svgName}
            </View>
            <View style={styles.viewContent}>
                <View style={styles.viewText}>
                    <Text style={styles.textName} >{props.name}</Text>
                </View>
                <View style={styles.viewFooterContent}>
                    <InactiveRate rate={props.rate} />
                    <TouchableOpacity onPress={isShowActive}>
                        <SvgBookMark isActive={isActive} width={16} height={16} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity >
    )
})

export default ItemListSaved

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        borderRadius: 12,
        shadowColor: 'rgba(141, 151, 158, 0.2)',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16,
        flexDirection: 'row',
        marginTop: 16,
        marginHorizontal: 16
    },
    viewContent: {
        paddingHorizontal: 16,
        flex: 1
    },
    textName: {
        fontSize: 14,
        color: '#1D1E2C',
        fontWeight: '600',
        fontFamily: FONTS.Montserrat.Medium,
        lineHeight: 24
    },
    viewFooterContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    heightSvg: {
        height: '100%',
        width: 120
    },
    viewText: {
        paddingVertical: 8,
        height: 48,
        paddingRight: 32,
        flex: 1
    }
})
