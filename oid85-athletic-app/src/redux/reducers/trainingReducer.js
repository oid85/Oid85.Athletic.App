import {
    FETCH_GET_TRAINING_LIST,
    FETCH_CURRENT_TRAINING,
    SHOW_CREATE_TRAINING_MODAL,
    HIDE_CREATE_TRAINING_MODAL,
    SHOW_EDIT_TRAINING_MODAL,
    HIDE_EDIT_TRAINING_MODAL    
} from '../types/trainingTypes'

const initialState = {
    trainingList: {},
    currentTraining: {},
    createTrainingModalIsOpened: false,
    editTrainingModalIsOpened: false
}

export const trainingReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_GET_TRAINING_LIST:
            return {...state, trainingList: {...action.payload}}

        case FETCH_CURRENT_TRAINING:
            return {...state, currentTraining: {...action.payload}}

        case SHOW_CREATE_TRAINING_MODAL:
            return {...state, createTrainingModalIsOpened: true}
        
        case HIDE_CREATE_TRAINING_MODAL:
            return {...state, createTrainingModalIsOpened: false}

        case SHOW_EDIT_TRAINING_MODAL:
            return {...state, editTrainingModalIsOpened: true}
        
        case HIDE_EDIT_TRAINING_MODAL:
            return {...state, editTrainingModalIsOpened: false}

        default: return state
    }
}