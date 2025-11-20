import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Calendar} from '../Calendar/Calendar'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const PlanListItem = ({key, planTraining}) => {
    
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <div 
                className='plan-list-item'
                key={key}>
                <div className='plan-list-item-calendar'>
                    <Calendar date = {planTraining.date} />
                </div>
                <div className='plan-list-item-morning-training'>
                    <div>{{...planTraining.morningTraining}.name}</div>
                    <div>{{...planTraining.morningTraining}.totalCountIterations} повт.</div>
                    <div>{{...planTraining.morningTraining}.totalWeight} кг</div>
                </div>
                <div className='plan-list-item-day-training'>
                    <div>{{...planTraining.dayTraining}.name}</div>
                    <div>{{...planTraining.dayTraining}.totalCountIterations} повт.</div>
                    <div>{{...planTraining.dayTraining}.totalWeight} кг</div>
                </div>                
            </div>
        </React.Fragment>
    )
}