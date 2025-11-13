import React from 'react'
import './styles.css'

export const TrainingDetailTitle = ({title}) => {
    return (
        <React.Fragment>
            <div className='training-detail-title'>
                {title}
            </div>        
        </React.Fragment>  
    )
}