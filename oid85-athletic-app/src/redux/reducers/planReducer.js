import {
    FETCH_PLAN_LIST,
    FETCH_CURRENT_PLAN_LIST  
} from '../types/planTypes'

const initialState = {
    planList: {},
    currentPlan: {}
}

export const planReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_PLAN_LIST:
            return {...state, planList: {...action.payload}}

        case FETCH_CURRENT_PLAN_LIST:
            return {...state, currentPlan: {...action.payload}}

        default: return state
    }
}