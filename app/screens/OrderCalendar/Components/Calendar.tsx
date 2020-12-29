import React, { memo, useState, useCallback } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import FONTS from'app/ultis/fonts';
import colors from 'app/ultis/colors';

LocaleConfig.locales.fr = {
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    dayNamesShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
};
LocaleConfig.defaultLocale = 'fr';

interface PropsCalendar {
    dataDate: any
    setMarkedDates: any
    setNewData: any
    setInActive: any
    markedDates: string
    dateHasOrder: any
    isActive: boolean
}

const Calendar = memo((props: PropsCalendar) => {
    let { dataDate, setMarkedDates, setNewData, setInActive, markedDates, dateHasOrder, isActive } = props
    return (
        <CalendarList
            style={styles.borderRadius}
            current={'2020-07-26'}
            minDate={'2020-01-01'}
            onDayPress={(day) => {
                let result = dataDate.filter(item => item.dateString === day.dateString)
                setMarkedDates(day.dateString);
                setNewData(result.length > 0 ? result[0].data : null)
                if (result.some(item => item.dateString === day.dateString)) {
                    setInActive(true)
                } else {
                    setInActive(false)
                }
            }}
            hideExtraDays={true}
            horizontal={true}
            pagingEnabled={true}
            markedDates={{
                [markedDates]: { selected: true },
                [dateHasOrder[0]]: { selected: (isActive && markedDates === dateHasOrder[0]), marked: true, dotColor: colors.orangeLight },
                [dateHasOrder[1]]: { selected: (isActive && markedDates === dateHasOrder[1]), marked: true, dotColor: colors.orangeLight },
                [dateHasOrder[2]]: { selected: (isActive && markedDates === dateHasOrder[2]), marked: true, dotColor: colors.orangeLight }
            }}
            theme={{
                calendarBackground: '#ffffff',
                selectedDayBackgroundColor: '#FE9870',
                textDayFontFamily: FONTS.Montserrat.Regular,
                textDayHeaderFontWeight: '500',
                textDayFontWeight: '400',
                textDayHeaderFontSize: 14,
                textDayFontSize: 14,
                textDayHeaderFontFamily: FONTS.Montserrat.Regular,
                textMonthFontSize: 36,
                textMonthFontWeight: '500',
                'stylesheet.calendar.header': {
                    header: {
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                    },
                },
            }}
        />
    )
})

export default Calendar

const styles = StyleSheet.create({
    borderRadius: {
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        shadowColor: 'rgba(141, 151, 158, 0.2)',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16,
    }
})
