import React from 'react'
import './styles.css'

export const TrainingDetailIntensity = ({totalCountIterations, totalWeight}) => {
    return (
        <React.Fragment>
            {
                !totalCountIterations || !totalWeight
                ? <div className='training-detail-intensity'></div>
                :
                <div className='training-detail-intensity'>
                {`Интенсивность: x${totalCountIterations}/${totalWeight} кг`}
            </div>                                        
            }                   
        </React.Fragment>  
    )
}