import { useState } from "react";
import { getDateMonthName } from "../../utils/dates";
import { getFirstDayOfMonth, getMonthDaysNumber } from "../utils";

const MAX_MONTH_POSITIONS = 7*6;

export const useCalendar = () => {
    const [date, setDate] = useState<Date>(new Date());
    const translateMonth = (monthsNumber: number) => {
        const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        newDate.setMonth(date.getMonth() + monthsNumber);
        setDate(newDate)
    }
    const prevMonth = () => translateMonth(-1);
    const nextMonth = () => translateMonth(1);
    const buildMonthWeeks = (monthDaysNumber: number, monthFirstDay: number) => {
        const startDays = Array.from({length: monthFirstDay}, (_, index) => 0);
        const monthDays = Array.from({length: monthDaysNumber}, (_, index) => index);
        const lastDays = Array.from({length: MAX_MONTH_POSITIONS - startDays.length - monthDays.length}, (_, index) => 0);
        const days = [...startDays, ...monthDays, ...lastDays];
        const splitDays = [];
        while (days.length > 0) {
            const r = [days.splice(0, 7)]
            splitDays.push(r)
        }
        return splitDays;
    }

    return {
        date,
        setDate,
        monthDaysNumber: getMonthDaysNumber(date), 
        monthFirstDay: getFirstDayOfMonth(date), 
        monthName: getDateMonthName(date), 
        fullYear: date.getFullYear(),
        prevMonth,
        nextMonth,
        buildMonthWeeks,
    }
}