import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchExerciseList
} from '../actions/trainingActions'
import {
    SAGA_EXERCISE_LIST
} from '../types/trainingTypes'
import {
    exerciseListFromApi
} from "../api/trainingApi"

// SagaWatcher'ы
export function* sagaWatcherTraining() {
    yield takeEvery(SAGA_EXERCISE_LIST, sagaWorkerExerciseList)
}

// SagaWorker'ы
function* sagaWorkerExerciseList() {
    try {
        yield put(showLoader())

        let data = yield call(exerciseListFromApi)
        
        yield put(fetchExerciseList(data))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
