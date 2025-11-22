import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaRemoveTrainingPlan } from '../../redux/actions/planActions'
import { showAddPlanTrainingModal } from '../../redux/actions/trainingDetailActions'
import './styles.css'

export const TrainingDetailPlanButton = () => {

    const dispatch = useDispatch()
    const currentTraining = useSelector(state => state.training.currentTraining)
    const addPlanTrainingButtonIsVisible = useSelector(state => state.trainingDetail.addPlanTrainingButtonIsVisible)
    const removePlanTrainingButtonIsVisible = useSelector(state => state.trainingDetail.removePlanTrainingButtonIsVisible)    

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
                            dispatch(showAddPlanTrainingModal())
                        }}>Добавить в план</button>
                    }

                    {
                        !removePlanTrainingButtonIsVisible
                        ? <div></div>
                        :
                        <button 
                        className='btn btn-outline-link'
                        onClick={() => {
                            dispatch(sagaRemoveTrainingPlan())
                        }}>Убрать из плана</button>
                    }                   
                </div>                
            }                     
        </React.Fragment>  
    )
}