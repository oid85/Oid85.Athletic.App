import {sendPostRequest} from './api'

const controller = 'plans'

export const getPlanListFromApi = async () => {
    return sendPostRequest(`${controller}/list/week`, {})
}
