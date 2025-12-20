import {
    SAGA_PRESSURE_LIST,
    SAGA_CREATE_PRESSURE,
    FETCH_PRESSURE_LIST,
    FETCH_CURRENT_PRESSURE,
    SHOW_CREATE_PRESSURE_MODAL,
    HIDE_CREATE_PRESSURE_MODAL
} from '../types/pressureTypes'


export const sagaGetPressureList = () => {
    return {
        type: SAGA_PRESSURE_LIST
    }
}

export const sagaCreatePressure = () => {    
    return {
        type: SAGA_CREATE_PRESSURE
    }
}

export const fetchGetPressureList = (data) => {
    return {
        type: FETCH_PRESSURE_LIST,
        payload: data
    }
}

export const fetchCurrentPressure = (data) => {
    return {
        type: FETCH_CURRENT_PRESSURE,
        payload: data
    }
}

export const showCreatePressureModal = () => {
    return {
        type: SHOW_CREATE_PRESSURE_MODAL
    }
}

export const hideCreatePressureModal = () => {
    return {
        type: HIDE_CREATE_PRESSURE_MODAL
    }
}
