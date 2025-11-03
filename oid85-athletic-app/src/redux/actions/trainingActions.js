import {
    SAGA_EXERCISE_LIST,

    FETCH_EXERCISE_LIST
} from '../types/trainingTypes'


export const sagaExerciseList = () => {
    return {
        type: SAGA_EXERCISE_LIST
    }
}

export const fetchExerciseList = (data) => {
    return {
        type: FETCH_EXERCISE_LIST,
        payload: data
    }
}
