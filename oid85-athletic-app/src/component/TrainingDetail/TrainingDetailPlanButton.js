import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './styles.css'

export const TrainingDetailPlanButton = () => {

    const currentTraining = useSelector(state => state.training.currentTraining)

    return (
        <React.Fragment> 
            {
                !currentTraining.id
                ? <div></div>
                :                 
                <div>
                    <button 
                        className='btn btn-outline-link'
                        onClick={() => {
                        
                    }}>Добавить в план</button>
                    <button 
                        className='btn btn-outline-link'
                        onClick={() => {
                        
                    }}>Убрать из плана</button>                    
                </div>                
            }                     
        </React.Fragment>  
    )
}