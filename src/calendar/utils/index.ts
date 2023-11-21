export const getMonthDaysNumber = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}

export const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
}

export const isToday = (day: number, date: Date) => {
    const today = new Date();
    return today.getFullYear() === date.getFullYear() && today.getMonth() === date.getMonth() && day === date.getDate();
}