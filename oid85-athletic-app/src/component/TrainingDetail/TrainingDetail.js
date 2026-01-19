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
import { EditTrainingDetailCyclesModal } from './EditTrainingDetailCyclesModal'
import { EditTrainingDetailStartCardioMinutesModal } from './EditTrainingDetailStartCardioMinutesModal'
import { EditTrainingDetailFinishCardioMinutesModal } from './EditTrainingDetailFinishCardioMinutesModal'
import { TrainingDetailPlanButton } from './TrainingDetailPlanButton'
import { AddPlanTrainingModal } from './AddPlanTrainingModal'

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

    return (
        <React.Fragment>
        {
            !trainingDetail || loading
            ? <Loader/>
            : 
            <div className='training-detail'>
                <TrainingDetailPlanButton />
                <TrainingDetailTitle title = {trainingDetail.name} />
                <TrainingDetailIntensity totalCountIterations = {trainingDetail.totalCountIterations} totalWeight = {trainingDetail.totalWeight} />
                <TrainingDetailStartCardioMinutes startCardioMinutes = {trainingDetail.startCardioMinutes} />
                <TrainingDetailExerciseList exercises = {trainingDetail.exercises} />
                <TrainingDetailFinishCardioMinutes finishCardioMinutes = {trainingDetail.finishCardioMinutes} />
                <TrainingDetailCycles cycles = {trainingDetail.cycles} />
                <EditTrainingDetailExerciseModal />
                <EditTrainingDetailCyclesModal />
                <EditTrainingDetailStartCardioMinutesModal />
                <EditTrainingDetailFinishCardioMinutesModal />
                <AddPlanTrainingModal />
            </div>          
        }
        </React.Fragment>  
    )
}