import React, { memo, useState, useCallback } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text
} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import ItemNoButoonAdd from'app/components/ItemNoButoonAdd';
import SvgFilterSmall from'app/svgs/Explorer/SvgFilterSmall';
import ModalChoose from'app/components/ModalChoose'
import FONTS from'app/ultis/fonts';
import SvgCalendar from'app/svgs/SignUp/SvgCalendar';
import ROUTES from 'app/ultis/routes';
import SvgList from'app/svgs/Explorer/SvgList';
import OrderList from'app/components/OrderList/OrderList'

const dataCard = [
    {
        id: '0',
        name: 'Chicken Fajitas With Seeded Tortilla Wraps & Salsa',
        rate: 4.5,
        cal: 234,
        cookTime: 15,
        numOfAdded: 0,
        numOfReviews: 1693,
        img: require('app/assets/SignUp/chicken_recipe.png'),
    },
    {
        id: '1',
        name: 'Chicken Fajitas With Seeded Tortilla Wraps & Salsa',
        rate: 4.5,
        cal: 234,
        cookTime: 15,
        numOfAdded: 0,
        numOfReviews: 1693,
        img: require('app/assets/SignUp/chicken_recipe.png'),
    },
];

interface PropsOrderCard {
    onShowList: () => void
    onShowFilter: () => void
}

const OrderCard = memo((props: PropsOrderCard) => {
    const _renderItem = useCallback(({ item }) => {
        return (
            <ItemNoButoonAdd
                name={item.name}
                rate={item.rate}
                cal={item.cal}
                cookTime={item.cookTime}
                numOfAdded={item.numOfAdded}
                numOfReviews={item.numOfReviews}
                item={item}
            />
        );
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <FlatList
                    data={dataCard}
                    renderItem={_renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.list}
                />
            </View>
            <ModalChoose
                svgLeft={<SvgFilterSmall />}
                nameLeft={"Filter"}
                svgRight={<SvgList />}
                nameRight={"List"}
                onPressRight={props.onShowList}
                onPressLeft={props.onShowFilter} />
        </View >
    )
})

export default OrderCard

const styles = StyleSheet.create({
    containerOrderList: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    container: {
        flex: 1
    },
    calendarView: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    txtDate: {
        marginLeft: 8,
        fontSize: 12,
        lineHeight: 15,
        color: '#1D1E2C',
        fontFamily: FONTS.Montserrat.Medium,
    },
    content: {
        flex: 1,
        backgroundColor: '#F7F7FB',
    },
    txtRecipePrice: {
        color: '#7D8699',
        fontSize: 10,
        fontFamily: FONTS.Montserrat.Regular,
        textAlign: 'center',
    },
    list: {
        paddingHorizontal: 16,
        paddingBottom: getBottomSpace() + 100,
    }
})

