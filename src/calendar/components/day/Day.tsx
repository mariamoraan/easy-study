import { useContext } from "react";
import { AppContext, IAppContext } from "../../../App";
import { IEvent } from "../../../interfaces";
import { isSameDate } from "../../../utils/dates";
import "./Day.css";

type Props = {
    date: Date,
}

export const Day = (props: Props) => {
    const {date} = props;
    const {events, subjects} = useContext(AppContext) as IAppContext;
    const dayEvents = events.filter(event => event.date ? isSameDate(date, event.date) : false)
    const getEventColor = (event: IEvent) => {
        if(!event.subjectId) return 'var(--primary-color)'
        return subjects.find(subject => subject.id === event.subjectId)?.color || 'var(--primary-color)'
    }

    return (
        <div className="day-wrapper">
            <span className="day-number">{date.getDate()}</span>
            {
                dayEvents.length > 0 
                ? 
                <ul className="day-events">
                    {
                        dayEvents.map((event, index) => (
                            
                                <li className="day-event" key={index}>
                                    <span className="circle" style={{background: getEventColor(event)}}></span>
                                    <span className="event-name">{event.name}</span>
                                </li>
                        ))
                    }
                </ul>
                : null
            }
        </div>
    )
}