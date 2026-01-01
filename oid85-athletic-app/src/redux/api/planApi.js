import {sendPostRequest} from './api'

const controller = 'plans'

export const getPlanListFromApi = async () => {
    return sendPostRequest(`${controller}/list/week`, {})
}

export const addDayTrainingPlanFromApi = async (date, trainingId) => {
    return sendPostRequest(`${controller}/set/day`, {date, trainingId})
}

export const removeTrainingPlanFromApi = async (planId, trainingId) => {
    return sendPostRequest(`${controller}/remove`, {planId, trainingId})
}