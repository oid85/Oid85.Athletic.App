import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchTrainingDetail} from '../actions/trainingDetailActions'
import {
    SAGA_TRAINING_DETAIL,
    SAGA_EDIT_TRAINING_DETAIL_CYCLES,
    SAGA_EDIT_TRAINING_DETAIL_START_CARDIO_MINUTES,
    SAGA_EDIT_TRAINING_DETAIL_FINISH_CARDIO_MINUTES
} from '../types/trainingDetailTypes'
import {
    getTrainingDetailFromApi,
    editTrainingDetailCyclesFromApi,
    editTrainingDetailStartCardioMinutesFromApi,
    editTrainingDetailFinishCardioMinutesFromApi
} from '../api/trainingDetailApi'

const currentTraining = (state) => state.training.currentTraining
const trainingDetail = (state) => state.trainingDetail.trainingDetail

export function* sagaWatcherTrainingDetail() {
    yield takeEvery(SAGA_TRAINING_DETAIL, sagaWorkerTrainingDetail)
    yield takeEvery(SAGA_EDIT_TRAINING_DETAIL_CYCLES, sagaWorkerEditTrainingDetailCycles)
    yield takeEvery(SAGA_EDIT_TRAINING_DETAIL_START_CARDIO_MINUTES, sagaWorkerEditTrainingDetailStartCardioMinutes)
    yield takeEvery(SAGA_EDIT_TRAINING_DETAIL_FINISH_CARDIO_MINUTES, sagaWorkerEditTrainingDetailFinishCardioMinutes)
}

function* sagaWorkerTrainingDetail() {          
    let training = yield select(currentTraining)
    let getTrainingDetailResult = yield call(getTrainingDetailFromApi, training.id)
    yield put(fetchTrainingDetail(getTrainingDetailResult.result.training))
}

function* sagaWorkerEditTrainingDetailCycles() {          
    let training = yield select(trainingDetail)
    yield call(editTrainingDetailCyclesFromApi, training.id, training.cycles)
    let getTrainingDetailResult = yield call(getTrainingDetailFromApi, training.id)
    yield put(fetchTrainingDetail(getTrainingDetailResult.result.training))
}

function* sagaWorkerEditTrainingDetailStartCardioMinutes() {          
    let training = yield select(trainingDetail)
    yield call(editTrainingDetailStartCardioMinutesFromApi, training.id, training.startCardioMinutes)
    let getTrainingDetailResult = yield call(getTrainingDetailFromApi, training.id)
    yield put(fetchTrainingDetail(getTrainingDetailResult.result.training))
}

function* sagaWorkerEditTrainingDetailFinishCardioMinutes() {          
    let training = yield select(trainingDetail)
    yield call(editTrainingDetailFinishCardioMinutesFromApi, training.id, training.finishCardioMinutes)
    let getTrainingDetailResult = yield call(getTrainingDetailFromApi, training.id)
    yield put(fetchTrainingDetail(getTrainingDetailResult.result.training))
}