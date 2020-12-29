import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import ExplorerOnTheMenu from './ExplorerOnTheMenu'
import SavedRecipes from'app/screens/SavedRecipes'
import PreviouslyCooked from'app/screens/PreviouslyCooked'
import Cookbook from'app/screens/Cookbook'
import FONTS from'app/ultis/fonts';

const ExplorerTab = memo(() => {
    return <ScrollableTabView
        style={styles.container}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
        tabBarActiveTextColor={"#0EAD69"}
        tabBarUnderlineStyle={styles.tabarUnLine}
        tabBarInactiveTextColor={"#7D8699"}
        tabBarTextStyle={styles.tabarText}
    >
        <ExplorerOnTheMenu tabLabel='ON THE MENU' />
        <Cookbook tabLabel='COOKBOOK' />
        <SavedRecipes tabLabel='SAVED RECIPES' />
        <PreviouslyCooked tabLabel='PREVIOUSLY COOKED' />
    </ScrollableTabView>;
})

export default ExplorerTab;

const styles = StyleSheet.create({
    container: {
        height: 32,
        backgroundColor: '#ffff'
    },
    tabarUnLine: {
        backgroundColor: "#0EAD69",
        height: 2
    },
    tabarText: {
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 12,
        fontWeight: "400"
    }
})
