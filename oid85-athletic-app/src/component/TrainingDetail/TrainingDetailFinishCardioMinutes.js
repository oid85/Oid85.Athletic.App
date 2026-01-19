import React from 'react'
import {useDispatch} from 'react-redux'
import { showEditTrainingDetailFinishCardioMinutesModal } from '../../redux/actions/trainingDetailActions'
import './styles.css'

export const TrainingDetailFinishCardioMinutes = ({finishCardioMinutes}) => {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            {
                !finishCardioMinutes
                ? <div className='training-detail-finish-cardio-minutes'></div>
                :
                <div className='training-detail-finish-cardio-minutes'>
                    <div className='training-detail-finish-cardio-minutes-value'>{`Заминка: ${finishCardioMinutes}'`}</div>
                    <button 
                        className='btn btn-outline-link training-detail-finish-cardio-minutes-button'
                        onClick={() => {
                            dispatch(showEditTrainingDetailFinishCardioMinutesModal())
                    }}>...</button>                        
                </div>                                       
            }
        </React.Fragment>   
    )
}