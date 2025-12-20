import {
    FETCH_PRESSURE_LIST,
    FETCH_CURRENT_PRESSURE,
    SHOW_CREATE_PRESSURE_MODAL,
    HIDE_CREATE_PRESSURE_MODAL   
} from '../types/pressureTypes'

const initialState = {
    pressureList: {},
    currentPressure: {},
    createPressureModalIsOpened: false
}

export const pressureReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_PRESSURE_LIST:
            return {...state, pressureList: {...action.payload}}

        case FETCH_CURRENT_PRESSURE:
            return {...state, currentPressure: {...action.payload}}

        case SHOW_CREATE_PRESSURE_MODAL:
            return {...state, createPressureModalIsOpened: true}
        
        case HIDE_CREATE_PRESSURE_MODAL:
            return {...state, createPressureModalIsOpened: false}

        default: return state
    }
}