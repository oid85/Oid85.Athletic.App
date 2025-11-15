import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchTrainingDetail} from '../actions/trainingDetailActions'
import {SAGA_TRAINING_DETAIL} from '../types/trainingDetailTypes'
import {getTrainingDetailFromApi} from '../api/trainingDetailApi'

const currentTraining = (state) => state.training.currentTraining

export function* sagaWatcherTrainingDetail() {
    yield takeEvery(SAGA_TRAINING_DETAIL, sagaWorkerTrainingDetail)
}

function* sagaWorkerTrainingDetail() {          
    let training = yield select(currentTraining)
    let getTrainingDetailResult = yield call(getTrainingDetailFromApi, training.id)
    yield put(fetchTrainingDetail(getTrainingDetailResult))
}
