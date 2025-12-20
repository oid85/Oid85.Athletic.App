import {sendPostRequest} from './api'

const controller = 'pressure'

export const getPressureListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {})
}

export const createPressureFromApi = async (sys, dia, pulse) => {
    return sendPostRequest(`${controller}/create`, {sys, dia, pulse})
}
