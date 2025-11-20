import {
    FETCH_TRAINING_DETAIL,
    SHOW_ADD_PLAN_TRAINING_BUTTON,
    HIDE_ADD_PLAN_TRAINING_BUTTON,
    SHOW_REMOVE_PLAN_TRAINING_BUTTON,
    HIDE_REMOVE_PLAN_TRAINING_BUTTON,
    SHOW_EDIT_TRAINING_DETAIL_CYCLES_MODAL,
    HIDE_EDIT_TRAINING_DETAIL_CYCLES_MODAL,
    SHOW_EDIT_TRAINING_DETAIL_START_CARDIO_MINUTES_MODAL,
    HIDE_EDIT_TRAINING_DETAIL_START_CARDIO_MINUTES_MODAL,
    SHOW_EDIT_TRAINING_DETAIL_FINISH_CARDIO_MINUTES_MODAL,
    HIDE_EDIT_TRAINING_DETAIL_FINISH_CARDIO_MINUTES_MODAL   
} from '../types/trainingDetailTypes'

const initialState = {    
    trainingDetail: {},
    addPlanTrainingButtonIsVisible: false,
    removePlanTrainingButtonIsVisible: false,
    editTrainingDetailCyclesModalIsOpened: false,
    editTrainingDetailStartCardioMinutesModalIsOpened: false,
    editTrainingDetailFinishCardioMinutesModalIsOpened: false
}

export const trainingDetailReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_TRAINING_DETAIL:
            return {...state, trainingDetail: {...action.payload}}

        case SHOW_ADD_PLAN_TRAINING_BUTTON:
            return {...state, addPlanTrainingButtonIsVisible: true}
        
        case HIDE_ADD_PLAN_TRAINING_BUTTON:
            return {...state, addPlanTrainingButtonIsVisible: false}

        case SHOW_REMOVE_PLAN_TRAINING_BUTTON:
            return {...state, removePlanTrainingButtonIsVisible: true}
        
        case HIDE_REMOVE_PLAN_TRAINING_BUTTON:
            return {...state, removePlanTrainingButtonIsVisible: false}

        case SHOW_EDIT_TRAINING_DETAIL_CYCLES_MODAL:
            return {...state, editTrainingDetailCyclesModalIsOpened: true}
        
        case HIDE_EDIT_TRAINING_DETAIL_CYCLES_MODAL:
            return {...state, editTrainingDetailCyclesModalIsOpened: false}

        case SHOW_EDIT_TRAINING_DETAIL_START_CARDIO_MINUTES_MODAL:
            return {...state, editTrainingDetailStartCardioMinutesModalIsOpened: true}
        
        case HIDE_EDIT_TRAINING_DETAIL_START_CARDIO_MINUTES_MODAL:
            return {...state, editTrainingDetailStartCardioMinutesModalIsOpened: false}

        case SHOW_EDIT_TRAINING_DETAIL_FINISH_CARDIO_MINUTES_MODAL:
            return {...state, editTrainingDetailFinishCardioMinutesModalIsOpened: true}
        
        case HIDE_EDIT_TRAINING_DETAIL_FINISH_CARDIO_MINUTES_MODAL:
            return {...state, editTrainingDetailFinishCardioMinutesModalIsOpened: false}

        default: return state
    }
}