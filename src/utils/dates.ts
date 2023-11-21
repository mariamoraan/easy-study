export const getFormattedDate = () => {
    const date = new Date();
    return dateToWordFormat(date);
}
export const dateToWordFormat = (date: Date) => {
    return date.toLocaleString('default', { month: 'long', day:'2-digit', year:'numeric' });
}

export const getDateMonthName = (date: Date): string => {
    return date.toLocaleString('default', { month: 'long' });
}

export const isSameDate = (date1: Date, date2: Date): boolean => {
    const [date1Day, date1Month, date1Year] = [date1.getDate(), date1.getMonth(), date1.getFullYear()];
    const [date2Day, date2Month, date2Year] = [date2.getDate(), date2.getMonth(), date2.getFullYear()];
    return date1Day === date2Day && date1Month === date2Month && date1Year === date2Year;
}

export const areDatesInSameWeek = (date1: Date, date2: Date): boolean => {
    const mondayDate1 = new Date(date1.setDate(date1.getDate() - date1.getDay() + 1));
    const mondayDate2 = new Date(date2.setDate(date2.getDate() - date2.getDay() + 1));

    return isSameDate(mondayDate1, mondayDate2);
}

