import React, { memo, useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ItemNoButoonAdd from'app/components/ItemNoButoonAdd';
import FONTS from'app/ultis/fonts';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import SvgOrderList1 from 'app/svgs/Explorer/SvgOrderList1';
import SvgOrderList2 from 'app/svgs/Explorer/SvgOrderList2';
import SvgOrderList3 from 'app/svgs/Explorer/SvgOrderList3';
import ROUTES from 'app/ultis/routes';
import OrderCard from'app/components/OrderCard/OrderCard'
import OrderList from'app/components/OrderList/OrderList'

export const data = [
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

const ExplorerOnTheMenu = memo(() => {
    const navigation = useNavigation();
    const [showList, setShowList] = useState(false)

    const onShowFilter = useCallback(() => {
        navigation.navigate(ROUTES.Filter)
    }, [])
    const onShowCard = useCallback(() => {
        setShowList(false)
    }, [])
    const onShowList = useCallback(() => {
        setShowList(true)
    }, [])
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
            {
                showList ? <OrderList onShowCard={onShowCard} onShowFilter={onShowFilter} showList={showList} onShowList={onShowList} /> :
                    <OrderCard onShowFilter={onShowFilter} onShowList={onShowList} />
            }
        </View >
    )
})

export default ExplorerOnTheMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7FB'
    },
    list: {
        paddingHorizontal: 16,
        paddingBottom: getBottomSpace() + 100,
    }
})

