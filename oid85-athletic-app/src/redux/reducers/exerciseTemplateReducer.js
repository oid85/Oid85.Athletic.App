import {
    FETCH_GET_EXERCISE_TEMPLATE_LIST
} from '../types/exerciseTemplateTypes'

const initialState = {
    exerciseTemplateList: {}
}

export const exerciseTemplateReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_GET_EXERCISE_TEMPLATE_LIST:
            return {...state, exerciseTemplateList: {...action.payload}}

        default: return state
    }
}