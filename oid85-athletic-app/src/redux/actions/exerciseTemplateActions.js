import {
    SAGA_EXERCISE_TEMPLATE_LIST,
    SAGA_CREATE_EXERCISE_TEMPLATE,
    SAGA_EDIT_EXERCISE_TEMPLATE,
    SAGA_DELETE_EXERCISE_TEMPLATE,
    FETCH_EXERCISE_TEMPLATE_LIST,
    FETCH_CURRENT_EXERCISE_TEMPLATE,
    SHOW_CREATE_EXERCISE_TEMPLATE_MODAL,
    HIDE_CREATE_EXERCISE_TEMPLATE_MODAL,
    SHOW_EDIT_EXERCISE_TEMPLATE_MODAL,
    HIDE_EDIT_EXERCISE_TEMPLATE_MODAL
} from '../types/exerciseTemplateTypes'


export const sagaGetExerciseTemplateList = () => {
    return {
        type: SAGA_EXERCISE_TEMPLATE_LIST
    }
}

export const sagaCreateExerciseTemplate = () => {    
    return {
        type: SAGA_CREATE_EXERCISE_TEMPLATE
    }
}

export const sagaDeleteExerciseTemplate = () => {    
    return {
        type: SAGA_DELETE_EXERCISE_TEMPLATE
    }
}

export const sagaEditExerciseTemplate = () => {    
    return {
        type: SAGA_EDIT_EXERCISE_TEMPLATE
    }
}

export const fetchGetExerciseTemplateList = (data) => {
    return {
        type: FETCH_EXERCISE_TEMPLATE_LIST,
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

export const showEditExerciseTemplateModal = () => {
    return {
        type: SHOW_EDIT_EXERCISE_TEMPLATE_MODAL
    }
}

export const hideEditExerciseTemplateModal = () => {
    return {
        type: HIDE_EDIT_EXERCISE_TEMPLATE_MODAL
    }
}
