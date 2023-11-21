const timerFactory = () => {
    let prevDate = new Date();
    const subscribers: {[key: string]: (date: Date) => void} = {};
    const subscribe = (id: string, func: (date: Date) => void) => {
        if(subscribers[id]) throw Error('This key already exists')
        subscribers[id] = func;
    }
    const unsubscribe = (id: string) => {
        delete subscribers[id]
    }
    const notify = () => {
        const date = new Date();
        Object.values(subscribers).map((func) => func(date));
        prevDate = date;
    }

    return {subscribers, subscribe, unsubscribe, notify}
}

export const globalTimer = timerFactory();