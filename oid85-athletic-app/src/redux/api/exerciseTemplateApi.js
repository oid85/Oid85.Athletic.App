import {CONSTANTS} from "../../constants"

export const getExerciseTemplateListFromApi = async () => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/exercise-templates/list`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                equipment: ''
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const createExerciseTemplateFromApi = async (name, equipment, muscles) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/exercise-templates/create`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                equipment: equipment,
                muscles: muscles
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const editExerciseTemplateFromApi = async (id, name, equipment, muscles) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/exercise-templates/edit`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                name: name,
                equipment: equipment,
                muscles: muscles
            })
        })

    if (response.ok) {
        return await response.json()
    }
}