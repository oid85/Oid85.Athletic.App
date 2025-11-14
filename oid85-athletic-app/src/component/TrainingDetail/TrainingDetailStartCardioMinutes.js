import React from 'react'
import './styles.css'

export const TrainingDetailStartCardioMinutes = ({startCardioMinutes}) => {
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

                    }}>...</button>                        
                </div>                                       
            }
        </React.Fragment>  
    )
}