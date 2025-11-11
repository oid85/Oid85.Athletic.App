import {sendPostRequest} from './api'

const controller = 'exercise-templates'

export const getExerciseTemplateListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {})
}

export const createExerciseTemplateFromApi = async (name, equipment, muscles) => {
    return sendPostRequest(`${controller}/create`, {name, equipment, muscles})
}

export const editExerciseTemplateFromApi = async (id, name, equipment, muscles) => {
    return sendPostRequest(`${controller}/edit`, {id, name, equipment, muscles})
}

export const deleteExerciseTemplateFromApi = async (id) => {
    return sendPostRequest(`${controller}/delete`, {id})
}
