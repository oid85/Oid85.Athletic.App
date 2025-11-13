import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import { sagaTrainingDetail } from '../../redux/actions/trainingDetailActions'
import './styles.css'
import { TrainingDetailTitle } from './TrainingDetailTitle'
import { TrainingDetailExerciseList } from './TrainingDetailExerciseList'

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
                <hr />
                <TrainingDetailExerciseList exercises = {training.exercises} />
                <hr />
                {
                    !training.cycles
                    ? <div className='training-detail-cycles'></div>
                    :
                    <div className='training-detail-cycles'>
                        <div className='training-detail-cycles-value'>{`Циклов: ${training.cycles}`}</div>
                        <button 
                            className='btn btn-outline-link training-detail-cycles-button'
                            onClick={() => {

                        }}>...</button>                        
                    </div>                                        
                }
            </div>          
        }
        </React.Fragment>  
    )
}