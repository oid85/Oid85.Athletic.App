import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './styles.css'

export const TrainingDetailPlanButton = () => {

    const currentTraining = useSelector(state => state.training.currentTraining)
    const addPlanTrainingButtonIsVisible = useSelector(state => state.trainingDetail.addPlanTrainingButtonIsVisible)
    const removePlanTrainingButtonIsVisible = useSelector(state => state.trainingDetail.removePlanTrainingButtonIsVisible)

    console.log(addPlanTrainingButtonIsVisible, removePlanTrainingButtonIsVisible)

    return (
        <React.Fragment> 
            {
                !currentTraining.id
                ? <div></div>
                :                 
                <div>
                    {
                        !addPlanTrainingButtonIsVisible
                        ? <div></div>
                        :
                        <button 
                        className='btn btn-outline-link'
                        onClick={() => {
                        
                        }}>Добавить в план</button>
                    }

                    {
                        !removePlanTrainingButtonIsVisible
                        ? <div></div>
                        :
                        <button 
                        className='btn btn-outline-link'
                        onClick={() => {
                        
                        }}>Убрать из плана</button>
                    }                   
                </div>                
            }                     
        </React.Fragment>  
    )
}