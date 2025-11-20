import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { PlanListItemCalendar } from './PlanListItemCalendar'
import { PlanListItemTraining } from './PlanListItemTraining'

export const PlanListItem = ({key, planTraining}) => {
    return (
        <React.Fragment>
            <div className='plan-list-item' key={key}>
                <PlanListItemCalendar date = {planTraining.date} />
                <PlanListItemTraining training = {{...planTraining.morningTraining}} planTraining = {planTraining} />
                <PlanListItemTraining training = {{...planTraining.dayTraining}} planTraining = {planTraining} />
            </div>
        </React.Fragment>
    )
}