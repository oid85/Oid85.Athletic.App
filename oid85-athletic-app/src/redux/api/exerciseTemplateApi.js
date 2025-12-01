import {sendPostRequest} from './api'

const controller = 'exercise-templates'

export const getExerciseTemplateListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {})
}

export const createExerciseTemplateFromApi = async (name) => {
    return sendPostRequest(`${controller}/create`, {name})
}

export const editExerciseTemplateFromApi = async (id, name) => {
    return sendPostRequest(`${controller}/edit`, {id, name})
}

export const deleteExerciseTemplateFromApi = async (id) => {
    return sendPostRequest(`${controller}/delete`, {id})
}
