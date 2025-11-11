import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { exerciseTemplateReducer } from './exerciseTemplateReducer'
import { trainingReducer } from './trainingReducer'

export const rootReducer = combineReducers({
    app: appReducer,
	exerciseTemplate: exerciseTemplateReducer,
    training: trainingReducer
})