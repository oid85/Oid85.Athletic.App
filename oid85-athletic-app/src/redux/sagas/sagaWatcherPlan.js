import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchGetPlanList} from '../actions/planActions'
import {
    SAGA_PLAN_LIST
} from '../types/planTypes'
import {
    getPlanListFromApi
} from '../api/planApi'

export function* sagaWatcherPlan() {
    yield takeEvery(SAGA_PLAN_LIST, sagaWorkerGetPlanList)
}

function* sagaWorkerGetPlanList() {
    let getPlanListResult = yield call(getPlanListFromApi)    
    yield put(fetchGetPlanList(getPlanListResult))
}
