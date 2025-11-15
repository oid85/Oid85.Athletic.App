import {sendPostRequest} from './api'

const controller = 'exercise'

export const createExerciseFromApi = async (exerciseTemplateId, trainingId) => {
    return sendPostRequest(`${controller}/create`, {exerciseTemplateId, trainingId})
}

export const editExerciseFromApi = async (id, order, weight, countIterations, minutes) => {
    return sendPostRequest(`${controller}/edit`, {id, order, weight, countIterations, minutes})
}

export const deleteExerciseFromApi = async (id) => {
    return sendPostRequest(`${controller}/delete`, {id})
}
