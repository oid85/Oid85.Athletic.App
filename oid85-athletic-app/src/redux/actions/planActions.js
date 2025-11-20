import {
    SAGA_PLAN_LIST,
    FETCH_PLAN_LIST,
    FETCH_CURRENT_PLAN_LIST
} from '../types/planTypes'


export const sagaGetPlanList = () => {
    return {
        type: SAGA_PLAN_LIST
    }
}

export const fetchGetPlanList = (data) => {
    return {
        type: FETCH_PLAN_LIST,
        payload: data
    }
}

export const fetchCurrentPlan = (data) => {
    return {
        type: FETCH_CURRENT_PLAN_LIST,
        payload: data
    }
}