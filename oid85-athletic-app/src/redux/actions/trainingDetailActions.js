import {
    SAGA_TRAINING_DETAIL,
    FETCH_TRAINING_DETAIL
} from '../types/trainingDetailTypes'


export const sagaTrainingDetail = () => {
    return {
        type: SAGA_TRAINING_DETAIL
    }
}

export const fetchTrainingDetail = (data) => {
    return {
        type: FETCH_TRAINING_DETAIL,
        payload: data
    }
}
