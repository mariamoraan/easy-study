import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useContext } from "react";
import { AppContext, IAppContext } from "../../../App";
import { useCalendar } from "../../hooks/useCalendar";
import { Day } from "../day/Day";
import "./Calendar.css";

const WEEK_DAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

export const Calendar = () => {
    const {events} = useContext(AppContext) as IAppContext;
    const today = new Date();

    const {
        date,
        setDate,
        monthDaysNumber, 
        monthFirstDay, 
        monthName, 
        fullYear,
        prevMonth,
        nextMonth,
        buildMonthWeeks,
    } = useCalendar()

    return (
        <div className="calendar-wrapper">
            <div className="calendar-header">
                    <button className='arrow' onClick={() => prevMonth()}><ChevronLeft /></button>
                    <button className='arrow' onClick={() => nextMonth()}><ChevronRight /></button>
                    <span 
                    className='month-and-year'
                    onClick={() => setDate(new Date())}
                    >
                        {monthName} {fullYear}
                    </span>
                </div>
                <table className="calendar">
                    <thead>
                        <tr>
                            {WEEK_DAYS.map(day => <th key={day}>{day}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {
                        buildMonthWeeks(monthDaysNumber, monthFirstDay).map((days, index) => (
                            <tr key={`week-${index+1}`}>
                                {
                                    days.map((day, indexRow) => day.map((d, indexDay) => {
                                        return d === 0
                                        ? <td className='hidden' key={`${indexRow}-${indexDay}`}></td> 
                                        : <td key={d.toString()} >
                                            <Day date={new Date(`${date.getFullYear()}-${date.getMonth() + 1}-${d}`)} />
                                        </td>
                                    }))
                                }
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
        </div>
    )
}