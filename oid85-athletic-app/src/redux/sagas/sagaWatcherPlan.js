import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchGetPlanList} from '../actions/planActions'
import {
    SAGA_PLAN_LIST,
    SAGA_ADD_MORNING_TRAINING_PLAN,
    SAGA_ADD_DAY_TRAINING_PLAN,
    SAGA_REMOVE_TRAINING_PLAN
} from '../types/planTypes'
import {
    addDayTrainingPlanFromApi,
    addMorningTrainingPlanFromApi,
    getPlanListFromApi,
    removeTrainingPlanFromApi
} from '../api/planApi'

const currentTraining = (state) => state.training.currentTraining
const currentPlan = (state) => state.plan.currentPlan

export function* sagaWatcherPlan() {
    yield takeEvery(SAGA_PLAN_LIST, sagaWorkerGetPlanList)
    yield takeEvery(SAGA_ADD_MORNING_TRAINING_PLAN, sagaWorkerAddMorningTrainingPlan)
    yield takeEvery(SAGA_ADD_DAY_TRAINING_PLAN, sagaWorkerAddDayTrainingPlan)
    yield takeEvery(SAGA_REMOVE_TRAINING_PLAN, sagaWorkerRemoveTrainingPlan)
}

function* sagaWorkerGetPlanList() {
    let getPlanListResult = yield call(getPlanListFromApi)    
    yield put(fetchGetPlanList(getPlanListResult))
}

function* sagaWorkerAddMorningTrainingPlan() {
    let training = yield select(currentTraining)
    let plan = yield select(currentPlan)
    yield call(addMorningTrainingPlanFromApi, plan.date, training.id)
    let getPlanListResult = yield call(getPlanListFromApi)
    yield put(fetchGetPlanList(getPlanListResult))
}

function* sagaWorkerAddDayTrainingPlan() {
    let training = yield select(currentTraining)
    let plan = yield select(currentPlan)
    yield call(addDayTrainingPlanFromApi, plan.date, training.id)
    let getPlanListResult = yield call(getPlanListFromApi)
    yield put(fetchGetPlanList(getPlanListResult))
}

function* sagaWorkerRemoveTrainingPlan() {
    let training = yield select(currentTraining)
    let plan = yield select(currentPlan)
    yield call(removeTrainingPlanFromApi, plan.id, training.id)
    let getPlanListResult = yield call(getPlanListFromApi)
    yield put(fetchGetPlanList(getPlanListResult))
}
