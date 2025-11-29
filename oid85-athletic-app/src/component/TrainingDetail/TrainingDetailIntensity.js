import React from 'react'
import { intensityColor } from '../../colorHelper'
import './styles.css'

export const TrainingDetailIntensity = ({totalCountIterations, totalWeight}) => {

    let color = intensityColor(totalWeight)

    return (
        <React.Fragment>
            {
                !totalCountIterations || !totalWeight
                ? <div></div>
                :
                <div 
                    className='training-detail-intensity'
                    style={{backgroundColor: color}}>
                {`Интенсивность: x${totalCountIterations}/${totalWeight} кг`}
            </div>                                        
            }                   
        </React.Fragment>  
    )
}