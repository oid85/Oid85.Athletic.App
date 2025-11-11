import {sendPostRequest} from './api'

const controller = 'trainings'

export const getTrainingDetailFromApi = async (id) => {
    return sendPostRequest(`${controller}/get`, {id})
}
