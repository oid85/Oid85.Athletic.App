import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchCurrentTraining, showEditTrainingModal} from '../../redux/actions/trainingActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const TrainingListItem = ({key, training}) => {
    
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <div className='training-list-item'>
                <div 
                    className='training-list-item-name' 
                    key={key}
                    onClick={() => {
                        dispatch(fetchCurrentTraining({...training}))
                        }}>{`${training.name} (x${training.totalCountIterations}/${training.totalWeight} кг)`}</div>
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