import {
    SAGA_TRAINING_DETAIL,
    SAGA_EDIT_TRAINING_DETAIL_CYCLES,
    SAGA_EDIT_TRAINING_DETAIL_START_CARDIO_MINUTES,
    SAGA_EDIT_TRAINING_DETAIL_FINISH_CARDIO_MINUTES,
    FETCH_TRAINING_DETAIL,
    SHOW_ADD_PLAN_TRAINING_BUTTON,
    HIDE_ADD_PLAN_TRAINING_BUTTON,
    SHOW_REMOVE_PLAN_TRAINING_BUTTON,
    HIDE_REMOVE_PLAN_TRAINING_BUTTON,    
    SHOW_EDIT_TRAINING_DETAIL_CYCLES_MODAL,
    HIDE_EDIT_TRAINING_DETAIL_CYCLES_MODAL,
    SHOW_EDIT_TRAINING_DETAIL_START_CARDIO_MINUTES_MODAL,
    HIDE_EDIT_TRAINING_DETAIL_START_CARDIO_MINUTES_MODAL,
    SHOW_EDIT_TRAINING_DETAIL_FINISH_CARDIO_MINUTES_MODAL,
    HIDE_EDIT_TRAINING_DETAIL_FINISH_CARDIO_MINUTES_MODAL,
    SHOW_ADD_PLAN_TRAINING_MODAL,
    HIDE_ADD_PLAN_TRAINING_MODAL
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

export const showAddPlanTrainingButton = () => {
    return {
        type: SHOW_ADD_PLAN_TRAINING_BUTTON
    }
}

export const hideAddPlanTrainingButton = () => {
    return {
        type: HIDE_ADD_PLAN_TRAINING_BUTTON
    }
}

export const showRemovePlanTrainingButton = () => {
    return {
        type: SHOW_REMOVE_PLAN_TRAINING_BUTTON
    }
}

export const hideRemovePlanTrainingButton = () => {
    return {
        type: HIDE_REMOVE_PLAN_TRAINING_BUTTON
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

export const showAddPlanTrainingModal = () => {
    return {
        type: SHOW_ADD_PLAN_TRAINING_MODAL
    }
}

export const hideAddPlanTrainingModal = () => {
    return {
        type: HIDE_ADD_PLAN_TRAINING_MODAL
    }
}
