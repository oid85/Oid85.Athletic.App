import {
    SAGA_PLAN_LIST,
    SAGA_ADD_DAY_TRAINING_PLAN,
    SAGA_REMOVE_TRAINING_PLAN,
    FETCH_PLAN_LIST,
    FETCH_CURRENT_PLAN_LIST
} from '../types/planTypes'

export const sagaGetPlanList = () => {
    return {
        type: SAGA_PLAN_LIST
    }
}

export const sagaAddDayTrainingPlan = () => {
    return {
        type: SAGA_ADD_DAY_TRAINING_PLAN
    }
}

export const sagaRemoveTrainingPlan = () => {
    return {
        type: SAGA_REMOVE_TRAINING_PLAN
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