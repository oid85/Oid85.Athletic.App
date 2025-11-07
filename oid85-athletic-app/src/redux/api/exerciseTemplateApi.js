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
