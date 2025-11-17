import {
    SAGA_TRAINING_DETAIL,
    SAGA_EDIT_TRAINING_DETAIL_CYCLES,
    SAGA_EDIT_TRAINING_DETAIL_START_CARDIO_MINUTES,
    SAGA_EDIT_TRAINING_DETAIL_FINISH_CARDIO_MINUTES,
    FETCH_TRAINING_DETAIL,
    SHOW_EDIT_TRAINING_DETAIL_CYCLES_MODAL,
    HIDE_EDIT_TRAINING_DETAIL_CYCLES_MODAL,
    SHOW_EDIT_TRAINING_DETAIL_START_CARDIO_MINUTES_MODAL,
    HIDE_EDIT_TRAINING_DETAIL_START_CARDIO_MINUTES_MODAL,
    SHOW_EDIT_TRAINING_DETAIL_FINISH_CARDIO_MINUTES_MODAL,
    HIDE_EDIT_TRAINING_DETAIL_FINISH_CARDIO_MINUTES_MODAL
} from '../types/trainingDetailTypes'


export const sagaTrainingDetail = () => {
    return {
        type: SAGA_TRAINING_DETAIL
    }
}

export const sagaTrainingDetailCycles = () => {
    return {
        type: SAGA_EDIT_TRAINING_DETAIL_CYCLES
    }
}

export const sagaTrainingDetailStartCardioMinutes = () => {
    return {
        type: SAGA_EDIT_TRAINING_DETAIL_START_CARDIO_MINUTES
    }
}

export const sagaTrainingDetailFinishCardioMinutes = () => {
    return {
        type: SAGA_EDIT_TRAINING_DETAIL_FINISH_CARDIO_MINUTES
    }
}

export const fetchTrainingDetail = (data) => {
    return {
        type: FETCH_TRAINING_DETAIL,
        payload: data
    }
}

export const showEditTrainingDetailCyclesModal = () => {
    return {
        type: SHOW_EDIT_TRAINING_DETAIL_CYCLES_MODAL
    }
}

export const hideEditTrainingDetailCyclesModal = () => {
    return {
        type: HIDE_EDIT_TRAINING_DETAIL_CYCLES_MODAL
    }
}

export const showEditTrainingDetailStartCardioMinutesModal = () => {
    return {
        type: SHOW_EDIT_TRAINING_DETAIL_START_CARDIO_MINUTES_MODAL
    }
}

export const hideEditTrainingDetailStartCardioMinutesModal = () => {
    return {
        type: HIDE_EDIT_TRAINING_DETAIL_START_CARDIO_MINUTES_MODAL
    }
}

export const showEditTrainingDetailFinishCardioMinutesModal = () => {
    return {
        type: SHOW_EDIT_TRAINING_DETAIL_FINISH_CARDIO_MINUTES_MODAL
    }
}

export const hideEditTrainingDetailFinishCardioMinutesModal = () => {
    return {
        type: HIDE_EDIT_TRAINING_DETAIL_FINISH_CARDIO_MINUTES_MODAL
    }
}
