import React from 'react'
import {Calendar} from '../Calendar/Calendar'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const PlanListItemCalendar = ({date}) => {    

    let className = 'plan-list-item-calendar'
    let today = moment().format('YYYY-MM-DD').toString()
    
    if (date == today)
    {
        className = className + ' plan-list-item-calendar-today'
    }    

    return (
        <React.Fragment>
            <div className={className}>
                <Calendar date = {date} />
            </div>
        </React.Fragment>
    )
}