import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const TrainingDetailExerciseListItem = ({key, exercise}) => {
    
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <div className='training-detail-exercise-list-item'>
                <div 
                    className='training-detail-exercise-list-item-order' 
                    key={key}>{exercise.order}.</div>                
                <div 
                    className='training-detail-exercise-list-item-name' 
                    key={key}>{exercise.name}</div>
                {
                    !exercise.weight
                    ? <div className='training-detail-exercise-list-item-weight'></div>
                    :
                    <div className='training-detail-exercise-list-item-weight'
                    key={key}>{`${exercise.weight} кг`}</div>
                }                      
                {
                    !exercise.countIterations
                    ? <div className='training-detail-exercise-list-item-count-iterations'></div>
                    :
                    <div className='training-detail-exercise-list-item-count-iterations'
                    key={key}>{`x${exercise.countIterations}`}</div>
                }
                {
                    !exercise.minutes
                    ? <div className='training-detail-exercise-list-item-minutes'></div>
                    :
                    <div className='training-detail-exercise-list-item-minutes'
                    key={key}>{`${exercise.minutes}'`}</div>
                }              
                <button 
                    className='btn btn-outline-link training-detail-exercise-list-item-button'
                    onClick={() => {

                        }}>...</button>
            </div>
        </React.Fragment>
    )
}