import React from 'react'
import {useDispatch} from 'react-redux'
import { showEditTrainingDetailCyclesModal } from '../../redux/actions/trainingDetailActions'
import './styles.css'

export const TrainingDetailCycles = ({cycles}) => {

    const dispatch = useDispatch()

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
                            dispatch(showEditTrainingDetailCyclesModal())
                    }}>...</button>                        
                </div>                                        
            }      
        </React.Fragment>  
    )
}