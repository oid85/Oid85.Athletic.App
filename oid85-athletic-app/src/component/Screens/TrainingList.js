import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {sagaGetTrainingList} from '../../redux/actions/trainingActions'
import Loader from '../Loader/Loader'
import {TrainingListItem} from '../TrainingListItem/TrainingListItem'
import {CreateTrainingListItemButton} from '../TrainingListItem/CreateTrainingListItemButton'
import {CreateTrainingModal} from '../../component/TrainingListItem/CreateTrainingModal'
import {EditTrainingModal} from '../../component/TrainingListItem/EditTrainingModal'
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