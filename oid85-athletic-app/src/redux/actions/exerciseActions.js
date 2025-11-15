import {
    SAGA_CREATE_EXERCISE,
    SAGA_EDIT_EXERCISE,
    SAGA_DELETE_EXERCISE,
    FETCH_CURRENT_EXERCISE,
    SHOW_EDIT_EXERCISE_MODAL,
    HIDE_EDIT_EXERCISE_MODAL
} from '../types/exerciseTypes'

export const sagaCreateExercise = () => {    
    return {
        type: SAGA_CREATE_EXERCISE
    }
}

export const sagaDeleteExercise = () => {    
    return {
        type: SAGA_DELETE_EXERCISE
    }
}

export const sagaEditExercise = () => {    
    return {
        type: SAGA_EDIT_EXERCISE
    }
}

export const fetchCurrentExercise = (data) => {
    return {
        type: FETCH_CURRENT_EXERCISE,
        payload: data
    }
}

export const showEditExerciseModal = () => {
    return {
        type: SHOW_EDIT_EXERCISE_MODAL
    }
}

export const hideEditExerciseModal = () => {
    return {
        type: HIDE_EDIT_EXERCISE_MODAL
    }
}
