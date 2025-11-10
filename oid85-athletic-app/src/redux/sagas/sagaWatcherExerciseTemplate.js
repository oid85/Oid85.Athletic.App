import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchGetExerciseTemplateList
} from '../actions/exerciseTemplateActions'
import {
    SAGA_GET_EXERCISE_TEMPLATE_LIST,
    SAGA_CREATE_EXERCISE_TEMPLATE,
    SAGA_EDIT_EXERCISE_TEMPLATE
} from '../types/exerciseTemplateTypes'
import {
    getExerciseTemplateListFromApi,
    createExerciseTemplateFromApi,
    editExerciseTemplateFromApi
} from '../api/exerciseTemplateApi'

const currentExerciseTemplate = (state) => state.exerciseTemplate.currentExerciseTemplate

// SagaWatcher'ы
export function* sagaWatcherExerciseTemplate() {
    yield takeEvery(SAGA_GET_EXERCISE_TEMPLATE_LIST, sagaWorkerGetExerciseTemplateList)
    yield takeEvery(SAGA_CREATE_EXERCISE_TEMPLATE, sagaWorkerCreateExerciseTemplate)
    yield takeEvery(SAGA_EDIT_EXERCISE_TEMPLATE, sagaWorkerEditExerciseTemplate)
}

// SagaWorker'ы
function* sagaWorkerGetExerciseTemplateList() {
    try {
        yield put(showLoader())

        let getExerciseTemplateListResult = yield call(getExerciseTemplateListFromApi)
        
        yield put(fetchGetExerciseTemplateList(getExerciseTemplateListResult))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerCreateExerciseTemplate() {    
    try {
        yield put(showLoader())
        
        let exerciseTemplate = yield select(currentExerciseTemplate)        

        let createExerciseTemplateResult = yield call(createExerciseTemplateFromApi, exerciseTemplate.name, exerciseTemplate.equipment, exerciseTemplate.muscles)
        let getExerciseTemplateListResult = yield call(getExerciseTemplateListFromApi)

        yield put(fetchGetExerciseTemplateList(getExerciseTemplateListResult))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerEditExerciseTemplate() {    
    try {
        yield put(showLoader())
        
        let exerciseTemplate = yield select(currentExerciseTemplate)        

        let editExerciseTemplateResult = yield call(editExerciseTemplateFromApi, exerciseTemplate.id, exerciseTemplate.name, exerciseTemplate.equipment, exerciseTemplate.muscles)
        let getExerciseTemplateListResult = yield call(getExerciseTemplateListFromApi)

        yield put(fetchGetExerciseTemplateList(getExerciseTemplateListResult))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}