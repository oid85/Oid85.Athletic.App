import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { exerciseTemplateReducer } from './exerciseTemplateReducer'
import { trainingReducer } from './trainingReducer'
import { trainingDetailReducer } from './trainingDetailReducer'

export const rootReducer = combineReducers({
    app: appReducer,
	exerciseTemplate: exerciseTemplateReducer,
    training: trainingReducer,
    trainingDetail: trainingDetailReducer
})