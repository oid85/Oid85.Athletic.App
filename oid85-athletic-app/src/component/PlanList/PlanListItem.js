import React from 'react'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { PlanListItemCalendar } from './PlanListItemCalendar'
import { PlanListItemTraining } from './PlanListItemTraining'

export const PlanListItem = ({key, planTraining}) => {

    let className = 'plan-list-item'
    let today = moment().format('YYYY-MM-DD').toString()
    
    if (planTraining.date == today)
    {
        className = className + ' plan-list-item-today'
    }

    return (
        <React.Fragment>
            <div className={className} key={key}>
                <PlanListItemCalendar date = {planTraining.date} />                
                <PlanListItemTraining training = {{...planTraining.dayTraining}} planTraining = {planTraining} />
            </div>
        </React.Fragment>
    )
}