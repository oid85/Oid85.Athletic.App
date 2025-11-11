import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {sagaGetTrainingList} from '../../redux/actions/trainingActions'
import Loader from '../Loader/Loader'
import {TrainingListItem} from './TrainingListItem'
import {CreateTrainingListItemButton} from './CreateTrainingListItemButton'
import {CreateTrainingModal} from './CreateTrainingModal'
import {EditTrainingModal} from './EditTrainingModal'
import './styles.css'

export const TrainingList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const trainingList = useSelector(state => state.training.trainingList)

    useEffect(() => {
        dispatch(sagaGetTrainingList())
    }, [])

    return (
        <React.Fragment>
        {
            !trainingList.result || loading
            ? <Loader/>
            : 
            <div className='training-list'>
                <CreateTrainingListItemButton />
                {
                    trainingList.result.trainings.map((training, index) => (
                        <TrainingListItem key = {index} training = {training} />
                    ))
                }
                <CreateTrainingModal />
                <EditTrainingModal />                    
            </div>          
        }
        </React.Fragment>                
    )
}