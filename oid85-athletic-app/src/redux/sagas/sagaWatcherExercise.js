import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchTrainingDetail} from '../actions/trainingDetailActions'
import {
    SAGA_CREATE_EXERCISE,
    SAGA_EDIT_EXERCISE,
    SAGA_DELETE_EXERCISE
} from '../types/exerciseTypes'
import {
    createExerciseFromApi,
    editExerciseFromApi,
    deleteExerciseFromApi
} from '../api/exerciseApi'
import {getTrainingDetailFromApi} from '../api/trainingDetailApi'
import { getTrainingListFromApi } from '../api/trainingApi'
import { fetchGetTrainingList } from '../actions/trainingActions'

const currentExercise = (state) => state.exercise.currentExercise
const currentExerciseTemplate = (state) => state.exerciseTemplate.currentExerciseTemplate
const currentTraining = (state) => state.training.currentTraining

export function* sagaWatcherExercise() {
    yield takeEvery(SAGA_CREATE_EXERCISE, sagaWorkerCreateExercise)
    yield takeEvery(SAGA_EDIT_EXERCISE, sagaWorkerEditExercise)
    yield takeEvery(SAGA_DELETE_EXERCISE, sagaWorkerDeleteExercise)
}

function* sagaWorkerCreateExercise() {         
    let training = yield select(currentTraining)
    let exerciseTemplate = yield select(currentExerciseTemplate)
    yield call(createExerciseFromApi, exerciseTemplate.id, training.id)
    let getTrainingDetailResult = yield call(getTrainingDetailFromApi, training.id)
    yield put(fetchTrainingDetail(getTrainingDetailResult))
    let getTrainingListResult = yield call(getTrainingListFromApi)
    yield put(fetchGetTrainingList(getTrainingListResult))
}

function* sagaWorkerEditExercise() {  
    let training = yield select(currentTraining)        
    let exercise = yield select(currentExercise)        
    yield call(editExerciseFromApi, exercise.id, exercise.order, exercise.weight, exercise.countIterations, exercise.minutes)
    let getTrainingDetailResult = yield call(getTrainingDetailFromApi, training.id)
    yield put(fetchTrainingDetail(getTrainingDetailResult))
    let getTrainingListResult = yield call(getTrainingListFromApi)
    yield put(fetchGetTrainingList(getTrainingListResult))
}

function* sagaWorkerDeleteExercise() {         
    let training = yield select(currentTraining) 
    let exercise = yield select(currentExercise)        
    yield call(deleteExerciseFromApi, exercise.id)
    let getTrainingDetailResult = yield call(getTrainingDetailFromApi, training.id)
    yield put(fetchTrainingDetail(getTrainingDetailResult))
    let getTrainingListResult = yield call(getTrainingListFromApi)
    yield put(fetchGetTrainingList(getTrainingListResult))
}