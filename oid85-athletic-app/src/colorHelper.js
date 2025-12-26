import { CONSTANTS } from "./constants"

export const intensityColor = (intensity) => {
    if (intensity >= 0 && intensity < 1000) { return CONSTANTS.COLOR_YELLOW }
    if (intensity >= 1000 && intensity < 2000) { return CONSTANTS.COLOR_LIGHTSALMON }
    if (intensity >= 2000 && intensity < 3000) { return CONSTANTS.COLOR_CORAL }
    if (intensity >= 3000 && intensity < 4000) { return CONSTANTS.COLOR_TOMATO }
    if (intensity >= 4000) { return CONSTANTS.COLOR_ORANGERED }
    
    return CONSTANTS.COLOR_GREEN
}

export const pressureSysColor = (pressure) => {
    if (pressure >= 140 && pressure < 150) { return CONSTANTS.COLOR_YELLOW }
    if (pressure >= 150 && pressure < 160) { return CONSTANTS.COLOR_LIGHTSALMON }
    if (pressure >= 160 && pressure < 170) { return CONSTANTS.COLOR_CORAL }
    if (pressure >= 170) { return CONSTANTS.COLOR_TOMATO }
    
    return CONSTANTS.COLOR_GREEN
}

export const pressureDiaColor = (pressure) => {
    if (pressure >= 90 && pressure < 100) { return CONSTANTS.COLOR_YELLOW }
    if (pressure >= 100) { return CONSTANTS.COLOR_LIGHTSALMON }
    
    return CONSTANTS.COLOR_GREEN
}

export const glucoseColor = (value) => {
    if (value >= 3.3 && value < 6.0) { return CONSTANTS.COLOR_GREEN }
    if (value >= 6.0 && value < 8.0) { return CONSTANTS.COLOR_YELLOW }
    if (value >= 8.0) { return CONSTANTS.COLOR_LIGHTSALMON }
    
    return CONSTANTS.COLOR_GREEN
}