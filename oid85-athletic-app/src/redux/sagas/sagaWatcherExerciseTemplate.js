import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchGetExerciseTemplateList} from '../actions/exerciseTemplateActions'
import {
    SAGA_EXERCISE_TEMPLATE_LIST, 
    SAGA_CREATE_EXERCISE_TEMPLATE, 
    SAGA_EDIT_EXERCISE_TEMPLATE, 
    SAGA_DELETE_EXERCISE_TEMPLATE
} from '../types/exerciseTemplateTypes'
import {
    getExerciseTemplateListFromApi,
    createExerciseTemplateFromApi,
    editExerciseTemplateFromApi,
    deleteExerciseTemplateFromApi
} from '../api/exerciseTemplateApi'

const currentExerciseTemplate = (state) => state.exerciseTemplate.currentExerciseTemplate

export function* sagaWatcherExerciseTemplate() {
    yield takeEvery(SAGA_EXERCISE_TEMPLATE_LIST, sagaWorkerGetExerciseTemplateList)
    yield takeEvery(SAGA_CREATE_EXERCISE_TEMPLATE, sagaWorkerCreateExerciseTemplate)
    yield takeEvery(SAGA_EDIT_EXERCISE_TEMPLATE, sagaWorkerEditExerciseTemplate)
    yield takeEvery(SAGA_DELETE_EXERCISE_TEMPLATE, sagaWorkerDeleteExerciseTemplate)
}

function* sagaWorkerGetExerciseTemplateList() {
    let getExerciseTemplateListResult = yield call(getExerciseTemplateListFromApi)    
    yield put(fetchGetExerciseTemplateList(getExerciseTemplateListResult))
}

function* sagaWorkerCreateExerciseTemplate() {         
    let exerciseTemplate = yield select(currentExerciseTemplate)        
    yield call(createExerciseTemplateFromApi, exerciseTemplate.name, exerciseTemplate.equipment, exerciseTemplate.muscles)
    let getExerciseTemplateListResult = yield call(getExerciseTemplateListFromApi)
    yield put(fetchGetExerciseTemplateList(getExerciseTemplateListResult))
}

function* sagaWorkerEditExerciseTemplate() {          
    let exerciseTemplate = yield select(currentExerciseTemplate)        
    yield call(editExerciseTemplateFromApi, exerciseTemplate.id, exerciseTemplate.name, exerciseTemplate.equipment, exerciseTemplate.muscles)
    let getExerciseTemplateListResult = yield call(getExerciseTemplateListFromApi)
    yield put(fetchGetExerciseTemplateList(getExerciseTemplateListResult))
}

function* sagaWorkerDeleteExerciseTemplate() {          
    let exerciseTemplate = yield select(currentExerciseTemplate)        
    yield call(deleteExerciseTemplateFromApi, exerciseTemplate.id)
    let getExerciseTemplateListResult = yield call(getExerciseTemplateListFromApi)
    yield put(fetchGetExerciseTemplateList(getExerciseTemplateListResult))
}