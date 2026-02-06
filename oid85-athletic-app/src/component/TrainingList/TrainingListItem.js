import React from 'react'
import {useDispatch} from 'react-redux'
import {fetchCurrentTraining, showEditTrainingModal} from '../../redux/actions/trainingActions'
import {showAddPlanTrainingButton, hideRemovePlanTrainingButton} from '../../redux/actions/trainingDetailActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { intensityColor } from '../../colorHelper'

export const TrainingListItem = ({key, training}) => {
    
    const dispatch = useDispatch()

    let color = intensityColor(training.totalWeight)

    if (!training.description) {
        training.description = ''
    }

    return (
        <React.Fragment>
            <div className='training-list-item-container'>
                <div 
                    className='training-list-item'
                    style={{backgroundColor: color}}
                    key={key}
                    onClick={() => {
                        dispatch(fetchCurrentTraining({...training}))
                        dispatch(showAddPlanTrainingButton())
                        dispatch(hideRemovePlanTrainingButton())
                        }}>
                            <div className='training-list-item-name'>{`${training.name} (x${training.totalCountIterations}/${training.totalWeight} кг)`}</div>
                            <div className='training-list-item-description'>{`${training.description}`}</div>
                        </div>
                <button 
                    className='btn btn-outline-link training-list-item-button'
                    onClick={() => {
                        dispatch(fetchCurrentTraining({...training}))
                        dispatch(showEditTrainingModal())
                        }}>...</button>
            </div>
        </React.Fragment>
    )
}