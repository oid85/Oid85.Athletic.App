import { CONSTANTS } from "./constants"

let lowLimit = 1500
let delta = 750

export const intensityColor = (intensity) => {
    if (intensity >= 0 && intensity < lowLimit) { return CONSTANTS.COLOR_YELLOW }
    if (intensity >= lowLimit && intensity < lowLimit + delta) { return CONSTANTS.COLOR_LIGHTSALMON }
    if (intensity >= lowLimit + delta && intensity < lowLimit + delta * 2) { return CONSTANTS.COLOR_CORAL }
    if (intensity >= lowLimit + delta * 2 && intensity < lowLimit + delta * 3) { return CONSTANTS.COLOR_TOMATO }
    if (intensity >= lowLimit + delta * 3) { return CONSTANTS.COLOR_ORANGERED }
    
    return CONSTANTS.COLOR_GREEN
}
