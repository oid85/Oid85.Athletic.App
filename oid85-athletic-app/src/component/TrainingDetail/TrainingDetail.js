import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import { sagaTrainingDetail } from '../../redux/actions/trainingDetailActions'
import './styles.css'
import { TrainingDetailTitle } from './TrainingDetailTitle'
import { TrainingDetailExerciseList } from './TrainingDetailExerciseList'
import { TrainingDetailStartCardioMinutes } from './TrainingDetailStartCardioMinutes'
import { TrainingDetailFinishCardioMinutes } from './TrainingDetailFinishCardioMinutes'
import { TrainingDetailCycles } from './TrainingDetailCycles'
import { EditTrainingDetailExerciseModal } from './EditTrainingDetailExerciseModal'
import { TrainingDetailIntensity } from './TrainingDetailIntensity'

export const TrainingDetail = () => {
  
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const trainingDetail = useSelector(state => state.trainingDetail.trainingDetail)
    const currentTraining = useSelector(state => state.training.currentTraining)

    useEffect(() => {
        dispatch(sagaTrainingDetail())
    }, [])

    useEffect(() => {
        dispatch(sagaTrainingDetail())
    }, [currentTraining.id])

    let training = {...{...trainingDetail.result}.training}    

    return (
        <React.Fragment>
        {
            !trainingDetail.result || loading
            ? <Loader/>
            : 
            <div className='training-detail'>
                <TrainingDetailTitle title = {training.name} />
                <TrainingDetailIntensity totalCountIterations = {training.totalCountIterations} totalWeight = {training.totalWeight} />
                <TrainingDetailStartCardioMinutes startCardioMinutes = {training.startCardioMinutes} />
                <TrainingDetailExerciseList exercises = {training.exercises} />
                <TrainingDetailFinishCardioMinutes finishCardioMinutes = {training.finishCardioMinutes} />
                <TrainingDetailCycles cycles = {training.cycles} />
                <EditTrainingDetailExerciseModal />
            </div>          
        }
        </React.Fragment>  
    )
}