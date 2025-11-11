import {
    FETCH_TRAINING_DETAIL_ID,
    FETCH_TRAINING_DETAIL   
} from '../types/trainingDetailTypes'

const initialState = {    
    trainingDetailId: '',
    trainingDetail: {}
}

export const trainingDetailReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_TRAINING_DETAIL_ID:
            return {...state, trainingDetailId: {...action.payload}}

        case FETCH_TRAINING_DETAIL:
            return {...state, trainingDetail: {...action.payload}}

        default: return state
    }
}