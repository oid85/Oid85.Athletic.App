import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { PressureListDayItemCalendar } from './PressureListDayItemCalendar'
import { PressureListIntraDayItem } from './PressureListIntraDayItem'

export const PressureListDayItem = ({key, dayItem}) => {

    return (
        <React.Fragment>
            <div className='horizontal-container' key={key}>
                <PressureListDayItemCalendar date = {dayItem.date} />
                <div className='horizontal-container'>
                {
                    dayItem.intraDayItems.map((intraDayItem, index) => (
                        <PressureListIntraDayItem key = {index} intraDayItem = {intraDayItem} />
                    ))
                }
                </div>                
            </div>
        </React.Fragment>
    )
}