import {
    FETCH_CURRENT_EXERCISE,
    SHOW_EDIT_EXERCISE_MODAL,
    HIDE_EDIT_EXERCISE_MODAL    
} from '../types/exerciseTypes'

const initialState = {
    currentExercise: {},
    createExerciseModalIsOpened: false,
    editExerciseModalIsOpened: false
}

export const exerciseReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_CURRENT_EXERCISE:
            return {...state, currentExercise: {...action.payload}}

        case SHOW_EDIT_EXERCISE_MODAL:
            return {...state, editExerciseModalIsOpened: true}
        
        case HIDE_EDIT_EXERCISE_MODAL:
            return {...state, editExerciseModalIsOpened: false}

        default: return state
    }
}