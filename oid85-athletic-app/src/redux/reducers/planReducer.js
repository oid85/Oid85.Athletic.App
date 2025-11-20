import {
    FETCH_PLAN_LIST  
} from '../types/planTypes'

const initialState = {
    planList: {}
}

export const planReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_PLAN_LIST:
            return {...state, planList: {...action.payload}}

        default: return state
    }
}