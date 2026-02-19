import React from 'react'
import {useDispatch} from 'react-redux'
import {fetchCurrentTraining} from '../../redux/actions/trainingActions'
import {showRemovePlanTrainingButton, hideAddPlanTrainingButton} from '../../redux/actions/trainingDetailActions'
import {fetchCurrentPlan} from '../../redux/actions/planActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { intensityColor } from '../../colorHelper'

export const PlanListItemTraining = ({training, planTraining}) => {

    const dispatch = useDispatch()

    let color = intensityColor(training.totalWeight)

    return (
        <React.Fragment>
            <div 
                className='plan-list-item-training'
                style={{backgroundColor: color}}
                onClick={() => {
                    dispatch(fetchCurrentTraining({...training}))
                    dispatch(fetchCurrentPlan({...planTraining}))                    
                    dispatch(showRemovePlanTrainingButton())
                    dispatch(hideAddPlanTrainingButton())
                    }}>
                {
                    !training.name ? <div></div> :
                    <div>
                        <div className='plan-list-item-training-name'>{training.name}</div>
                        <div className='plan-list-item-training-description'>{training.description}</div>
                        <div>{training.totalCountIterations} повт. {training.totalWeight} кг</div>                       
                    </div>
                }
            </div>
        </React.Fragment>
    )
}