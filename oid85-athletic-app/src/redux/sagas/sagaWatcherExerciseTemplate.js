import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchGetExerciseTemplateList
} from '../actions/exerciseTemplateActions'
import {
    SAGA_GET_EXERCISE_TEMPLATE_LIST
} from '../types/exerciseTemplateTypes'
import {
    getExerciseTemplateListFromApi
} from '../api/exerciseTemplateApi'

// SagaWatcher'ы
export function* sagaWatcherExerciseTemplate() {
    yield takeEvery(SAGA_GET_EXERCISE_TEMPLATE_LIST, sagaWorkerGetExerciseTemplateList)
}

// SagaWorker'ы
function* sagaWorkerGetExerciseTemplateList() {
    try {
        yield put(showLoader())

        let data = yield call(getExerciseTemplateListFromApi)
        
        yield put(fetchGetExerciseTemplateList(data))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
