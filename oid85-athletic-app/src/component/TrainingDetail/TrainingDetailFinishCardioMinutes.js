import React from 'react'
import './styles.css'

export const TrainingDetailFinishCardioMinutes = ({finishCardioMinutes}) => {
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

                    }}>...</button>                        
                </div>                                       
            }
        </React.Fragment>   
    )
}