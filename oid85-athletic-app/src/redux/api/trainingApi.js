import {sendPostRequest} from './api'

const controller = 'trainings'

export const getTrainingListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {})
}

export const createTrainingFromApi = async (name, description) => {
    return sendPostRequest(`${controller}/create`, {name, description})
}

export const editTrainingFromApi = async (id, name, description) => {
    return sendPostRequest(`${controller}/edit`, {id, name, description})
}

export const deleteTrainingFromApi = async (id) => {
    return sendPostRequest(`${controller}/delete`, {id})
}
