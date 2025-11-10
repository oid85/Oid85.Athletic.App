import {
    FETCH_GET_EXERCISE_TEMPLATE_LIST,
    FETCH_CURRENT_EXERCISE_TEMPLATE,
    SHOW_CREATE_EXERCISE_TEMPLATE_MODAL,
    HIDE_CREATE_EXERCISE_TEMPLATE_MODAL
} from '../types/exerciseTemplateTypes'

const initialState = {
    exerciseTemplateList: {},
    currentExerciseTemplate: {},
    createExerciseTemplateModalIsOpened: false    
}

export const exerciseTemplateReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_GET_EXERCISE_TEMPLATE_LIST:
            return {...state, exerciseTemplateList: {...action.payload}}

        case FETCH_CURRENT_EXERCISE_TEMPLATE:
            return {...state, currentExerciseTemplate: {...action.payload}}

        case SHOW_CREATE_EXERCISE_TEMPLATE_MODAL:
            return {...state, createExerciseTemplateModalIsOpened: true}
        
        case HIDE_CREATE_EXERCISE_TEMPLATE_MODAL:
            return {...state, createExerciseTemplateModalIsOpened: false}

        default: return state
    }
}