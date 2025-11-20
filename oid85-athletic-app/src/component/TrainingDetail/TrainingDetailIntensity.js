import React from 'react'
import './styles.css'

export const TrainingDetailIntensity = ({totalCountIterations, totalWeight}) => {

    let className = 'training-detail-intensity'
 
    if (totalWeight >= 0 && totalWeight < 1000) { className = className + ' training-detail-intensity-low' }
    if (totalWeight >= 1000 && totalWeight < 2000) { className = className + ' training-detail-intensity-middle' }
    if (totalWeight >= 2000) { className = className + ' training-detail-intensity-high' }    

    return (
        <React.Fragment>
            {
                !totalCountIterations || !totalWeight
                ? <div></div>
                :
                <div className={className}>
                {`Интенсивность: x${totalCountIterations}/${totalWeight} кг`}
            </div>                                        
            }                   
        </React.Fragment>  
    )
}