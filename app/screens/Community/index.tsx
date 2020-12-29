import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import Daily from'app/screens/Daily';
import NewsNutritionList from'app/screens/NewsNutritionList';
import TipsAndTechniques from'app/screens/TipsAndTechniques';
import LifeStyle from'app/screens/LifeStyle';
import colors from 'app/ultis/colors';
import FONTS from'app/ultis/fonts';

const CommunityTab = memo(() => {
  return (
    <ScrollableTabView
      style={styles.container}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar style={styles.scrollableTabBar} />}
      tabBarActiveTextColor={'#0EAD69'}
      tabBarUnderlineStyle={styles.tabBarUnLine}
      tabBarInactiveTextColor={'#7D8699'}
      tabBarTextStyle={styles.tabBarText}>
      <Daily tabLabel="DAILY" />
      <NewsNutritionList tabLabel="NUTRITION" />
      <TipsAndTechniques tabLabel="TIPSANDTECHNIQUES" />
      <LifeStyle tabLabel="LIFESTYLE" />
    </ScrollableTabView>
  );
});

export default CommunityTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.while,
  },
  tabBarUnLine: {
    backgroundColor: '#0EAD69',
    height: 2,
    alignSelf: 'center',
  },
  tabBarText: {
    fontFamily: FONTS.Montserrat.Bold,
    fontSize: 12,
    fontWeight: '600',
  },
  scrollableTabBar: {
    borderColor: colors.while,
    borderTopWidth: 0,
  },
});
