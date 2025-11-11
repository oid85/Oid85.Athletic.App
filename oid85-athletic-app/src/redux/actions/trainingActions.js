import {
    SAGA_GET_TRAINING_LIST,
    SAGA_CREATE_TRAINING,
    SAGA_EDIT_TRAINING,
    SAGA_DELETE_TRAINING,
    FETCH_GET_TRAINING_LIST,
    FETCH_CURRENT_TRAINING,
    SHOW_CREATE_TRAINING_MODAL,
    HIDE_CREATE_TRAINING_MODAL,
    SHOW_EDIT_TRAINING_MODAL,
    HIDE_EDIT_TRAINING_MODAL
} from '../types/trainingTypes'


export const sagaGetTrainingList = () => {
    return {
        type: SAGA_GET_TRAINING_LIST
    }
}

export const sagaCreateTraining = () => {    
    return {
        type: SAGA_CREATE_TRAINING
    }
}

export const sagaDeleteTraining = () => {    
    return {
        type: SAGA_DELETE_TRAINING
    }
}

export const sagaEditTraining = () => {    
    return {
        type: SAGA_EDIT_TRAINING
    }
}

export const fetchGetTrainingList = (data) => {
    return {
        type: FETCH_GET_TRAINING_LIST,
        payload: data
    }
}

export const fetchCurrentTraining = (data) => {
    return {
        type: FETCH_CURRENT_TRAINING,
        payload: data
    }
}

export const showCreateTrainingModal = () => {
    return {
        type: SHOW_CREATE_TRAINING_MODAL
    }
}

export const hideCreateTrainingModal = () => {
    return {
        type: HIDE_CREATE_TRAINING_MODAL
    }
}

export const showEditTrainingModal = () => {
    return {
        type: SHOW_EDIT_TRAINING_MODAL
    }
}

export const hideEditTrainingModal = () => {
    return {
        type: HIDE_EDIT_TRAINING_MODAL
    }
}
