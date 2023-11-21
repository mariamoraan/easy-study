export const getFormattedHour = () => {
    const date = new Date();
    return hourToHHMM(date.getHours(), date.getMinutes());
}
export const hourToHHMM = (hours: number, minutes: number) => {
    const stringHours = hours < 10 ? `0${hours}` : `${hours}`;
    const stringMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${stringHours}:${stringMinutes}`;
}

