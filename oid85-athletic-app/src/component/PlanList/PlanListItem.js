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
                <PlanListItemTraining training = {{...planTraining.morningTraining}} />
                <PlanListItemTraining training = {{...planTraining.dayTraining}} />
            </div>
        </React.Fragment>
    )
}