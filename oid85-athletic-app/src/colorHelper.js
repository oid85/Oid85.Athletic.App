import { CONSTANTS } from "./constants"

export const intensityColor = (intensity) => {
    if (intensity >= 0 && intensity < 1000) { return CONSTANTS.COLOR_YELLOW }
    if (intensity >= 1000 && intensity < 2000) { return CONSTANTS.COLOR_LIGHTSALMON }
    if (intensity >= 2000 && intensity < 3000) { return CONSTANTS.COLOR_CORAL }
    if (intensity >= 3000 && intensity < 4000) { return CONSTANTS.COLOR_TOMATO }
    if (intensity >= 4000) { return CONSTANTS.COLOR_ORANGERED }
    
    return CONSTANTS.COLOR_GREEN
}