import {sendPostRequest} from './api'

const controller = 'trainings'

export const getTrainingListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {})
}

export const createTrainingFromApi = async (name) => {
    return sendPostRequest(`${controller}/create`, {name})
}

export const editTrainingFromApi = async (id, name) => {
    return sendPostRequest(`${controller}/edit-name`, {id, name})
}

export const deleteTrainingFromApi = async (id) => {
    return sendPostRequest(`${controller}/delete`, {id})
}
