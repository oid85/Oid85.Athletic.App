import {sendPostRequest} from './api'

const controller = 'trainings'

export const getTrainingDetailFromApi = async (id) => {
    return sendPostRequest(`${controller}/get`, {id})
}

export const editTrainingDetailCyclesFromApi = async (id, cycles) => {
    return sendPostRequest(`${controller}/edit-cycles`, {id, cycles})
}

export const editTrainingDetailStartCardioMinutesFromApi = async (id, startCardioMinutes) => {
    return sendPostRequest(`${controller}/edit-start-cardio-minutes`, {id, startCardioMinutes})
}

export const editTrainingDetailFinishCardioMinutesFromApi = async (id, finishCardioMinutes) => {
    return sendPostRequest(`${controller}/edit-finish-cardio-minutes`, {id, finishCardioMinutes})
}