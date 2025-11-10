import {
    SAGA_GET_EXERCISE_TEMPLATE_LIST,
    SAGA_CREATE_EXERCISE_TEMPLATE,
    FETCH_GET_EXERCISE_TEMPLATE_LIST,
    FETCH_CURRENT_EXERCISE_TEMPLATE,
    SHOW_CREATE_EXERCISE_TEMPLATE_MODAL,
    HIDE_CREATE_EXERCISE_TEMPLATE_MODAL
} from '../types/exerciseTemplateTypes'


export const sagaGetExerciseTemplateList = () => {
    return {
        type: SAGA_GET_EXERCISE_TEMPLATE_LIST
    }
}

export const sagaCreateExerciseTemplate = () => {    
    return {
        type: SAGA_CREATE_EXERCISE_TEMPLATE
    }
}

export const fetchGetExerciseTemplateList = (data) => {
    return {
        type: FETCH_GET_EXERCISE_TEMPLATE_LIST,
        payload: data
    }
}

export const fetchCurrentExerciseTemplate = (data) => {
    return {
        type: FETCH_CURRENT_EXERCISE_TEMPLATE,
        payload: data
    }
}

export const showCreateExerciseTemplateModal = () => {
    return {
        type: SHOW_CREATE_EXERCISE_TEMPLATE_MODAL
    }
}

export const hideCreateExerciseTemplateModal = () => {
    return {
        type: HIDE_CREATE_EXERCISE_TEMPLATE_MODAL
    }
}
