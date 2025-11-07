import {
    SAGA_GET_EXERCISE_TEMPLATE_LIST,

    FETCH_GET_EXERCISE_TEMPLATE_LIST
} from '../types/exerciseTemplateTypes'


export const sagaGetExerciseTemplateList = () => {
    return {
        type: SAGA_GET_EXERCISE_TEMPLATE_LIST
    }
}

export const fetchGetExerciseTemplateList = (data) => {
    return {
        type: FETCH_GET_EXERCISE_TEMPLATE_LIST,
        payload: data
    }
}
