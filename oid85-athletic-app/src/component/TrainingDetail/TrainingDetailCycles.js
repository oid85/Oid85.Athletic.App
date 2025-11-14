import React from 'react'
import './styles.css'

export const TrainingDetailCycles = ({cycles}) => {
    return (
        <React.Fragment>
            {
                !cycles
                ? <div className='training-detail-cycles'></div>
                :
                <div className='training-detail-cycles'>
                    <div className='training-detail-cycles-value'>{`Циклов: ${cycles}`}</div>
                    <button 
                        className='btn btn-outline-link training-detail-cycles-button'
                        onClick={() => {

                    }}>...</button>                        
                </div>                                        
            }      
        </React.Fragment>  
    )
}