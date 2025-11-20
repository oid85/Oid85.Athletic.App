import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchGetTrainingList} from '../actions/trainingActions'
import {
    SAGA_TRAINING_LIST, 
    SAGA_CREATE_TRAINING, 
    SAGA_EDIT_TRAINING, 
    SAGA_DELETE_TRAINING
} from '../types/trainingTypes'
import {
    getTrainingListFromApi, 
    createTrainingFromApi, 
    editTrainingFromApi, 
    deleteTrainingFromApi
} from '../api/trainingApi'

const currentTraining = (state) => state.training.currentTraining

export function* sagaWatcherTraining() {
    yield takeEvery(SAGA_TRAINING_LIST, sagaWorkerGetTrainingList)
    yield takeEvery(SAGA_CREATE_TRAINING, sagaWorkerCreateTraining)
    yield takeEvery(SAGA_EDIT_TRAINING, sagaWorkerEditTraining)
    yield takeEvery(SAGA_DELETE_TRAINING, sagaWorkerDeleteTraining)
}

function* sagaWorkerGetTrainingList() {
    let getTrainingListResult = yield call(getTrainingListFromApi)    
    yield put(fetchGetTrainingList(getTrainingListResult))
}

function* sagaWorkerCreateTraining() {          
    let training = yield select(currentTraining)        
    yield call(createTrainingFromApi, training.name)
    let getTrainingListResult = yield call(getTrainingListFromApi)
    yield put(fetchGetTrainingList(getTrainingListResult))
}

function* sagaWorkerEditTraining() {         
    let training = yield select(currentTraining)        
    yield call(editTrainingFromApi, training.id, training.name)
    let getTrainingListResult = yield call(getTrainingListFromApi)
    yield put(fetchGetTrainingList(getTrainingListResult))
}

function* sagaWorkerDeleteTraining() {        
    let training = yield select(currentTraining)        
    yield call(deleteTrainingFromApi, training.id)
    let getTrainingListResult = yield call(getTrainingListFromApi)
    yield put(fetchGetTrainingList(getTrainingListResult))
}