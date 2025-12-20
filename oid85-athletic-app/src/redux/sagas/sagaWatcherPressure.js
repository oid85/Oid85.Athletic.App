import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchGetPressureList} from '../actions/pressureActions'
import {
    SAGA_PRESSURE_LIST, 
    SAGA_CREATE_PRESSURE
} from '../types/pressureTypes'
import {
    getPressureListFromApi,
    createPressureFromApi
} from '../api/pressureApi'

const currentPressure = (state) => state.pressure.currentPressure

export function* sagaWatcherPressure() {
    yield takeEvery(SAGA_PRESSURE_LIST, sagaWorkerGetPressureList)
    yield takeEvery(SAGA_CREATE_PRESSURE, sagaWorkerCreatePressure)
}

function* sagaWorkerGetPressureList() {
    let getPressureListResult = yield call(getPressureListFromApi)    
    yield put(fetchGetPressureList(getPressureListResult))
}

function* sagaWorkerCreatePressure() {
    let pressure = yield select(currentPressure)
    yield call(createPressureFromApi, pressure.sys, pressure.dia, pressure.pulse)
    let getPressureListResult = yield call(getPressureListFromApi)
    yield put(fetchGetPressureList(getPressureListResult))
}
