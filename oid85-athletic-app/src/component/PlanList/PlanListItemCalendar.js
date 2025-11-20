import React from 'react'
import {Calendar} from '../Calendar/Calendar'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const PlanListItemCalendar = ({date}) => {    
    return (
        <React.Fragment>
            <div className='plan-list-item-calendar'>
                <Calendar date = {date} />
            </div>
        </React.Fragment>
    )
}