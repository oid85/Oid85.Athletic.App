import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchCurrentTraining, showEditTrainingModal} from '../../redux/actions/trainingActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const TrainingListItem = ({key, training}) => {
    
    const dispatch = useDispatch()

    let className = 'training-list-item-name'
 
    if (training.totalWeight >= 0 && training.totalWeight < 1000) { className = className + ' training-list-item-name-low' }
    if (training.totalWeight >= 1000 && training.totalWeight < 2000) { className = className + ' training-list-item-name-middle' }
    if (training.totalWeight >= 2000) { className = className + ' training-list-item-name-high' }

    return (
        <React.Fragment>
            <div className='training-list-item'>
                <div 
                    className={className} 
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