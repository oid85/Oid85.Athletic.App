import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { showEditTrainingDetailStartCardioMinutesModal } from '../../redux/actions/trainingDetailActions'
import './styles.css'

export const TrainingDetailStartCardioMinutes = ({startCardioMinutes}) => {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            {
                !startCardioMinutes
                ? <div className='training-detail-start-cardio-minutes'></div>
                :
                <div className='training-detail-start-cardio-minutes'>
                    <div className='training-detail-start-cardio-minutes-value'>{`Разминка: ${startCardioMinutes}'`}</div>
                    <button 
                        className='btn btn-outline-link training-detail-start-cardio-minutes-button'
                        onClick={() => {
                            dispatch(showEditTrainingDetailStartCardioMinutesModal())
                    }}>...</button>                        
                </div>                                       
            }
        </React.Fragment>  
    )
}