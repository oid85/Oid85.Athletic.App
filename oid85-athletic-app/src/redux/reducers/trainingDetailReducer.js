import {
    FETCH_TRAINING_DETAIL   
} from '../types/trainingDetailTypes'

const initialState = {    
    trainingDetail: {}
}

export const trainingDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRAINING_DETAIL:
            return {...state, trainingDetail: {...action.payload}}

        default: return state
    }
}