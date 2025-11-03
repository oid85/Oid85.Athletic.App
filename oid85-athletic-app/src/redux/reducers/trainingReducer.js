import {
    FETCH_EXERCISE_LIST
} from '../types/trainingTypes'

const initialState = {
    exerciseList: {}
}

export const trainingReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_EXERCISE_LIST:
            return {...state, exerciseList: {...action.payload}}

        default: return state
    }
}