import {CONSTANTS} from "../../constants"

export const exerciseListFromApi = async () => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/training/exercise-list`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

            })
        })

    if (response.ok) {
        return await response.json()
    }
}
