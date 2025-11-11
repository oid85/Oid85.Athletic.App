import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchGetTrainingList
} from '../actions/trainingActions'
import {
    SAGA_GET_TRAINING_LIST,
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

// SagaWatcher'ы
export function* sagaWatcherTraining() {
    yield takeEvery(SAGA_GET_TRAINING_LIST, sagaWorkerGetTrainingList)
    yield takeEvery(SAGA_CREATE_TRAINING, sagaWorkerCreateTraining)
    yield takeEvery(SAGA_EDIT_TRAINING, sagaWorkerEditTraining)
    yield takeEvery(SAGA_DELETE_TRAINING, sagaWorkerDeleteTraining)
}

// SagaWorker'ы
function* sagaWorkerGetTrainingList() {
    yield put(showLoader())
    let getTrainingListResult = yield call(getTrainingListFromApi)    
    yield put(fetchGetTrainingList(getTrainingListResult))
    yield put(hideLoader())
}

function* sagaWorkerCreateTraining() {    
    yield put(showLoader())        
    let training = yield select(currentTraining)        
    yield call(createTrainingFromApi, training.name)
    let getTrainingListResult = yield call(getTrainingListFromApi)
    yield put(fetchGetTrainingList(getTrainingListResult))
    yield put(hideLoader())
}

function* sagaWorkerEditTraining() {    
    yield put(showLoader())        
    let training = yield select(currentTraining)        
    yield call(editTrainingFromApi, training.id, training.name)
    let getTrainingListResult = yield call(getTrainingListFromApi)
    yield put(fetchGetTrainingList(getTrainingListResult))
    yield put(hideLoader())
}

function* sagaWorkerDeleteTraining() {    
    yield put(showLoader())        
    let training = yield select(currentTraining)        
    yield call(deleteTrainingFromApi, training.id)
    let getTrainingListResult = yield call(getTrainingListFromApi)
    yield put(fetchGetTrainingList(getTrainingListResult))
    yield put(hideLoader())
}